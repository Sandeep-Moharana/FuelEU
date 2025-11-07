import React, { useState } from "react";
import Section from "../components/Section.tsx";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import Kpi from "../components/Kpi.tsx";
import { PoolingAPI } from "../../infrastructure/api/pooling.api.ts";
import { createPoolUseCase } from "../../../core/application/usecases/CreatePool.ts";
import Table from "../components/Table.tsx";

const poolingAPI = new PoolingAPI();
const createPool = createPoolUseCase(poolingAPI);

type Member = { shipId: string; cbBefore: number };

export default function PoolingPage() {
  const [year, setYear] = useState(2025);
  const [members, setMembers] = useState<Member[]>([]);
  const [shipId, setShipId] = useState("");
  const [cbBefore, setCbBefore] = useState<number>(0);
  const [poolId, setPoolId] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const addMember = () => {
    if (!shipId) return;
    setMembers([...members, { shipId, cbBefore }]);
    setShipId("");
    setCbBefore(0);
  };

  const totalSum = members.reduce((a, m) => a + m.cbBefore, 0);
  const valid = totalSum >= 0;

  const handleCreatePool = async () => {
    try {
      const res = await createPool(year, members);
      setPoolId(res.poolId);
      setMessage("Pool created successfully!");
    } catch (e: any) {
      setMessage(e.message);
    }
  };

  return (
    <div className="space-y-6 p-4">
      <Section title="Pooling Setup">
        <div className="grid grid-cols-3 gap-4 max-w-xl">
          <Input label="Ship ID" value={shipId} onChange={(e) => setShipId(e.target.value)} />
          <Input label="CB Before" type="number" value={cbBefore} onChange={(e) => setCbBefore(Number(e.target.value))} />
          <Button onClick={addMember}>Add</Button>
        </div>

        <div className="mt-6">
          <Table
            columns={[
              { key: "shipId", header: "Ship" },
              { key: "cbBefore", header: "CB Before" }
            ]}
            data={members}
            emptyText="No members added"
          />
        </div>
      </Section>

      <Section title="Summary">
        <Kpi label="Pool Sum" value={totalSum.toFixed(2)} tone={valid ? "good" : "bad"} hint="Must be ≥ 0" />
        <Button onClick={handleCreatePool} disabled={!valid || members.length === 0}>Create Pool</Button>
        {message && <div className="text-sm mt-2 text-blue-700">{message}</div>}
        {poolId && <div className="text-green-700 mt-2">Pool ID: {poolId}</div>}
      </Section>
    </div>
  );
}
