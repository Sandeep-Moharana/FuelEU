import React, { useEffect, useState } from "react";
import Section from "../components/Section.tsx";
import Table from "../components/Table.tsx";
import Button from "../components/Button.tsx";
import BarChart from "../components/BarChart.tsx";
import { RoutesAPI } from "../../infrastructure/api/routes.api.ts";
import { fetchComparisonUseCase } from "../../../core/application/usecases/FetchComparison.ts";

const routesAPI = new RoutesAPI();
const fetchComparison = fetchComparisonUseCase(routesAPI);

type ComparisonRow = {
  routeId: string;
  baselineIntensity: number;
  comparisonIntensity: number;
  percentDiff: number;
  compliant: boolean;
};

export default function ComparePage() {
  const [data, setData] = useState<ComparisonRow[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const result = await fetchComparison();
    setData(result);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const chartData = data.map((d) => ({ label: d.routeId, value: d.comparisonIntensity }));

  return (
    <div className="space-y-6 p-4">
      <Section title="Compare to Baseline" actions={<Button onClick={load}>Refresh</Button>}>
        {loading ? (
          <div className="text-gray-600">Loading...</div>
        ) : (
          <Table
            columns={[
              { key: "routeId", header: "Route" },
              { key: "baselineIntensity", header: "Baseline (gCO₂e/MJ)" },
              { key: "comparisonIntensity", header: "This Route (gCO₂e/MJ)" },
              { key: "percentDiff", header: "% Difference", render: (r: ComparisonRow) => `${r.percentDiff.toFixed(2)}%` },
              { key: "compliant", header: "Compliant", render: (r: ComparisonRow) => (r.compliant ? "✅" : "❌") }
            ]}
            data={data}
          />
        )}
      </Section>

      {!loading && (
        <Section title="GHG Intensity Chart">
          <BarChart data={chartData} />
        </Section>
      )}
    </div>
  );
}
