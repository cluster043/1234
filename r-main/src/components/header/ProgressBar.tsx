"use client";
import NextNProgress from "nextjs-progressbar";

export default function ProgressBar() {
  return (
    <NextNProgress
      color="rgba(2,236,170,1)"
      height={4}
      options={{ showSpinner: false }}
    />
  );
}
