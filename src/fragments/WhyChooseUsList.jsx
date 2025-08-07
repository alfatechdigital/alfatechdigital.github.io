import { Card } from "../components";

const WhyChooseUsList = ({ choices }) => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {choices.map((choice) => (
        <Card key={choice.label} {...choice} />
      ))}
    </div>
  );
};

export default WhyChooseUsList;
