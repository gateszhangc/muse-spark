import type { ReactElement } from "react";

import { siteConfig } from "@/lib/site";

type SocialCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

const baseStyles = {
  display: "flex",
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(140deg, #f7f2ea 0%, #efe6d8 55%, #eadfce 100%)",
  color: "#19161a",
  padding: "56px",
  fontFamily: "sans-serif",
} as const;

export function SocialCard({
  eyebrow,
  title,
  subtitle,
}: SocialCardProps): ReactElement {
  return (
    <div style={baseStyles}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          borderRadius: "34px",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.58))",
          boxShadow: "0 30px 90px rgba(25, 22, 26, 0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "32%",
            minWidth: "32%",
            padding: "44px 34px",
            background:
              "radial-gradient(circle at 28% 18%, rgba(251,107,71,0.32), transparent 34%), linear-gradient(180deg, #1f1b20, #161318)",
            color: "#fff8f1",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  opacity: 0.65,
                }}
              >
                {eyebrow}
              </div>
              <div
                style={{
                  display: "flex",
                  width: 168,
                  height: 168,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  background:
                    "radial-gradient(circle, rgba(251,107,71,0.22) 0%, rgba(251,107,71,0.04) 68%, rgba(251,107,71,0) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 112,
                    height: 112,
                    borderRadius: 999,
                    background: "#f4ba4d",
                    color: "#19161a",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 38,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                  }}
                >
                  MS
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  opacity: 0.58,
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  display: "flex",
                  width: 180,
                  height: 2,
                  background: "rgba(255,255,255,0.12)",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "68%",
            padding: "48px 52px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 42,
              top: 36,
              display: "flex",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "rgba(251,107,71,0.92)",
              }}
            />
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "rgba(25,78,69,0.36)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "rgba(25,22,26,0.56)",
                }}
              >
                AI studio for prompting, remixing, and launch-ready workflows
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: 690,
                  fontSize: 78,
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: "-0.08em",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: 760,
                  fontSize: 32,
                  lineHeight: 1.35,
                  color: "rgba(25,22,26,0.72)",
                }}
              >
                {subtitle}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 32,
              }}
            >
              <div style={{ display: "flex", gap: 16 }}>
                {["prompt workspace", "creative assistant", "visual direction"].map(
                  (label) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        padding: "14px 18px",
                        borderRadius: 999,
                        background: "rgba(25,22,26,0.06)",
                        fontSize: 20,
                        color: "rgba(25,22,26,0.72)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {label}
                    </div>
                  )
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 22,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(25,22,26,0.58)",
                  }}
                >
                  muse-spark.lol
                </div>
                <div
                  style={{
                    display: "flex",
                    width: 220,
                    height: 4,
                    background: "linear-gradient(90deg, #fb6b47, rgba(25,22,26,0.12))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
