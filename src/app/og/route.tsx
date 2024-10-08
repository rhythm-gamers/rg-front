import Image from "next/image";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    const fontData = await fetch(
      new URL("../../../assets/BlackHanSans-Regular.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "linear-gradient(to bottom right, #fb7185, #fed7aa)",
            fontFamily: '"BlackHanSans"',
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL}/og-image-v3.png`}
              width="160"
              height="160"
              alt={"OG Logo"}
            />
            <p style={{ fontSize: 100 }}>리듬게이머즈</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "BlackHanSans",
            data: fontData,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    return new Response(`Failed to generate the Image`, { status: 500 });
  }
}
