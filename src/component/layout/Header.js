import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyle.css'

const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:'black'}}>
          <Toolbar>
            <IconButton>
              {/* <MenuIcon /> */}
            </IconButton>
            {/* <FastfoodIcon /> */}
            <Typography variant='h6' color='goldenrod' component='nav' sx={{flexGrow: 1}}>Resturant</Typography>  

            <Box sx={{display:{xs:'none', sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
