import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Api from "api";
import { useDispatch, useSelector } from "react-redux";
import { confirmNotice } from "redux/userSlice";

import SideRightBar from "components/SideRightBar";

const Notice = ({ setIsOpenNotice }) => {
  const { user } = useSelector((state) => state.user);
  const [noticeList, setNoticeList] = useState([]);

  const dispatch = useDispatch();
  const handleNoticeClick = () => {
    setIsOpenNotice(true);
  };
  const getNoticeList = async () => {
    try {
      const res = await Api.get("users", `${user.id}/alert`);
      setNoticeList(res.data.payload || []);
      dispatch(confirmNotice());
    } catch (e) {
      // 에러처리
    }
  }; 
 
  useEffect(() => {
    getNoticeList();
  }, []);
  return (
    <SideRightBar title="오늘의 뉴스" setIsOpenSideBar={setIsOpenNotice}>

    <img src="images/newspaper.png" alt=""/>
        
    </SideRightBar>
  );
};

export default Notice;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 770px;
  height: 90vh;
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ noContents }) => noContents && "center;"};
  overflow: scroll;

  &::-webkit-scrollbar {
    background-color: none;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 10px;
    opacity: 0.4;
  }
`;

const NoticeCard = styled.div`
  box-shadow: 0 2px 3px #d9d9d9;
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  max-width: 450px;
  height: 110px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  width: 75px;
  min-width:75px
  height: 75px;
  min-height:75px;
  margin-right: 15px;
  border-radius: 50%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 315px;
  height: 80%;

  > span:first-child {
    font-size: 13px;
    margin-bottom: 10px;
  }

  > span:last-child {
    font-size: 14px;
    line-height: 20px;
    color: #ff9b2f;
  }
`;

const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3vw;
  @media (min-width: 650px) {
    font-size: 20px;
  }

  > img {
    width: 50%;
    margin-bottom: 5%;
  }
`;
