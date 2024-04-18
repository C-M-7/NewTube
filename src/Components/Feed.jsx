import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {SideBar, Videos} from '../Components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection : {sx : 'column', md: 'row'}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight: '1px solid', px:{sx:0, md:2}}}>
        <SideBar
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        />
        <Typography className = 'copyright' variant = 'body2' sx = {{mt :1.5, color : 'white'}}>
          Copyright 2024 CM7
        </Typography>
      </Box>
      <Box p={2} sx={{overflow:'auto', height: '90vh', flex : 2}}>
        <Typography variant='h4' fontWeight='bold'
        mb = {2} sx = {{color:'white'}}>
          {selectedCategory} <span style={{color : '#F31503'}}>videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box> 
    </Stack>
  )
}

export default Feed
