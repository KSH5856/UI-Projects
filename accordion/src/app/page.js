"use client"
import { useState } from "react";
import { Accodion } from "./AccordionComponent/accordion";

export default function Home() {
  // for state management
  const [activeAccordion, setActiveAccordion] = useState([]);
  
  // mock data
  const arr = [
    {
      title: 'Accordion 1',
      description: 'This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1'
    },
    {
      title: 'Accordion 2',
      description: 'This is the description of accordion2 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1'
    },
    {
      title: 'Accordion 3',
      description: 'This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1'
    },
    {
      title: 'Accordion 4',
      description: 'This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1 This is the description of accordion1'
    },

  ];

  // callabck from child component
  const changeActiveTab = (index) => {
    setActiveAccordion(index);
  };

  return (
    <div>
      <Accodion
        data={arr}
        activeAccordion={activeAccordion}
        changeTab={changeActiveTab}
      />
    </div>
  );
};
