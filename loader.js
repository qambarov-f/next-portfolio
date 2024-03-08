"use client";

export default function myImageLoader({ src, width, quality }) {
  if (src.endsWith(".png")) return src;
    return `https://nextjsportfolio.com/${src}?w=${width}&q=${quality || 75}`;
}
