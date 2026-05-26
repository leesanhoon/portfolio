import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export const runtime = "nodejs";

type Params = {
    params: Promise<{ id: string }>;
};

type ProductUpdatePayload = {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    categoryId?: string;
};

function invalidIdResponse() {
    return NextResponse.json(
        { ok: false, message: "Product id is invalid." },
        { status: 400 },
    );
}

export async function GET(_request: NextRequest, { params }: Params) {
    try {
        const { id } = await params;

        if (!isValidObjectId(id)) {
            return invalidIdResponse();
        }

        await connectToDatabase();

        const product = await Product.findById(id)
            .populate("category", "name description")
            .lean();

        if (!product) {
            return NextResponse.json(
                { ok: false, message: "Product not found." },
                { status: 404 },
            );
        }

        return NextResponse.json({ ok: true, data: product });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to fetch product.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}

export async function PATCH(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params;

        if (!isValidObjectId(id)) {
            return invalidIdResponse();
        }

        const body = (await request.json()) as ProductUpdatePayload;
        const updates: {
            name?: string;
            description?: string;
            price?: number;
            stock?: number;
            category?: string;
        } = {};

        if (typeof body.name === "string") {
            updates.name = body.name.trim();
        }

        if (typeof body.description === "string") {
            updates.description = body.description.trim();
        }

        if (typeof body.price === "number") {
            updates.price = body.price;
        }

        if (typeof body.stock === "number") {
            updates.stock = body.stock;
        }

        if (typeof body.categoryId === "string") {
            const categoryId = body.categoryId.trim();

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

            updates.category = categoryId;
        }

        if (!Object.keys(updates).length) {
            return NextResponse.json(
                { ok: false, message: "No valid fields provided to update." },
                { status: 400 },
            );
        }

        await connectToDatabase();
        const updated = await Product.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        })
            .populate("category", "name description")
            .lean();

        if (!updated) {
            return NextResponse.json(
                { ok: false, message: "Product not found." },
                { status: 404 },
            );
        }

        return NextResponse.json({ ok: true, data: updated });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to update product.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
    try {
        const { id } = await params;

        if (!isValidObjectId(id)) {
            return invalidIdResponse();
        }

        await connectToDatabase();

        const deleted = await Product.findByIdAndDelete(id).lean();
        if (!deleted) {
            return NextResponse.json(
                { ok: false, message: "Product not found." },
                { status: 404 },
            );
        }

        return NextResponse.json({ ok: true, data: deleted });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to delete product.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}
