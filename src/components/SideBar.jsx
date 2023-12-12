import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {categories} from "../utils/constants"

const SideBar = ({selected,setSelected}) =>  {

    return (
    <Stack
        sx={{flexDirection:{xs:"row",md:"column"},width:{md:"15vw"},overflow:"auto"}}
    >
      {categories.map((category,idx) => (
        <Box sx={{display:"flex",flexDirection:"row",gap:2,my:1,alignItems:"center",cursor:"pointer",backgroundColor:category.name===selected && "#FC1503",color:"white",borderRadius:"20px",padding:1,
        '&:hover':{
            backgroundColor:"FC1503"
        }}}
        onClick={()=>{setSelected(category.name)}}
        key={idx}
        >
            <div style={{color:category.name===selected?"white":"red"}}>{category.icon}</div>
            <Typography variant='body2' style={{color:category.name===selected?"white":"FC1503",opacity:category.name===selected?1:0.7}}>{category.name}</Typography>
        </Box>
      ))}
    </Stack>
  )
}
export default SideBar
