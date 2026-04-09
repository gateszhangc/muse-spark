import { ImageResponse } from "next/og";

import { SocialCard } from "@/lib/social-card";

export const alt = "Muse Spark Twitter image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <SocialCard
      eyebrow="Creative Signal Studio"
      title="Muse Spark"
      subtitle="A creative assistant for prompt capture, visual remix, and launch-ready workflows."
    />,
    size
  );
}
