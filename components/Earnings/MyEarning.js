import React from "react";
import { EarningHistory } from "@/utils/data";

export default function MyEarning() {
  return (
    <div className="mx-auto max-w-lg">
      <main className="p-4">
        <section className="mb-4 rounded-lg bg-[#00A6FF] p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">Total Earnings</p>
              <h2 className="text-4xl font-bold">₹1,210</h2>
            </div>
            <button className="rounded bg-white px-4 py-2 font-semibold text-[#00A6FF]">
              Withdraw
            </button>
          </div>
        </section>
        <section className="mb-4 rounded-lg border border-gray-200 bg-[#47b6f226] p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-bold">Earning History</h3>
            <div className="w-[200px]">
              <div className="relative w-full ">
                <select
                  id="loantype"
                  name="loantype"
                  className="w-full rounded-full bg-gradient-to-r from-[#6F89D6] to-[#243B81] px-4 py-2 text-white shadow-md"
                  style={{
                    background: "linear-gradient(to right, #3B82F6, #6366F1)",
                  }}
                >
                  <option selected>All Time</option>
                  <option value="US">Type-1</option>
                  <option value="CA">Type-2</option>
                </select>
                {/* Custom arrow using pseudo-element */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Earning Status</h3>
            <div className="w-[200px]">
              <div className="relative w-full ">
                <select
                  id="loantype"
                  name="loantype"
                  className="w-full rounded-full bg-gradient-to-r from-[#6F89D6] to-[#243B81] px-4 py-2 text-white shadow-md"
                  style={{
                    background: "linear-gradient(to right, #3B82F6, #6366F1)",
                  }}
                >
                  <option selected>All</option>
                  <option value="US">Type-1</option>
                  <option value="CA">Type-2</option>
                </select>
                {/* Custom arrow using pseudo-element */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-2 grid grid-cols-7 items-center rounded-full bg-gradient-to-r from-[#6F89D6] to-[#243B81] p-2 px-4 text-white">
          <p className=" px-2 text-[9px]">DATE</p>
          {/* <div className="h-8 border-l border-white"></div> */}
          <p className="border-l border-white px-2 text-center text-[9px]">
            USER ID
          </p>
          {/* <div className="h-8 border-l border-white"></div> */}
          <p className="border-l border-white px-2 text-center text-[9px]">
            MOBILE NUMBER
          </p>
          {/* <div className="h-8 border-l border-white"></div> */}
          <p className="border-l border-white px-2 text-center text-[9px]">
            LENDER NAME
          </p>
          {/* <div className="h-8 border-l border-white"></div> */}
          <p className="border-l border-white px-2 text-center text-[9px]">
            LOAN AMOUNT
          </p>
          {/* <div className="h-8 border-l border-white"></div> */}
          <p className="border-l border-white px-2 text-center text-[9px]">
            TOTAL COMMISSION
          </p>
          <p className="border-l border-white px-2 text-center text-[9px]"></p>
        </div>

        <div>
          {EarningHistory.map((items, index) => (
            <div
              className="mb-2 grid grid-cols-7 items-center rounded-lg border-2 border-[#005886] bg-white p-2 px-4 text-black"
              key={index}
            >
              <p className="  px-1 text-[9px]">{items.earningDate}</p>

              <p className="border-l-2 border-[#005886]  px-1 text-center text-[9px]">
                {items.earningUserID}
              </p>

              <p className="border-l-2 border-[#005886]  px-1 text-center text-[9px]">
                {items.earningMobile}
              </p>

              <p className="border-l-2 border-[#005886]  px-1 text-center text-[9px]">
                {items.earningLender}
              </p>

              <p className="border-l-2 border-[#005886]  px-1 text-center text-[9px]">
                {items.earningLoan}
              </p>

              <p className="border-l-2 border-[#005886] px-1 text-center text-[9px]">
                {items.earningCommission}
              </p>

              <p className="flex flex-col gap-1 border-l-2 border-[#005886]  px-1 text-center text-[9px]">
                <div className="group relative">
                  <button className="group rounded bg-gradient-to-r from-[#FF870E] to-[#FF5F39] px-2 py-1 text-[8px] text-white">
                    Info
                  </button>
                  <div className="-left-14 -top-14 z-10 hidden w-[100px] rounded-lg bg-gradient-to-r from-[#6F89D6] to-[#243B81] px-3 py-2 text-[9px] font-medium text-white group-hover:absolute group-hover:block">
                    {items.earningStatusMessage}
                    <div className="bg-red tooltip-arrow right-4 "></div>
                  </div>
                </div>

                <button className="w-full rounded bg-gradient-to-r from-[#11C5FF] to-[#4564FF] px-2 py-1 text-[8px] text-white">
                  Download
                </button>
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
