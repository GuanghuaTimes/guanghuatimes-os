import path from "path";
import { readFile } from "fs/promises";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  { params }: { params: { filename: string } }
) {
  const requested = params.filename;

  if (!requested || !requested.toLowerCase().endsWith(".pdf")) {
    return new Response("Not Found", { status: 404 });
  }

  const filename = path.basename(requested);
  const candidatePaths = [
    path.join(process.cwd(), "public", "application-case-pdf", filename),
    path.join(process.cwd(), "public", "application-cases", filename),
  ];

  try {
    const data = await (async () => {
      for (const candidatePath of candidatePaths) {
        try {
          return await readFile(candidatePath);
        } catch {
          // try next path
        }
      }
      throw new Error("not found");
    })();

    const body = new Uint8Array(data);

    return new Response(body, {
      headers: {
        "content-type": "application/pdf",
        "cache-control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}
