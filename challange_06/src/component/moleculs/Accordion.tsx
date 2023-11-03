import React, { FC } from "react";
import { AccordionItem } from "..";

const content = [
  {
    id: "flush-collapseOne",
    target: "flush-collapseOne",
    title: "Berapa hari minimal sewa mobil lepas kunci?",
    text: "Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the first item's accordion body",
  },
  {
    id: "flush-collapseTwo",
    target: "flush-collapseTwo",
    title: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    text: "Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the first item's accordion body",
  },
  {
    id: "flush-collapseThree",
    target: "flush-collapseThree",
    title: "Apakah Ada biaya antar-jemput?",
    text: "Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the first item's accordion body",
  },
  {
    id: "flush-collapseFour",
    target: "flush-collapseFour",
    title: "Bagaimana jika terjadi kecelakaan",
    text: "Placeholder content for this accordion, which is intended to demonstrate the.accordion-flush class. This is the first item's accordion body",
  },
];

const Accordion: FC = () => {
  return (
    <div className="w-100 w-lg-50">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {content.map((item, index) => {
          return (
            <AccordionItem
              key={index + 1}
              title={item.title}
              text={item.text}
              id={item.id}
              target={item.target}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
