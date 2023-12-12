import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({ video }) => {
  return (
    <Card sx={{backgroundColor: "#1e1e1e",color: "#fff" , width: { xs: '100%', sm: '358px', md: "320px", } }}>
      <Link to={`/video/${video.id.videoId}` || `/video/${demoVideoUrl}`}>
        <CardMedia
          component="img"
          alt=""
          height="180"
          image={video.snippet.thumbnails.high.url || demoThumbnailUrl}
        />
      </Link>
      <CardContent>
        <Link to={`/video/${video.id.videoId}` || `/video/${demoVideoUrl}`}>
          <Typography gutterBottom variant="subtitle1" component="div" color="#FFF" fontWeight="bold">
            {video.snippet.description.slice(0, 60) || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={`/channel/${video.snippet.channelId}` || `/channel/${demoChannelUrl}`}>
          <Typography variant="subtitle2" color="gray" alignItems="center">
            {video.snippet.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
