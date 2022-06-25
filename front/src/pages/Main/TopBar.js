import React from "react";
import styled from "styled-components";

import CategoryButton from "../../components/CategoryButton";

const TopBar = ({ setIsOpenSideBar }) => {
  const handleCategoryBtnClick = () => {
    setIsOpenSideBar(true);
  };

  return (
    <Container>
      <CategoryButton handleClick={handleCategoryBtnClick} />

    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
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