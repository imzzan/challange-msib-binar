import React, { FC } from 'react'
import { ListSevice } from '..'
import Image from 'next/image'
import { imageService } from '@/assets'

const ServiceSection : FC = () => {
  return (
    <section className="service-section" id="service-section">
      <div className="container">
        <div className="d-lg-flex align-items-center" style={{gap : '150px'}}>
          <div>
            <Image src={imageService} alt='image-service' width={920} height={920} className=' img-fluid'/>
          </div>
          <div className="mt-5 mt-lg-0">
            <h1 className="judul-all">
              Best Car Rental for any kind of trip in Cirebon
            </h1>
            <p className="text-all">
              Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </p>
            <ListSevice/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection