import path from "path";
import { readFile } from "fs/promises";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Logo.png");
  const data = await readFile(filePath);
  const bytes = new Uint8Array(data);

  return new Response(bytes, {
    headers: {
      "content-type": "image/png",
      "cache-control": "no-store, max-age=0",
    },
  });
}
