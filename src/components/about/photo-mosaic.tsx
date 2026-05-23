import Image from "next/image";

import { Container } from "@/components/ui/container";
import { MediaTile } from "@/components/ui/media-tile";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/cn";
import { PHOTOS } from "@/lib/about";

const SPAN_CLASS = {
  tall: "photo-tile--tall",
  wide: "photo-tile--wide",
  square: "photo-tile--square",
} as const;

export function PhotoMosaic() {
  return (
    <Reveal>
      <Container as="section" className="grid auto-rows-[120px] grid-cols-12 gap-4 py-20 md:grid-cols-12 md:auto-rows-[120px]">
        {PHOTOS.map((photo, index) => (
          <MediaTile
            key={photo.src}
            className={cn(
              "rounded-lg transition-[transform,border-color] duration-500 ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:border-line-strong",
              SPAN_CLASS[photo.span],
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 800px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover"
              priority={index < 2}
            />
          </MediaTile>
        ))}
      </Container>
    </Reveal>
  );
}
