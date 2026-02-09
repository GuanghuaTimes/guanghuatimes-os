import { ImageResponse } from "next/server";
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
  const base64 = data.toString("base64");
  const src = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <img src={src} width={size.width} height={size.height} />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
