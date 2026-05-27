// ============================================================
// APP.TSX — Root application component
// Renders all landing page sections in order
// Author: Temitope Israel Omoniyi
// ============================================================

import Navbar from "@/components/layout/Navbar";

function App() {
  return (
    <main className="bg-bg-base min-h-screen">
      <Navbar />

      {/* Temporary spacer — will be replaced by Hero section */}
      <div className="container-custom pt-40">
        <h1 className="gradient-text font-display text-5xl font-bold">
          Nexus Pay — Navbar Active ✓
        </h1>
        <p className="text-text-secondary mt-4">
          Scroll down to test the navbar background change
        </p>
        {/* Tall div to enable scrolling for navbar test */}
        <div className="h-screen" />
      </div>
    </main>
  );
}

export default App;