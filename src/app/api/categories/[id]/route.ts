import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

export const runtime = "nodejs";

type Params = {
    params: Promise<{ id: string }>;
};

type CategoryPayload = {
    name?: string;
    description?: string;
};

function invalidIdResponse() {
    return NextResponse.json(
        { ok: false, message: "Category id is invalid." },
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

        const category = await Category.findById(id).lean();

        if (!category) {
            return NextResponse.json(
                { ok: false, message: "Category not found." },
                { status: 404 },
            );
        }

        return NextResponse.json({ ok: true, data: category });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to fetch category.",
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

        const body = (await request.json()) as CategoryPayload;
        const updates: CategoryPayload = {};

        if (typeof body.name === "string") {
            updates.name = body.name.trim();
        }

        if (typeof body.description === "string") {
            updates.description = body.description.trim();
        }

        if (!Object.keys(updates).length) {
            return NextResponse.json(
                { ok: false, message: "No valid fields provided to update." },
                { status: 400 },
            );
        }

        await connectToDatabase();

        const updated = await Category.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        }).lean();

        if (!updated) {
            return NextResponse.json(
                { ok: false, message: "Category not found." },
                { status: 404 },
            );
        }

        return NextResponse.json({ ok: true, data: updated });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to update category.",
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

        const totalProducts = await Product.countDocuments({ category: id });

        if (totalProducts > 0) {
            return NextResponse.json(
                {
                    ok: false,
                    message: "Cannot delete category that still has products.",
                    totalProducts,
                },
                { status: 409 },
            );
        }

        const deleted = await Category.findByIdAndDelete(id).lean();

        if (!deleted) {
            return NextResponse.json(
                { ok: false, message: "Category not found." },
                { status: 404 },
            );
        }

        return NextResponse.json({ ok: true, data: deleted });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to delete category.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}
