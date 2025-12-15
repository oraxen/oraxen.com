import type { SlideTheme } from "./slides";

export interface ThemeColors {
  accent: string;
  accentGlow: string;
  accentSoft: string;
  accentBorder: string;
  accentLine: string;
  accentGlowOuter: string;
  panelShadow: string;
  textColor: string;
  panelA: string;
  panelB: string;
  panelC: string;
  bgBrightness: number;
  vignetteStrength: number;
}

export const themes: Record<SlideTheme, ThemeColors> = {
  emerald: {
    accent: "#2eff8a",
    accentGlow: "rgba(46, 255, 138, 0.6)",
    accentSoft: "rgba(46, 255, 138, 0.15)",
    accentBorder: "rgba(46, 255, 138, 0.5)",
    accentLine: "rgba(46, 255, 138, 0.3)",
    accentGlowOuter: "rgba(46, 255, 138, 0.4)",
    panelShadow: "rgba(46, 255, 138, 0.1)",
    textColor: "rgba(255, 255, 255, 0.94)",
    panelA: "rgba(8, 18, 12, 0.95)",
    panelB: "rgba(12, 28, 18, 0.92)",
    panelC: "rgba(8, 22, 14, 0.9)",
    bgBrightness: 0.85,
    vignetteStrength: 0.28,
  },
  gray: {
    accent: "#a7b0b9",
    accentGlow: "rgba(167, 176, 185, 0.6)",
    accentSoft: "rgba(167, 176, 185, 0.16)",
    accentBorder: "rgba(167, 176, 185, 0.5)",
    accentLine: "rgba(167, 176, 185, 0.3)",
    accentGlowOuter: "rgba(167, 176, 185, 0.4)",
    panelShadow: "rgba(167, 176, 185, 0.1)",
    textColor: "rgba(238, 241, 244, 0.96)",
    panelA: "rgba(20, 24, 28, 0.96)",
    panelB: "rgba(26, 32, 36, 0.93)",
    panelC: "rgba(18, 22, 26, 0.9)",
    bgBrightness: 0.9,
    vignetteStrength: 0.26,
  },
  brown: {
    accent: "#b87333",
    accentGlow: "rgba(184, 115, 51, 0.6)",
    accentSoft: "rgba(184, 115, 51, 0.15)",
    accentBorder: "rgba(184, 115, 51, 0.5)",
    accentLine: "rgba(184, 115, 51, 0.3)",
    accentGlowOuter: "rgba(184, 115, 51, 0.4)",
    panelShadow: "rgba(184, 115, 51, 0.1)",
    textColor: "rgba(248, 242, 235, 0.97)",
    panelA: "rgba(36, 22, 14, 0.96)",
    panelB: "rgba(44, 26, 16, 0.93)",
    panelC: "rgba(30, 18, 12, 0.9)",
    bgBrightness: 0.86,
    vignetteStrength: 0.3,
  },
  lightblue: {
    accent: "#5ec8e9",
    accentGlow: "rgba(94, 200, 233, 0.6)",
    accentSoft: "rgba(94, 200, 233, 0.16)",
    accentBorder: "rgba(94, 200, 233, 0.5)",
    accentLine: "rgba(94, 200, 233, 0.3)",
    accentGlowOuter: "rgba(94, 200, 233, 0.4)",
    panelShadow: "rgba(94, 200, 233, 0.1)",
    textColor: "rgba(232, 244, 255, 0.96)",
    panelA: "rgba(10, 18, 28, 0.96)",
    panelB: "rgba(12, 28, 44, 0.93)",
    panelC: "rgba(8, 22, 38, 0.9)",
    bgBrightness: 0.92,
    vignetteStrength: 0.22,
  },
  indigo: {
    accent: "#5b5bd6",
    accentGlow: "rgba(91, 91, 214, 0.6)",
    accentSoft: "rgba(91, 91, 214, 0.16)",
    accentBorder: "rgba(91, 91, 214, 0.5)",
    accentLine: "rgba(91, 91, 214, 0.3)",
    accentGlowOuter: "rgba(91, 91, 214, 0.4)",
    panelShadow: "rgba(91, 91, 214, 0.1)",
    textColor: "rgba(236, 240, 255, 0.97)",
    panelA: "rgba(16, 14, 36, 0.96)",
    panelB: "rgba(20, 18, 44, 0.93)",
    panelC: "rgba(14, 12, 34, 0.9)",
    bgBrightness: 0.9,
    vignetteStrength: 0.26,
  },
  gold: {
    accent: "#d69e2e",
    accentGlow: "rgba(214, 158, 46, 0.6)",
    accentSoft: "rgba(214, 158, 46, 0.16)",
    accentBorder: "rgba(214, 158, 46, 0.48)",
    accentLine: "rgba(214, 158, 46, 0.3)",
    accentGlowOuter: "rgba(214, 158, 46, 0.4)",
    panelShadow: "rgba(214, 158, 46, 0.1)",
    textColor: "rgba(243, 230, 208, 0.96)",
    panelA: "rgba(24, 20, 12, 0.96)",
    panelB: "rgba(28, 22, 14, 0.93)",
    panelC: "rgba(20, 16, 10, 0.9)",
    bgBrightness: 0.84,
    vignetteStrength: 0.3,
  },
};

/** Convert theme to CSS custom properties for inline styles */
export function getThemeStyles(theme: SlideTheme): React.CSSProperties {
  const t = themes[theme];
  return {
    "--slide-accent": t.accent,
    "--slide-accent-glow": t.accentGlow,
    "--slide-accent-soft": t.accentSoft,
    "--slide-accent-border": t.accentBorder,
    "--slide-accent-line": t.accentLine,
    "--slide-accent-glow-outer": t.accentGlowOuter,
    "--slide-panel-shadow": t.panelShadow,
    "--slide-text-color": t.textColor,
    "--slide-panel-a": t.panelA,
    "--slide-panel-b": t.panelB,
    "--slide-panel-c": t.panelC,
    "--slide-bg-brightness": t.bgBrightness,
    "--slide-vignette-strength": t.vignetteStrength,
  } as React.CSSProperties;
}
