'use client'



import React from "react";

import Avatar from "../element/Avatar";

import MainHeader from "./MainHeader";



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
