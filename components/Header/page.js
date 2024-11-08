import React from "react";
import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import SideBar from "@/components/Sidebar/page";

export default function page() {
  return (
    <div className="z-50 grid w-full grid-cols-3 bg-white px-8 shadow-lg">
      <div className="flex items-center justify-start">
        <SideBar />
      </div>
      <div className="flex items-center justify-center p-4">
        <Link href="/dashboard">
          <img src="/images/logo.png" />
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <Link href="/dashboard/notifications">
          {" "}
          <IoNotificationsOutline size={40} color="#FFDD00" />
        </Link>
      </div>
    </div>
  );
}
