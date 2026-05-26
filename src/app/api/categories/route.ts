import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Category } from "@/models/Category";

export const runtime = "nodejs";

type CategoryPayload = {
    name?: string;
    description?: string;
};

export async function GET() {
    try {
        await connectToDatabase();

        const categories = await Category.find().sort({ createdAt: -1 }).lean();

        return NextResponse.json({ ok: true, data: categories });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to fetch categories.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as CategoryPayload;
        const name = body.name?.trim() || "";
        const description = body.description?.trim() || "";

        if (!name) {
            return NextResponse.json(
                { ok: false, message: "Category name is required." },
                { status: 400 },
            );
        }

        await connectToDatabase();
        const created = await Category.create({ name, description });

        return NextResponse.json({ ok: true, data: created }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to create category.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}
