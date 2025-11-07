import React, { useState } from "react";
import Section from "../components/Section.tsx";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import Kpi from "../components/Kpi.tsx";
import { BankingAPI } from "../../infrastructure/api/banking.api.ts";
import { bankCBUseCase } from "../../../core/application/usecases/BankCB.ts";
import { applyBankUseCase } from "../../../core/application/usecases/ApplyBank.ts";

const bankingAPI = new BankingAPI();
const bankCB = bankCBUseCase(bankingAPI);
const applyBank = applyBankUseCase(bankingAPI);

export default function BankingPage() {
  const [shipId, setShipId] = useState("S1");
  const [year, setYear] = useState(2025);
  const [banked, setBanked] = useState<number | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const fetchBanked = async () => {
    const value = await bankingAPI.getBanked(shipId, year);
    setBanked(value);
  };

  const handleBank = async () => {
    try {
      await bankCB(shipId, year, amount);
      setMessage(`Banked ${amount} successfully.`);
      fetchBanked();
    } catch (e: any) {
      setMessage(e.message);
    }
  };

  const handleApply = async () => {
    try {
      await applyBank(shipId, year, amount);
      setMessage(`Applied ${amount} successfully.`);
      fetchBanked();
    } catch (e: any) {
      setMessage(e.message);
    }
  };

  return (
    <div className="space-y-6 p-4">
      <Section title="Banking Controls">
        <div className="grid grid-cols-3 gap-4 max-w-xl">
          <Input label="Ship ID" value={shipId} onChange={(e) => setShipId(e.target.value)} />
          <Input label="Year" type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} />
          <Button onClick={fetchBanked}>Fetch CB</Button>
        </div>

        {banked !== null && (
          <div className="mt-4 grid grid-cols-3 gap-4 max-w-xl">
            <Kpi label="Banked CB" value={banked.toFixed(2)} />
          </div>
        )}
      </Section>

      <Section title="Actions">
        <div className="flex gap-4 items-end">
          <Input label="Amount" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          <Button onClick={handleBank} disabled={amount <= 0}>Bank</Button>
          <Button variant="secondary" onClick={handleApply} disabled={amount <= 0}>Apply</Button>
        </div>
        {message && <div className="text-sm text-blue-600 mt-2">{message}</div>}
      </Section>
    </div>
  );
}
