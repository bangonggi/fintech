import React, { useState } from "react";
import styled from "styled-components";

const tabs = [
  { query: "HP", title: "HP" },
  { query: "EP", title: "EP" },
  { query: "FP", title: "FP" },
];

const Tabs = () => {
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab>
          <span>{tab.title}</span>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div`
  position: relative;
  margin-top: 5px;
  left: 5%;
  width: 90%;
  height: 50px;
  display: flex;
`;

const Tab = styled.div`
  cursor: pointer;
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;