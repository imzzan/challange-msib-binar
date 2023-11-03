import React, { FC } from "react";


interface AccordionProps {
  title : string;
  text : string;
  id : string;
  target : string;
}

const AccordionItem : FC<AccordionProps> = ({title, text, id, target} : AccordionProps) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${target}`}
          aria-expanded="false"
          aria-controls={target}
        >
          {title}
        </button>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          {text}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
