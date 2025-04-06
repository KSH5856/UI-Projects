import "./accordion.css";
export const Accodion = ({ data, activeAccordion, changeTab}) => {
  return (
    <div>
      {data.map((d, index) => {
        return (
          <div key={index} className="accordion-container">
            <div className="accordion-title" onClick={() => changeTab(index)}>
              {d.title}
            </div>
            <div
              className={`${
                activeAccordion === index
                  ? "activeAccordion"
                  : "inactiveAccordion"
              }`}
            >
              {d.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
