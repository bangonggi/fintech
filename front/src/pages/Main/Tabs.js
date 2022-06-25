import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch, useSelector } from "react-redux";
import * as Api from "api";

const tabs = [
  { query: "HP", title: "HP" },
  { query: "EP", title: "EP" },
  { query: "FP", title: "FP" },
];

const Tabs = () => {
  const dispatch = useDispatch();
  const [hp, setHp] = useState();
  const [ep, setEp] = useState();
  const [fp, setFp] = useState();

  const getNoticeList = async () => {
    try {
      const res = await Api.get("users", "9140fef8-fa69-4547-98cc-122f442c7dd5");
      setHp(res.data.hp);
      setEp(res.data.ep);
      setFp(res.data.fp);
    } catch (e) {
      // 에러처리
    }
  };
 
  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <div>
      <TabsContainer>
        <Tab>
          <div>HP</div>
          <ProgressBar completed={hp} style={{ width: "50%", }} />
        </Tab>
        <Tab>
          <div>EP</div>
          <ProgressBar completed={ep} style={{ width: "50%", }} />
        </Tab> <Tab>
          <div>FP</div>
          
          <ProgressBar completed={fp} style={{ width: "50%", }} />
        </Tab>
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