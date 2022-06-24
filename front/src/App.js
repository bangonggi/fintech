import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";
import styled from "styled-components";

import MainPage from "./pages/Main/MainPage";


function App() {
  

  const mainPage = <MainPage />;

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={mainPage} />
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
