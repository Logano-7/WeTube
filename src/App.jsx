import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components/index";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Feed /> } />
        <Route path='/video/:id' element={ <VideoDetail /> } />
        <Route path='/channel/:id' element={ <ChannelDetail /> } />
        <Route path='/search/:searchTerm' element={ <SearchFeed /> } />
      </Routes>
    </Box>
  );
};

export default App;
