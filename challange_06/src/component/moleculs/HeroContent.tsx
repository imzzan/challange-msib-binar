'use client'
import React, { FC } from "react";
import { Button } from "..";
import { useRouter } from "next/navigation";

const HeroContent: FC = () => {

  const router = useRouter()
  let token;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    token = localStorage.getItem('token')
  }

  return (
    <div className="left-content">
      <h1 className="fw-bold">
        Sewa & Rental Mobil Terbaik di kawasan Cirebon
      </h1>
      <p className="text-all my-4">
        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
        sewa mobil selama 24 jam.
      </p>
      {
        !token ? <Button onClick={() => router.push('/login')} nameBtn="Mulai sewa mobil" variant="btn-success" /> : ''
      }
    </div>
  );
};

export default HeroContent;
