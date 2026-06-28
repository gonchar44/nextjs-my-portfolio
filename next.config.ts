import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["remodeler-echo-smashing.ngrok-free.dev"],
    images: {
        remotePatterns: [{ hostname: "cdn.sanity.io" }],
    },
};

export default nextConfig;
