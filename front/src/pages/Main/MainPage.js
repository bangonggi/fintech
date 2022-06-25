import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "./TopBar";
import Tabs from "./Tabs";
import HomeTab from "./HomeTab";
import SideLeftBar from "../../components/SideLeftBar";
import Category from "../../components/Category";
import TabBar from "components/TabBar";
import { useLocation } from "react-router-dom";

const tabs = {
  home: <HomeTab />,
};

const MainPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let tab = searchParams.get("tab");
  if (!tab) tab = "home";

  return (
    <Container>
      <TopBar setIsOpenSideBar={setIsOpenSideBar} />

      <Tabs />
      {tabs[tab]}
      <div style={{width: "90%"}}>
        <img className="phoneImage" alt="iPhone_01" src="images/news.gif" width= "100%" />
      </div>
      {isOpenSideBar && (
        <SideLeftBar title="카테고리" setIsOpenSideBar={setIsOpenSideBar}>
          <Category />
        </SideLeftBar>
      )}

      <TabBar />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 770px;
  min-width: 300px;
  min-height: 100vh;
  background-image: url("/images/roomBig3.png");
  background-repeat: no-repeat;
  position: absolute;
  overflow: hidden;
`;
