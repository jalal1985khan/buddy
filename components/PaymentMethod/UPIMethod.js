"use client";
import { useState } from "react";
import ToggleButtonGroup from "@/components/PaymentMethod/ToggleButtonGroup";
import UPIDetailsForm from "@/components/PaymentMethod/UPIDetailsForm";
import AccountDetailsForm from "@/components/PaymentMethod/AccountDetailsForm";

const PayoutMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("UPI");

  return (
    <div className="flex items-center justify-center bg-[#ebf5ff]">
      <div className="mx-auto w-full max-w-lg overflow-hidden rounded-lg">
        <div className=" p-6">
          <h2 className="mb-4 text-center text-xl font-semibold text-blue-900">
            Select Payout Method
          </h2>

          <ToggleButtonGroup
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />

          {selectedMethod === "UPI" ? (
            <UPIDetailsForm />
          ) : (
            <AccountDetailsForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default PayoutMethod;
