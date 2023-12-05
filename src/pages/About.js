import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:12, mx:10, textAlign:'center', '@media (max-width:600px)':{
        my:5, mx:5, '& h4' :{
          fontSize:"1.8rem"
        }
      }}} >
        <Typography variant='h4' sx={{my:2, fontSize:'40px', fontWeight:'bold'}}>Welcome to my Resturant</Typography>
        <p style={{color:'#121219'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laudantium iusto culpa, ducimus consectetur voluptatem ullam ipsum, explicabo corporis enim eveniet? Aliquam aut facilis eveniet labore voluptatum odio rerum veniam. Tempora architecto, cupiditate accusamus aliquid omnis ipsam minus voluptas quod! Nostrum quas voluptatibus sequi fuga unde omnis laborum quasi? Hic consequuntur eius vel ullam repudiandae dolor dicta officia minima. Veniam nam consequuntur corporis blanditiis, ratione culpa reiciendis quam at alias nesciunt repudiandae ducimus eius eos in unde autem veritatis vitae, error explicabo quisquam assumenda tempora. Odio, corrupti impedit aut placeat dolor obcaecati aliquam exercitationem delectus, omnis quaerat ut. Eius, commodi?</p>
        <br />

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolorum doloribus architecto laboriosam ratione quam quia eaque perferendis quo quasi magni odio vero voluptatem sapiente consectetur iste at, aliquam odit magnam iure, deserunt ipsa expedita nostrum? Expedita quam facere molestiae pariatur quos nemo ducimus. Cumque suscipit architecto quia debitis vitae?</p>
      </Box>
    </Layout>
  )
}

export default About
