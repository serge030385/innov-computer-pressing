import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#073B6F",
          color: "#FFFFFF",
          display: "flex",
          fontSize: 22,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: 0,
          width: "100%"
        }}
      >
        IP
      </div>
    ),
    { ...size }
  );
}
