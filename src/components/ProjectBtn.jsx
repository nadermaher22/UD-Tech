import axios from "axios";
import React, { useEffect, useState } from "react";
import Data from "./Data.js";

const ProjectBtn = ({ setItem, menuItems, filterItem }) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("http://apiv2.udtech-sa.com/api/WebSite/GetProjects?languageId=1")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [active, setActive] = useState("All");
  const filterFunction = (Val) => {
    filterItem(Val);
    setActive(Val);
  };
  const AllFilterFunction = (Val) => {
    setItem(Data);
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
              key={id}
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
