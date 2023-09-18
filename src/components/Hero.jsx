import React from 'react'
import styled from 'styled-components';

import Navbar from './Navbar'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import Link from '@mui/material/Link';

const Hero = () => {
    return (
        <div id='Home'>
        <Navbar/>
        <Container className='hero-bg'>
        <Intro>
            <IntroImg  src="./images/girlimg.png" />
            <IntroText>
              <h1> Hai, I am Anjalina
                <div style={{display:'flex',justifyContent:'center',AlignItems:'center'}}>
        <Socials>
        <Icons>
        <Link href="https://github.com/AnjalinaJijo" alt="GitHub" sx={{textDecoration:'none'}}>
          <GitHubIcon size="large" sx={{height:'35px',width:'35px',color:'white'}}/>
          {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
        </Link>
        </Icons>
        <Icons>
        <Link href="https://www.linkedin.com/in/anjalina-jijo/" alt="GitHub" sx={{textDecoration:'none'}}>
          
          <LinkedInIcon size="large" sx={{height:'35px',width:'35px',color:'white'}}/>
          {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
        </Link>
        </Icons>
        <Icons>
        <Link href="mailto:anjalina008@gmail.com" alt="GitHub" sx={{textDecoration:'none'}}>
          <EmailIcon size="large" sx={{height:'35px',width:'35px',color:'white'}}/>
          {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
        </Link>
        </Icons>
      </Socials>
     </div>
      <p style={{wordWrap: 'break-word'}}>I am a Web Developer Focused on Building Responsive 
                    Websites with Delightful User Experience
                </p>
              </h1>
                
            </IntroText> 
            </Intro>   
        </Container >
        </div>
        
    )
}

const Container = styled.div`
background-color:#000807;
height:100vh;
width:100vw;
color:#fbf9ff;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Intro = styled.div `
display:flex;
gap:20px;
justify-content:center;
@media (max-width: 900px) {
    flex-direction:column;
     align-items:center;
     gap:0px;
  }
`
const IntroText = styled.div `
display:flex;
flex-direction:column;
// justify-content:center;
align-items:center;

h1{
    font-size:60px;
    text-align:center;
}

p{
    font-size:20px;
}
@media (max-width: 900px) {
    h1{
        font-size:40px;
        // text-align:center;
    }
    p{
      font-size:20px;
  }
}
@media (max-width: 770px) {
  h1{
      font-size:35px;
      // text-align:center;
  }
  p{
    font-size:15px;
}
}
`
const IntroImg = styled.img `
@media (max-width: 900px) {
    width: 180px;
    height: 200px;
}
`
const Socials = styled.div`
display:flex;
gap:10px;
// justify-content:center;
// align-items:center;
  
}

`
const Icons = styled.div`
border-radius:50%;
&:hover {
    transform: scale(1.05);
}

`


export default Hero
