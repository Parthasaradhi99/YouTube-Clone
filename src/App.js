import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#000000"
      }
    }
  })
  const [search,setSearch] = useState("");

  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <NavBar serach={search} setSearch={setSearch}/>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
