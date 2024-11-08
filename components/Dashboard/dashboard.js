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
      {/* <div className="z-20 bg-[#F9FDFF] p-6 pt-[100px]">
        dashboard-1213
        <div className="flex items-center justify-center gap-4 rounded-lg bg-[#00A6FF] py-6 shadow">
          <div className="rounded-lg"> Create Leads</div>
          <div className="rounded-lg bg-white p-4"> Create New Application</div>
        </div>
      </div>

      <div className="my-12  bg-[#47b6f23d] p-6">
        <div className="flex items-center justify-center gap-4 rounded-lg bg-[#47b6f23d] py-6 shadow">
          <div className="rounded-lg"> MY EARNINGS</div>
          <div className="rounded-lg p-4 text-5xl font-bold text-yellow-300">
            {" "}
            ₹1,210
          </div>
        </div>
      </div> */}

      <div className=" min-h-screen bg-blue-50 p-4">
        <main className="mt-4">
          <div className="rounded-lg bg-white p-4">
            <div className="flex items-center justify-between rounded-lg bg-[#00A6FF] p-2 shadow-md">
              <button
                className="rounded-lg px-4 py-2 font-bold text-white"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Create Lead
              </button>
              <button className="flex items-center rounded-lg bg-white px-4 py-2 text-sm font-normal text-blue-500">
                Create New Application <GrFormAdd size={20} />
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-blue-100 p-4 shadow-md">
            <div className="mb-4 flex items-center justify-between rounded-lg bg-gradient-to-r from-[#6F89D6] to-[#243B81] p-4 text-white">
              <h2 className="text-lg font-bold">MY EARNINGS</h2>
              <p
                className="text-3xl font-bold text-[#FFDD00]"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                ₹1,210
              </p>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-[#6F89D6] to-[#243B81] p-4 text-white">
              <h2 className="text-wrap text-lg font-bold">
                Total Leads Generated
              </h2>
              <p
                className="block text-3xl font-bold text-[#FFDD00]"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                210
              </p>
            </div>

            <div className="mt-4 rounded-lg border-2 border-[#243B81] bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="w-1/2">
                  <DonutChart data={data} />
                </div>

                <div className="w-1/2">
                  <h2 className="text-xl font-bold text-[#243B81]">
                    Loan Status
                  </h2>
                  <ul className="mt-4">
                    {data.labels.map((label, index) => (
                      <li key={label} className="mb-2 flex items-center">
                        <span
                          className="mr-2 inline-block size-4 rounded-full"
                          style={{
                            backgroundColor:
                              data.datasets[0].backgroundColor[index],
                          }}
                        ></span>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
