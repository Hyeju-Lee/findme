import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The game is a single static file (public/game.html). Serve it at "/"
  // without changing the address bar.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/game.html" }],
    };
  },
};

export default nextConfig;
