import React, { useState } from "react";
import Tabs from "./components/Tabs.tsx";
import RoutesPage from "./pages/RoutesPage.tsx";
import ComparePage from "./pages/ComparePage.tsx";
import BankingPage from "./pages/BankingPage.tsx";
import PoolingPage from "./pages/PoolingPage.tsx";

export default function App() {
  const [active, setActive] = useState("routes");

  const tabs = [
    { key: "routes", label: "Routes" },
    { key: "compare", label: "Compare" },
    { key: "banking", label: "Banking" },
    { key: "pooling", label: "Pooling" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Fuel EU Compliance Dashboard</h1>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        <Tabs tabs={tabs} active={active} onChange={setActive} />
        <div className="mt-6">
          {active === "routes" && <RoutesPage />}
          {active === "compare" && <ComparePage />}
          {active === "banking" && <BankingPage />}
          {active === "pooling" && <PoolingPage />}
        </div>
      </div>
    </div>
  );
}
