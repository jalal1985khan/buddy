import React from "react";
import { UserList } from "@/utils/data";

export default function UserLists() {
  return (
    <div className="mx-auto mb-4 max-w-lg">
      <main className="p-4">
        <h1 className="mb-4 text-center text-2xl font-semibold text-[#253C82]">
          Users list
        </h1>

        <div className="mb-4 flex justify-between gap-6">
          <div className="relative w-full ">
            <select
              id="loantype"
              name="loantype"
              className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white shadow-md"
              style={{
                background: "linear-gradient(to right, #3B82F6, #6366F1)",
              }}
            >
              <option selected>Sort by Loan Type</option>
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

          <div className="relative w-full">
            <select
              id="loantype2"
              name="loantype"
              className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white shadow-md"
              style={{
                background: "linear-gradient(to right, #3B82F6, #6366F1)",
              }}
            >
              <option selected>Sort by Loan Status</option>
              <option value="US">Status-1</option>
              <option value="CA">Status-2</option>
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

        <div className="mb-4 flex justify-between rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white shadow-md">
          <span>User Name</span>
          <span>Status</span>
        </div>

        <div className="space-y-4">
          {UserList.map((items, index) => (
            <div
              className="flex items-center justify-between gap-16 rounded-lg bg-white p-4 shadow-md"
              key={index}
            >
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-500">
                  V
                </div>
                <div className="ml-4">
                  <div className="font-bold">{items.userName}</div>
                  <div className="text-blue-500">{items.userPhone}</div>
                </div>
              </div>
              <div
                className={`flex h-12 w-full flex-col items-center justify-center rounded-full border border-gray-200 bg-gradient-to-r ${
                  items.userStatus === "Accepted"
                    ? items.status === ""
                      ? "from-[#47B6F2]"
                      : "from-[#FFC87A]"
                    : items.userStatus === "Ready To Disburse"
                      ? "from-[#47B6F2]"
                      : "from-[#FFFFFF]"
                } to-white py-1 text-sm text-orange-500`}
              >
                {items.userStatus}
                <span className="text-gray-500">{items.status}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
