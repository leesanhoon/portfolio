import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export const runtime = "nodejs";

type ProductPayload = {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    categoryId?: string;
};

export async function GET() {
    try {
        await connectToDatabase();

        const products = await Product.find()
            .populate("category", "name description")
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json({ ok: true, data: products });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to fetch products.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as ProductPayload;

        const name = body.name?.trim() || "";
        const description = body.description?.trim() || "";
        const price = body.price;
        const stock = body.stock;
        const categoryId = body.categoryId?.trim() || "";

        if (!name || typeof price !== "number" || typeof stock !== "number" || !categoryId) {
            return NextResponse.json(
                {
                    ok: false,
                    message:
                        "name, price, stock, categoryId are required. price and stock must be numbers.",
                },
                { status: 400 },
            );
        }

        if (!isValidObjectId(categoryId)) {
            return NextResponse.json(
                { ok: false, message: "categoryId is invalid." },
                { status: 400 },
            );
        }

        await connectToDatabase();

        const category = await Category.findById(categoryId).lean();
        if (!category) {
            return NextResponse.json(
                { ok: false, message: "Category not found." },
                { status: 404 },
            );
        }

        const created = await Product.create({
            name,
            description,
            price,
            stock,
            category: categoryId,
        });

        const createdProduct = await Product.findById(created._id)
            .populate("category", "name description")
            .lean();

        return NextResponse.json({ ok: true, data: createdProduct }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to create product.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}
