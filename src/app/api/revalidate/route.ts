import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const configuredSecret = process.env.SANITY_REVALIDATE_SECRET;
    if (!configuredSecret) {
        return NextResponse.json({ message: "Server misconfiguration" }, { status: 500 });
    }

    const secret = req.headers.get("x-sanity-webhook-secret");
    if (!secret || !secret.trim() || secret !== configuredSecret) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidatePath("/", "layout");

    return NextResponse.json({ revalidated: true });
}
