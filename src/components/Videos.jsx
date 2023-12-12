import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} color="#fff" sx={{margin:"1rem auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
      {videos.map((video,idx)=>(
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video}/>}
          {video.id.channelId && <ChannelCard channel={video}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
