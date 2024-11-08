"use client";
import { useState } from "react";
import DonutChart from "@/utils/donutChart";
import { SampleData } from "@/utils/data";
import { GrFormAdd } from "react-icons/gr";

export default function dashboard() {
  const [data, setData] = useState({
    labels: [
      "Loan Approved",
      "Loan Disbursal",
      "Loan Approval Pending",
      "Loan Rejected",
    ],
    datasets: [
      {
        label: "Loan Status",
        data: [40, 25, 20, 15], // Example data
        backgroundColor: ["#243B81", "#8b5cf6", "#fb923c", "#ef4444"],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <>
      <div className=" min-h-screen bg-blue-50 p-4">
        <main className="mt-4">
          {SampleData.map((items, index) => (
            <div
              key={index}
              className="mt-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
            >
              <div className="flex items-center">
                <img src={items.imgUrl} alt="Tata Capital Logo" />
                <p
                  className="ml-2"
                  dangerouslySetInnerHTML={{ __html: items.description }}
                ></p>
              </div>
              <i className="fas fa-ellipsis-v text-gray-500"></i>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
