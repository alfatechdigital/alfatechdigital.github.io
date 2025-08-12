import { CardWithList } from "../components";

const WebsiteTypeList = ({ typeWebsite }) => {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {typeWebsite.map((type) => (
        <CardWithList key={type.label} {...type} />
      ))}
    </div>
  );
};

export default WebsiteTypeList;
