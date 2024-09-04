import React from "react";
import MainHeader from "./MainHeader";
import Avatar from "../element/Avatar";

interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Avatar />
      <div id="content" className="content">
        <div className="content__wrapper">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
