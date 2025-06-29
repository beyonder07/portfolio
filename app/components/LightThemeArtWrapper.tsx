"use client";
import { useTheme } from "next-themes";
import LightModeArt from "./light-mode-art";

export default function LightThemeArtWrapper() {
  const { theme } = useTheme();
  if (theme !== "light") return null;
  return <LightModeArt />;
} 