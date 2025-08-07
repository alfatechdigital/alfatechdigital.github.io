import { Principle } from "../components";

const PrincipleList = ({ principles }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {principles.map((principle) => (
        <Principle key={principle.title} {...principle} />
      ))}
    </div>
  );
};

export default PrincipleList;
