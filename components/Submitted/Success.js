import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-50 p-12">
      <div className=" flex max-w-sm flex-col items-center rounded-lg bg-white p-12 text-center">
        <img src="/images/submitted.png" className="w-full" />
        <p className="font-semibold text-[#00A6FF]">Loan Application Has</p>
        <p className="font-semibold text-[#00A6FF]">Been Submitted</p>
        <p className="text-[9px]">
          The Lender Link has been sent to the Customer’s WhatsApp
        </p>
      </div>
    </div>
  );
}
