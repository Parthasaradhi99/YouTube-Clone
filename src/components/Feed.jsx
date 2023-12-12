import React, { useState,useEffect } from 'react'
import { Box,Stack, Typography } from '@mui/material'
import SideBar from "./SideBar"
import {fetchFromAPI} from "../utils/fetchFromAPI"
import Videos from "./Videos"

const Feed = () => {
  const [selected,setSelected] = useState("New")
  const [videos,setVideos] = useState([]);
  

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selected}`).then((data)=>setVideos(data.items));
  },[selected])

  return (
    <Stack
      sx={{flexDirection:{xs:"column",md:"row"},backgroundColor:"black",color:"#fff"}}
    >
      <Box
        sx={{borderRight:"2px solid #3d3d3d",height:{xs:"auto"},px:{xs:0,md:2},}}
      >
        <SideBar selected={selected} setSelected={setSelected}/>
        <Typography 
        className='copyright'
        variant="body2"
        mt={2}
        >
          CopyRight Youtube 2024
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" sx={{overflowY:"auto",flex:2,ml:2}}>{selected}<span style={{color:"#FC1503"}}> Videos</span></Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
