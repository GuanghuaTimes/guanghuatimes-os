import path from "path";
import { readFile } from "fs/promises";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
  const filePath = path.join(process.cwd(), "public", "Logo.png");
  const data = await readFile(filePath);

  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
