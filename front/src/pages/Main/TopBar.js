import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import CategoryButton from "../../components/CategoryButton";
import * as Api from "api";

const TopBar = ({ setIsOpenSideBar }) => {
  const [name, setName] = useState();
  const handleCategoryBtnClick = () => {
    setIsOpenSideBar(true);
  };
  
  const dispatch = useDispatch();

  const getNoticeList = async () => {
    try {
      const res = await Api.get("users", "9140fef8-fa69-4547-98cc-122f442c7dd5");
      setName(res.data.charName);
    } catch (e) {
      // 에러처리
    }
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <Container>
      <CategoryButton handleClick={handleCategoryBtnClick} />
      <Title style={{ fontSize: "33px", fontFamily: "NanumSquare", fontWeight: "bold" }}>{name}의 집</Title>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  @media (min-width: 450px) {
    height: 70px;
  }
  padding: 0 30px;
  background-color: #ffb564;
  border-radius: 0px 0px 0px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto-Bold" "NanumSquare", sans-serif;
  font-size: 1.24rem;
  position: relative;
`;
