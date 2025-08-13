import { Card } from "../components";

const WhyChooseUsList = ({ choices, style }) => {
  return (
    <div
      className={`py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${style}`}
    >
      {choices.map((choice) => (
        <Card key={choice.label} {...choice} />
      ))}
    </div>
  );
};

export default WhyChooseUsList;
