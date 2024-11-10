"use client";
import { useState } from "react";
import { PersonelOffers } from "@/utils/data";

export default function KycForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="mx-auto my-4 max-w-md ">
      <h1 className="mb-4 text-center text-2xl font-semibold text-blue-700">
        Offers For You
      </h1>

      <div id="accordion-collapse" className="px-4">
        <h2 id="accordion-collapse-heading-1 ">
          <button
            type="button"
            className={`flex w-full items-center justify-between gap-3 ${isOpen ? "rounded-t-xl bg-white" : "rounded-xl"}  border border-b-0 border-gray-200 bg-white p-5 font-medium text-black hover:bg-white`}
            onClick={toggleAccordion}
            aria-expanded={isOpen}
            aria-controls="accordion-collapse-body-1"
          >
            <span>Personal Loan</span>
            <svg
              className={`h-3 w-3 shrink-0 transform transition-all duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${
            isOpen ? "block" : "hidden "
          } scrollbar-hide scrollbar-thin scrollbar-thumb-[#0E56A0] scrollbar-track-[#EEF7FF] overflow-scroll rounded-b-xl border border-b-0 border-gray-200 bg-white p-5 py-12`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="flex w-[1000px] gap-4">
            {PersonelOffers.map((items, index) => (
              <div
                className="flex w-[430px] flex-row gap-4 rounded-2xl border border-gray-300 bg-[#FFFCED] p-4 shadow-xl"
                key={index}
              >
                <div>
                  <img src={items.offerImage} className="h-40" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold">{items.offerName}</h3>
                  <div className="flex justify-between gap-12 pb-4">
                    <div>ROI: {items.roi}</div>
                    <div>Earning: {items.earning}</div>
                  </div>
                  <button className="rounded-full border border-[#F9A61A] bg-gradient-to-r from-[#FFC87A] to-[#FFFFFF] p-2 shadow">
                    Proceed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
