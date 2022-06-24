import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  faWheatAwn,
  faFish,
  faEgg,
  faCubesStacked,
  faBottleDroplet,
  faWineGlass,
  faFaceSmile,
  faUtensils,
  faCircleExclamation,
  faBowlFood,
  faMugSaucer,
  faDumbbell,
  faGem,
  faHotel,
  faDog,
  faPencil,
  faHand,
  faGamepad,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const parcelCategory = [
  { eng: "fruitVegetable", kor: "ㄱ·ㄱ", icon: faCarrot },
  { eng: "cereal", kor: "ㄴ·ㄴ", icon: faWheatAwn },
  { eng: "seafood", kor: "ㄷ·ㄷ", icon: faFish },
  { eng: "meatEgg", kor: "ㄹ·ㄹ", icon: faEgg },
  { eng: "noddleSpice", kor: "ㅁ·ㅁ", icon: faCubesStacked },
];

const subscribeCategory = [
  { eng: "food", kor: "내 정보", icon: faBowlFood },
  { eng: "cafe", kor: "이름 변경", icon: faMugSaucer },
  { eng: "health", kor: "추가 추가", icon: faDumbbell },
];

const options = [
  { eng: "parcel", kor: "상품", categoryType: parcelCategory },
  { eng: "subscribe", kor: "My공기", categoryType: subscribeCategory },
];

const Category = ({ setIsOpenSideBar, setProducts, setPage }) => {
  const [option, setOption] = useState("parcel");
  const [category, setCategory] = useState(parcelCategory);

  const navigate = useNavigate();

  const handleCategoryClick = (eng) => {
    return () => {
      if (setIsOpenSideBar) {
        setIsOpenSideBar(false);
        setProducts([]);
        setPage(0);
      }
      navigate(`/products?category=${eng}`);
    };
  };

  const handleSearchBtnClick = () => {
    navigate("/search");
  };

  const handleOptionClick = (eng, categoryType) => {
    return () => {
      setOption(eng);
      setCategory(categoryType);
    };
  };

  return (
    <Container>
      <TabContainer>
        {options.map(({ eng, kor, categoryType }) => (
          <Tab
            key={eng}
            selected={eng === option}
            onClick={handleOptionClick(eng, categoryType)}
          >
            {kor}
          </Tab>
        ))}
      </TabContainer>

      <SearchButton onClick={handleSearchBtnClick}>
        <span>검색을 해볼까요?</span>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
      </SearchButton>

      <CategoryContainer>
        {category.map(({ eng, kor, icon }, idx) => (
          <span key={idx} onClick={handleCategoryClick(eng)}>
            <FontAwesomeIcon icon={icon} />
            {kor}
          </span>
        ))}
      </CategoryContainer>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 90vh;
  box-sizing: border-box;

  font-size: 20px;
  @media (min-width: 500px) {
    font-size: 22px;
  }
  @media (min-width: 770px) {
    font-size: 24px;
  }
`;

const TabContainer = styled.div`
  top: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Tab = styled.div`
  cursor: pointer;
  color: ${({ selected }) => (selected ? "#F79831;" : "#ABABAB;")};
  border-bottom: ${({ selected }) =>
    selected ? "3px solid #F79831;" : "3px solid white;"};

  & + div {
    margin-left: 2vw;
  }
`;

// 카테고리의 세부 카테고리에 따라 컨테이너를 따르게 둘 것!
const CategoryContainer = styled.div`
  width: 100%;
  height: 30vh;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > span {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #ffb564;
    }

    > svg {
      margin-right: 15px;
    }
  }
`;

const SearchButton = styled.div`
  cursor: pointer;
  margin: 20px 0px 0 57px;
  padding: 0 15px 0 15px;
  width: 80%;
  height: 45px;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #cccccc;
  font-size: 12px;
`;