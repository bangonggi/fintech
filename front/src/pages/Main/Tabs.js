import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

const tabs = [
  { query: "HP", title: "HP" },
  { query: "EP", title: "EP" },
  { query: "FP", title: "FP" },
];

const Tabs = () => {
  return (
    <div>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab>
            <div>{tab.title}</div>
            <ProgressBar completed={60} style={{ width: "50%", }} />
          </Tab>
        ))}
      </TabsContainer>
    </div>
  );
};

export default Tabs;

const TabsContainer = styled.div`
  gap: 20px;
  margin: 0 auto;
  margin-top: 10px;
  width: 85%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  `;
  
  const Tab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;