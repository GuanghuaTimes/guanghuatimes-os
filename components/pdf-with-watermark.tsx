import * as React from "react";

import { cn } from "@/lib/utils";

interface PdfWithWatermarkProps {
  src: string;
  title?: string;
  height?: number | string;
  watermarkText?: string;
  className?: string;
  variant?: "default" | "embedded";
}

export function PdfWithWatermark({
  src,
  title,
  height = 900,
  watermarkText = "GUANGHUA BIO",
  className,
  variant = "default",
}: PdfWithWatermarkProps) {
  const watermarkItems = React.useMemo(
    () => Array.from({ length: 30 }, (_, i) => i),
    []
  );

  const embedded = variant === "embedded";

  return (
    <section className={cn(embedded ? "" : "my-6", className)}>
      {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
      <div
        className={cn(
          "relative w-full overflow-hidden",
          embedded ? "" : "mt-3 rounded-md border bg-background"
        )}
      >
        <iframe
          src={src}
          title={title ?? "PDF"}
          className="block w-full"
          style={{ height }}
        />
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 -rotate-12 opacity-20">
            <div className="grid grid-cols-3 gap-20">
              {watermarkItems.map((i) => (
                <div
                  key={i}
                  className="text-center text-4xl font-semibold tracking-widest text-foreground"
                >
                  {watermarkText}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
