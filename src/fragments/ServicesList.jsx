import { CardWithList } from "../components";

const ServicesList = ({ services, showLink }) => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <CardWithList key={service.label} {...service} showLink={showLink} />
      ))}
    </div>
  );
};

export default ServicesList;
