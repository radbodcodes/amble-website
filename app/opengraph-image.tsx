import { ImageResponse } from "next/og";

export const alt = "Amble & Co. — Unhurried Thinking, Unparalleled Results";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #A8673E 0%, #C07A4A 50%, #D4956B 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 64, color: "white", lineHeight: 1.1, marginBottom: 24 }}>
          Unhurried Thinking,
        </div>
        <div style={{ fontSize: 64, color: "white", lineHeight: 1.1, fontStyle: "italic", marginBottom: 48 }}>
          Unparalleled Results.
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.8)", lineHeight: 1.5, maxWidth: 600 }}>
          We partner with forward-thinking organizations to turn AI curiosity into real strategy.
        </div>
        <div style={{ fontSize: 28, color: "white", position: "absolute", bottom: 60, right: 80 }}>
          Amble&Co
        </div>
      </div>
    ),
    { ...size }
  );
}
