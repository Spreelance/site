"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-lg border transition-all duration-200"
      style={{
        background: "var(--sp-card)",
        borderColor: "var(--sp-border)",
        color: "var(--sp-fg-muted)",
      }}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
