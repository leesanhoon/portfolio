import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ContactMessage } from "@/models/ContactMessage";

export const runtime = "nodejs";

type ContactPayload = {
    name?: string;
    email?: string;
    message?: string;
};

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
    try {
        await connectToDatabase();

        const messages = await ContactMessage.find()
            .sort({ createdAt: -1 })
            .limit(20)
            .lean();

        return NextResponse.json({ ok: true, data: messages });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to fetch contact messages.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as ContactPayload;

        const name = body.name?.trim() || "";
        const email = body.email?.trim().toLowerCase() || "";
        const message = body.message?.trim() || "";

        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, message: "name, email, message are required." },
                { status: 400 },
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { ok: false, message: "Email is invalid." },
                { status: 400 },
            );
        }

        await connectToDatabase();
        const created = await ContactMessage.create({ name, email, message });

        return NextResponse.json(
            {
                ok: true,
                data: {
                    id: created._id,
                    name: created.name,
                    email: created.email,
                    message: created.message,
                    createdAt: created.createdAt,
                },
            },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: "Failed to create contact message.",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        );
    }
}
