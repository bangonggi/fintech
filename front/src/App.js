import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";
import styled from "styled-components";

import MainPage from "./pages/Main/MainPage";
import FoodPage from "./pages/Main/FoodPage";
import GamePage from "./pages/Main/GamePage";
import NewsPage from "./pages/Main/NewsPage";
import CurePage from "./pages/Main/CurePage";

function App() {
  

  const mainPage = <MainPage />;
  const foodPage = <FoodPage />;
  const gamePage = <GamePage />;
  const newsPage = <NewsPage />;
  const curePage = <CurePage />;

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={mainPage} />
          <Route path="/food" element={foodPage} />
          <Route path="/game" element={gamePage} />
          <Route path="/news" element={newsPage} />
          <Route path="/cure" element={curePage} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;

  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
