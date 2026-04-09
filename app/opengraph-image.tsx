import { ImageResponse } from "next/og";

import { SocialCard } from "@/lib/social-card";

export const alt = "Muse Spark social preview image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <SocialCard
      eyebrow="Muse Spark"
      title="AI studio for prompts, remixing, and launch-ready creative systems"
      subtitle="Capture sparks, shape ideas, and turn them into visual direction, copy, and workflows."
    />,
    size
  );
}
