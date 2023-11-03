import React, { FC } from 'react'
import { WrapCard } from '..'

const WhyUs : FC = () => {
  return (
    <section id="section-why-us" className="section-why-us">
    <div className="container">
      <h1 className="judul-all text-lg-start text-center">Why Us?</h1>
      <p className="text-all text-lg-start text-center">
        Mengapa harus pilih Binar Car Rental?
      </p>
      <WrapCard/>
    </div>
  </section>
  )
}

export default WhyUs