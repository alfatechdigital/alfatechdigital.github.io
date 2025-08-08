import { Outlet } from "react-router-dom";
import { Navbar, Footer, DarkModeToggle } from "../components";
import { useState } from "react";

const BaseLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-background">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <DarkModeToggle />
      <Footer />
    </div>
  );
};

export default BaseLayout;
