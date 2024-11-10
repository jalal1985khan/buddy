import React from "react";
import { ActiveApplication, AvailableOffers } from "@/utils/data";
import { IoIosRefresh } from "react-icons/io";

export default function UserLists() {
  return (
    <div className="mx-auto mb-4 max-w-lg">
      <main className="p-4">
        <h1 className="mb-4 text-center text-2xl font-semibold text-[#253C82]">
          Active Applications
        </h1>

        <div className="mb-4 flex justify-end">
          <div className="relative flex w-full justify-end">
            <select
              id="loantype2"
              name="loantype"
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white shadow-md"
              style={{
                background: "linear-gradient(to right, #3B82F6, #6366F1)",
              }}
            >
              <option selected>Sort by Loan Status</option>
              <option value="US">Status-1</option>
              <option value="CA">Status-2</option>
            </select>

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
        <div className="grid grid-cols-1 gap-4">
          {ActiveApplication.map((item, index) => (
            <div class=" rounded-2xl bg-white shadow-md" key={index}>
              <div class="flex items-center justify-between rounded-t-2xl bg-gradient-to-l from-[#FFC87A] to-white p-4">
                <div class="flex items-center">
                  <img
                    alt={item.OfferName}
                    class="h-12 w-12 rounded-full"
                    height="50"
                    src={item.offerImage}
                    width="50"
                  />
                  <span class="ml-4 text-xl font-bold">{item.offerName}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-black">
                  Updated on : {item.offerUpdated}
                  <IoIosRefresh />
                </div>
              </div>
              <div class="mt-4 grid grid-cols-2 gap-4 p-4">
                <div>
                  <p class="text-gray-600">Loan Amount:</p>
                  <p class="text-lg font-semibold">{item.OfferLoanAmount}</p>
                </div>
                <div>
                  <p class="text-gray-600">Loan Tenure:</p>
                  <p class="text-lg font-semibold">{item.OfferTenure}</p>
                </div>
                <div>
                  <p class="text-gray-600">Application Date :</p>
                  <p class="text-lg font-semibold">
                    {item.OfferApplicationDate}
                  </p>
                </div>
                <div>
                  <p class="text-gray-600">Rate Of Interest :</p>
                  <p class="text-lg font-semibold">{item.OfferInterestRate}</p>
                </div>
              </div>
              <div class="mt-4 flex items-center justify-between px-4 py-4">
                <a class="text-[10px] text-[#00A6FF] underline" href="#">
                  Refer Document
                </a>
                <button class="rounded-full border border-[#F9A61A] bg-gradient-to-r from-[#FFC87A] to-[#FFFFFF] p-2 shadow">
                  {item.OfferStatus}
                  <i class="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <hr className="my-4 border border-gray-300" />
      <div>
        <h2 className="mb-4 text-center text-xl font-semibold text-[#253C82]">
          Other Available Offers
        </h2>

        <div className="mx-auto mb-4 max-w-lg space-y-4 px-4">
          {AvailableOffers.map((items, index) => (
            <div
              class="flex w-full max-w-lg items-center justify-between rounded-2xl bg-white p-4 shadow-md"
              key={index}
            >
              <div class="flex flex-col items-center">
                <div class="rounded-full border border-[#1F7400] bg-[#EFFFE7] px-4 py-1 text-[10px] font-semibold text-green-800">
                  {items.loanType}
                </div>
                <div class="items-center justify-center rounded-full pt-2">
                  <img
                    alt={items.loanName}
                    class="h-18 w-18 rounded-full"
                    height="64"
                    src={items.loanImage}
                    width="64"
                  />
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div class="mt-1 w-full text-xl font-semibold">
                  {items.loanName}
                </div>
                <button class="rounded-full border border-[#F9A61A] bg-gradient-to-r from-[#FFC87A] to-[#FFFFFF] p-2 px-10 shadow">
                  Proceed
                </button>
              </div>
              <div class="ml-4 flex flex-col items-end">
                <div class="text-sm font-semibold">
                  ROI :<span class="text-black">{items.roi}</span>
                </div>
                <div class="text-sm font-semibold">
                  Earning :<span class="text-black">{items.earning}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
