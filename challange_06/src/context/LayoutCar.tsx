"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

interface CarsProps {
  listCars : object[],
  hasilFilter : object[],
  filterCars : () => void
}

export const CarContext = createContext<CarsProps>({});

const CarProvider = ({ children }: { children: React.ReactNode }) => {
  const [listCars, setListCars] = useState<object[]>([]);
  const [hasilFilter, setHasilFilter] = useState<object>([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      )
      .then((response) => setListCars(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterCars = (driver: string, penumpang: number) => {
    const response = listCars.filter(
      (item: any) =>
        item.transmission == driver &&
        item.capacity >= penumpang &&
        item.available
    );
    setHasilFilter(response);
  };

  return (
    <CarContext.Provider value={{ listCars, hasilFilter, filterCars }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
