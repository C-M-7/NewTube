import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, ChannelDetail, VideoDetails, SearchFeed, Feed} from './Components'

const App = () =>(
  <BrowserRouter>
    <Box sx={{backgroundColor : 'black'}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' element = {<VideoDetails/>}/>
        <Route path='/channel/:id' element = {<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element = {<SearchFeed/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App