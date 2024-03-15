import { useState } from "react";
import "./App.css";
import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Box position={"relative"} w="full">
        <Container
          maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}
        >
          <Header />
          <Routes>
            <Route path="/:username" element={<UserPage />} />
            <Route path="/:username/post/:pid" element={<PostPage />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default App;