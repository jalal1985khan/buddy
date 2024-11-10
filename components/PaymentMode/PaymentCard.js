import React from "react";

export default function PaymentCard({
  id,
  logo,
  bankName,
  account,
  isDefault,
  onSetDefault,
}) {
  return (
    <div
      className={`flex items-center justify-between border border-gray-300 p-2 shadow ${
        isDefault ? "bg-[#DCF2FD]" : "bg-white"
      } mb-2 rounded-lg`}
    >
      <div className="flex items-center">
        <img src={logo} alt={`${bankName} Logo`} className="mr-4 h-12 w-12" />
        <div>
          <p className="font-bold">{bankName}</p>
          <p>{account}</p>
        </div>
      </div>
      <div className="flex items-center">
        <label className="mb-5 flex w-[90px] cursor-pointer flex-col items-center justify-end">
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isDefault ? "Default" : "Set Default"}
          </span>
          <input
            type="checkbox"
            checked={isDefault}
            onChange={() => onSetDefault(id)} // Set this card as the default
            className="peer sr-only"
          />
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-[#00A6FF] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
        </label>
      </div>
    </div>
  );
}
