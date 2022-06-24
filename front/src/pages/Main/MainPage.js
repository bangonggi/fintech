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
  min-width: 360px;
  min-height: 100vh;
  background-image: url("/images/rooms.jpg");
  background-repeat: no-repeat;
  position: absolute;
  overflow: hidden;
`;
