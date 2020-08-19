import React from "react";
import "./SidebarOption.css";

const SideBarOption = ({ active, title, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SideBarOption;
