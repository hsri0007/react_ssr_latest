import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./SubMenu.css";
import isSuperAdmin from '../../services/isSuperAdmin'
const SidebarLink = styled(Link)`
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  padding-left: 54px;

  &:hover {
    background: #252821;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 52px;
  padding-left: 76px;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #e8e3e3;
  font-size: 17px;
  &:hover {
    background: #4a4a87;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  // const flag=isLoggedIn()
  const flag=isSuperAdmin()
  return (
    <>
      { (item.title==="Dashboard"||item.title === "Courses" || item.title==="Articles") &&  <div className="Side" onClick={showSubnav}>
            <div className="items">
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </div>
      }
      { (item.title!=="Dashboard"&&item.title !== "Courses" && item.title!=="Articles")  && flag &&
          <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div className="items">
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </SidebarLink>
      }
      {(item.title!=="Dashboard"&&item.title !== "Courses" && item.title!=="Articles") && !flag && item.title!=='Create Admin' &&
          <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div className="items">
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </SidebarLink>
      }

          {subnav &&
            item.subNav &&
            item.subNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index}>
                  <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
              );
            })}
    </>
  );
};
export default SubMenu;
