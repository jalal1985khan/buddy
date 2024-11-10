import React from "react";
import PersonalOffer from "@/components/Offers/PersonalOffer";
import VehicleOffer from "@/components/Offers/VehicalLoan";
import HomeOffer from "@/components/Offers/HomeLoan";

export default function page() {
  return (
    <div>
      <PersonalOffer />
      <VehicleOffer />
      <HomeOffer />
    </div>
  );
}
