"use client";
import { useState } from "react";
import { PaymentModes } from "@/utils/data";
import PayoutCard from "@/components/PaymentMode/PaymentCard";
import Link from "next/link";

export default function Home() {
  const [defaultPayout, setDefaultPayout] = useState("Corporation Bank"); // Initial default bank

  return (
    <>
      <div className="mx-auto  min-h-screen max-w-lg">
        <main className="p-4">
          <section className="mb-4 flex items-center justify-between rounded-lg bg-[#00A6FF] p-4 text-white">
            <div className="text-center">
              <p>Validated Balance</p>
              <p className="text-5xl font-bold">₹150</p>
            </div>
            <div className="h-12 border-l border-white"></div>
            <div className="text-center">
              <p>Reviewing Balance</p>
              <p className="text-5xl font-bold">₹0</p>
            </div>
          </section>

          <h2 className="mb-4 text-center text-lg text-[#A8A7A7]">
            Default Payout Mode
          </h2>

          <section className="mb-4 rounded-lg bg-white p-4 shadow">
            {PaymentModes.map((bank) => (
              <PayoutCard
                key={bank.id}
                id={bank.id}
                logo={bank.logo}
                bankName={bank.bankName}
                account={bank.account}
                isDefault={defaultPayout === bank.id}
                onSetDefault={setDefaultPayout}
              />
            ))}

            <div className="mb-4 flex justify-between gap-4 pt-8">
              <Link
                href="/dashboard/payment-method"
                className="w-full rounded-lg bg-[#00A6FF] p-3 text-white"
              >
                Add Payout Method
              </Link>
              <button className="w-full rounded-lg bg-[#2DC36A] p-3 text-white">
                Withdraw
              </button>
            </div>
          </section>

          <h2 className="mb-4 text-center text-lg text-[#A8A7A7]">
            Payment History
          </h2>
          <div className="mb-2 flex items-center justify-between rounded-full bg-gradient-to-r from-[#6F89D6] to-[#243B81] p-2 px-8 text-white">
            <p>Date</p>
            <div className="h-4 border-l border-white"></div>
            <p>Amount</p>
            <div className="h-4 border-l border-white"></div>
            <p>Transfer Status</p>
          </div>
          <section className="rounded-lg bg-white p-4 shadow-xl">
            <p className="text-center text-gray-500">No History Found</p>
          </section>
        </main>
      </div>
    </>
  );
}
