import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/cn";

export interface CaseFigureImage {
  src: string;
  alt: string;
  /** Width / height for aspect-ratio. Defaults to 1190 / 1996 for PDF-page exports. */
  width?: number;
  height?: number;
}

interface CaseFigureProps {
  images: CaseFigureImage[];
  caption?: string;
  kicker?: string;
  /** Render first image with priority for above-the-fold figures. */
  priority?: boolean;
}

/**
 * Image-driven figure for case studies. One image renders constrained
 * and centred; multiple images flow into a 2-up (or 4-up) grid.
 */
export function CaseFigure({ images, caption, kicker, priority }: CaseFigureProps) {
  const cols = images.length === 1 ? 1 : images.length === 4 ? 2 : Math.min(images.length, 3);

  return (
    <Reveal>
      <Container as="figure" className="my-20">
        <div
          className={cn(
            "grid gap-4 md:gap-6",
            cols === 1 && "mx-auto max-w-[760px] grid-cols-1",
            cols === 2 && "grid-cols-1 md:grid-cols-2",
            cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {images.map((image, index) => {
            const w = image.width ?? 1190;
            const h = image.height ?? 1996;
            return (
              <div
                key={image.src}
                className="overflow-hidden rounded-lg border border-line bg-bg-elev"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={w}
                  height={h}
                  sizes={
                    cols === 1
                      ? "(min-width: 1024px) 760px, 100vw"
                      : cols === 2
                        ? "(min-width: 768px) 50vw, 100vw"
                        : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  }
                  priority={priority && index === 0}
                  className="h-auto w-full"
                />
              </div>
            );
          })}
        </div>

        {(caption || kicker) && (
          <figcaption className="mt-6 flex flex-col gap-1 text-center md:flex-row md:items-baseline md:justify-center md:gap-4">
            {kicker && (
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {kicker}
              </span>
            )}
            {caption && (
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                {caption}
              </span>
            )}
          </figcaption>
        )}
      </Container>
    </Reveal>
  );
}
