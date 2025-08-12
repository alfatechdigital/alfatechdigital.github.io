import { Card } from "../components";

const ApproachList = ({ approaches }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {approaches.map((approach) => (
        <Card key={approach.label} {...approach} />
      ))}
    </div>
  );
};

export default ApproachList;
