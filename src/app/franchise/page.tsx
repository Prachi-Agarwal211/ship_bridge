import type { Metadata } from "next";
import FranchiseClient from "./FranchiseClient";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Franchise Opportunities | ShipBridge Logistics",
  description: "Become a ShipBridge Franchise Partner! Explore low investment opportunities, our tiered partner models (City, Area, Transporter), full training, high revenue sharing potentials, and apply online today.",
};

export default function FranchisePage() {
  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* BACKGROUND EFFECTS */}
      <div className={styles.glowEffect1}></div>
      
      <FranchiseClient />

      <footer></footer>
    </ScrollRevealWrapper>
  );
}
