import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Akshat Chaurasia — Full-Stack Developer, AI Integration & Backend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stats = [
  { value: "300+", label: "DSA Problems" },
  { value: "21", label: "REST APIs Shipped" },
  { value: "4,800", label: "Req/sec on Raw TCP" },
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(147,51,234,0.22), transparent 45%), radial-gradient(circle at 88% 92%, rgba(37,99,235,0.20), transparent 45%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* mark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "1px solid #2b2b2b",
              backgroundColor: "#141414",
              color: "#ededed",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            AC
          </div>
        </div>

        {/* name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Akshat Chaurasia
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 34,
              color: "#a1a1aa",
              letterSpacing: "-0.01em",
            }}
          >
            Full-Stack Developer &nbsp;&middot;&nbsp; AI Integration &nbsp;&middot;&nbsp; Backend
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 26,
              color: "#6b7280",
            }}
          >
            B.Tech Computer Science &middot; IIIT Nagpur
          </div>
        </div>

        {/* proof strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #232323",
            paddingTop: 30,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: i === 0 ? 0 : 72,
              }}
            >
              <div style={{ fontSize: 40, fontWeight: 700, color: "#ffffff" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 22, color: "#6b7280", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
