import React, { useEffect, useState } from "react";
import Table from "../components/Table.tsx";
import Button from "../components/Button.tsx";
import Select from "../components/Select.tsx";
import Section from "../components/Section.tsx";
import { RoutesAPI } from "../../infrastructure/api/routes.api.ts";
import { fetchRoutesUseCase } from "../../../core/application/usecases/FetchRoutes.ts";
import { Route } from "../../../core/domain/Route.ts";

const routesAPI = new RoutesAPI();
const fetchRoutes = fetchRoutesUseCase(routesAPI);

export default function RoutesPage() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [filtered, setFiltered] = useState<Route[]>([]);
  const [filters, setFilters] = useState({ vesselType: "All", fuelType: "All", year: "All" });

  useEffect(() => {
    fetchRoutes().then((data) => {
      setRoutes(data);
      setFiltered(data);
    });
  }, []);

  const handleFilter = () => {
    let data = [...routes];
    if (filters.vesselType !== "All") data = data.filter((r) => r.vesselType === filters.vesselType);
    if (filters.fuelType !== "All") data = data.filter((r) => r.fuelType === filters.fuelType);
    if (filters.year !== "All") data = data.filter((r) => r.year === Number(filters.year));
    setFiltered(data);
  };

  const setBaseline = async (id: number) => {
    await routesAPI.setBaseline(id);
    const updated = await fetchRoutes();
    setRoutes(updated);
    setFiltered(updated);
  };

  return (
    <div className="space-y-6 p-4">
      <Section title="Filters">
        <div className="grid grid-cols-3 gap-4 max-w-3xl">
          <Select
            label="Vessel Type"
            options={[{ label: "All", value: "All" }, ...Array.from(new Set(routes.map((r) => r.vesselType))).map((v) => ({ label: v, value: v }))]}
            value={filters.vesselType}
            onChange={(e) => setFilters({ ...filters, vesselType: e.target.value })}
          />
          <Select
            label="Fuel Type"
            options={[{ label: "All", value: "All" }, ...Array.from(new Set(routes.map((r) => r.fuelType))).map((v) => ({ label: v, value: v }))]}
            value={filters.fuelType}
            onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
          />
          <Select
            label="Year"
            options={[{ label: "All", value: "All" }, ...Array.from(new Set(routes.map((r) => r.year))).map((v) => ({ label: v.toString(), value: v }))]}
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          />
        </div>
        <Button className="mt-3" onClick={handleFilter}>Apply Filters</Button>
      </Section>

      <Section title="Routes">
        <Table
          columns={[
            { key: "routeId", header: "Route" },
            { key: "vesselType", header: "Vessel" },
            { key: "fuelType", header: "Fuel" },
            { key: "year", header: "Year" },
            { key: "ghgIntensity", header: "GHG Intensity" },
            {
              key: "isBaseline", header: "Baseline", render: (r: Route) =>
                r.isBaseline ? "✅" : <Button onClick={() => setBaseline(r.id)}>Set Baseline</Button>,
            }
          ]}
          data={filtered}
        />
      </Section>
    </div>
  );
}
