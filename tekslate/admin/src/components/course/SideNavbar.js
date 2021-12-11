import React from "react";
import styled from "styled-components";
import "./SideNavbar.css";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
const Sidebar = styled.div`
  background: #3f3f46;
  width: 275px;
  height: 100vh;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
function SideNavbar() {
  return (
    <div className="sidenav">
      <div className="logo">Admin</div>
      <Sidebar>
        <SidebarWrap>{SidebarData.map((item,index) => {
            return <SubMenu item={item} key={index} />
        })}</SidebarWrap>
      </Sidebar>
    </div>
  );
}

export default SideNavbar;
