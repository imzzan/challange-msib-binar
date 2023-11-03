import React, { useContext, FC } from "react";
import { CarCard } from "..";
import { CarContext } from "../../context/LayoutCar";

const ListCard = () => {

  const {hasilFilter} = useContext(CarContext)

  return (
    <section id="show-product" className="show-product mt-4">
      <div className="container conatainer-card-mobil">
        <div id="cars-container" className="row row-gap-4">
          {hasilFilter.map((item: any) => {
            return (
              <CarCard
                key={item.id}
                image={item.image.split(".")[1]}
                manufacture={item.manufacture}
                model={item.model}
                rentPerDay={item.rentPerDay}
                capacity={item.capacity}
                description={item.description}
                type={item.type}
                year={item.year}
                transmission={item.transmission}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListCard;
