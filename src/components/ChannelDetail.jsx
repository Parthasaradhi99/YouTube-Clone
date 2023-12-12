import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';
import ChannelCard from './ChannelCard';

import { Box, Stack } from '@mui/material';

const ChannelDetail = ({channel}) => {
  const [channelDetail,setChannelDetail] = useState({ })
  const [videos, setVideos] = useState([]);
  const {id} = useParams()

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>{setChannelDetail(data.items[0])})
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{setVideos(data.items)})
  },[id])

    console.log(videos)
    console.log(channelDetail)
  return (
    <Box minHeight="95vh" sx={{backgroundColor:"black"}}>
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
