"use client";
import { HeroSection, Navbar, CariCar, ListCard } from "../../component";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CarProvider from "../../context/LayoutCar";

const CariMobil = () => {
  let token : string;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    token = localStorage.getItem('token')
  }
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <CarProvider>
      <Navbar />
      <HeroSection />
      <CariCar />
      <ListCard/>
    </CarProvider>
  );
};

export default CariMobil;
