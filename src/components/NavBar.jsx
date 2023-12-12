import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Stack, IconButton} from "@mui/material"
import { Link } from 'react-router-dom'
import {logo} from "../utils/constants.js"
import { Search } from '@mui/icons-material'

const NavBar = () => {
  const navigate = useNavigate();
  const [searchTerm,setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
    console.log(searchTerm)
  }
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky",background:"#000",top:"0",color:"white",display:"flex",justifyContent:"space-between",zIndex:"10"}}>
      <Link to="/" style={{display:"flex",alignItems:"center"}}><img src={logo} alt="Youtube Logo" height={50}/></Link>
      <Paper 
        component="form" 
        onSubmit = {handleSubmit}
        sx={{borderRadius:"20px",
        backgroundColor:"white",
        pl:"12px",
        mr:{sm:5}
        }}
      >
        <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        <IconButton 
          aria-label="Search-Icon"
          type="submit"
        >
          <Search color='error'/>
        </IconButton>
      </Paper>
    </Stack>
  )
}

export default NavBar
