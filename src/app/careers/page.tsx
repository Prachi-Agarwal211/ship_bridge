import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Join ShipBridge Logistics Team",
  description: "Join the ShipBridge Logistics team! Discover our work culture, explore current openings for developers, backend engineers, marketing, and operations, and apply online to help us build the future of Indian relocation logistics.",
};

export default function CareersPage() {
  return <CareersClient />;
}
