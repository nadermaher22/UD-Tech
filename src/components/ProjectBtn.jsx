import React, {  useState } from "react";

const ProjectBtn = ({ setItem, menuItems, filterItem, item }) => {
  const [active, setActive] = useState("All");

  const filterFunction = (Val) => {
    filterItem(Val);
    setActive(Val);
  };
  const AllFilterFunction = (Val) => {
    setItem(item);
    setActive("All");
  };
  return (
    <div className="d-flex justify-content-center">
      <ul className="isotope-menu layout2">
        <li
          className={active === "All" && "active"}
          onClick={() => AllFilterFunction()}
        >
          All
        </li>
        {menuItems.map((Val, id) => {
          return (
            <li
              onClick={() => filterFunction(Val)}
              key={Val.id}
              className={active === Val && "active"}
            >
              {Val}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectBtn;
