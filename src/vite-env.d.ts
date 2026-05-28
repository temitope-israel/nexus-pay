// ============================================================
// VITE-ENV.D.TS — TypeScript declarations for Vite
// Tells TypeScript about file types that aren't natively
// understood — CSS imports, image files, SVGs etc.
// Without this, TS throws errors on non-JS/TS imports.
// ============================================================

/// <reference types="vite/client" />

// CSS module declarations — allows importing .css files
// as side effects (import './index.css') without TS errors
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}