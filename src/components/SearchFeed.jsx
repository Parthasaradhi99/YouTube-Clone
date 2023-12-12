import React, { useState,useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import {fetchFromAPI} from "../utils/fetchFromAPI"
import { useParams } from 'react-router-dom'
import Videos from "./Videos"

const Feed = () => {
  const [videos,setVideos] = useState([]);
  const { searchTerm } = useParams()

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items));
  },[searchTerm])

  return (
      <Box>
        <Typography variant="h4" sx={{overflowY:"auto",flex:2,ml:2}}>{searchTerm}<span style={{color:"#FC1503"}}> Videos</span></Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default Feed
