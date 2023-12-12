import React from 'react'
import { Card, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({channel,marginTop}) => {
  console.log(channel)
  return (
      <Link to={`/video/${channel?.id?.channelId}` || `/video/${demoChannelUrl}`}>
   <Card sx={{ width: 358,color: "#fff",height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem auto",backgroundColor:"transparent",marginTop:`${marginTop}`, marginLeft:"auto",marginRight:"auto"}}>
        <CardMedia
          component="img"
          alt=""
          height="180"
          image={channel?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          width="100%"
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="subtitle2" color="gray" alignItems="center" >
            {channel?.snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }}/>
          </Typography>
    </Card>
      </Link>
  )
}

export default ChannelCard
