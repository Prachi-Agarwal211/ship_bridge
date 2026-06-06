import type { Metadata } from "next";
import FranchiseClient from "./FranchiseClient";

export const metadata: Metadata = {
  title: "Franchise Opportunities | ShipBridge Logistics",
  description: "Become a ShipBridge Franchise Partner! Explore low investment opportunities, our tiered partner models (City, Area, Transporter), full training, high revenue sharing potentials, and apply online today.",
};

export default function FranchisePage() {
  return <FranchiseClient />;
}
