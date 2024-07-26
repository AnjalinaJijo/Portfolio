import React, { useState } from 'react'
import styled from'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// import { GiHamburgerMenu } from "react-icons/gi";

import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isClicked,setIsClicked] = useState(false)
  const handleClick = ()=>{
    setIsClicked(!isClicked);
  }
  return (
    <Wrapper>
    <Container>
          <Name >
          <h1>Anjalina Jijo</h1>
          </Name>
        <Bar>
          {/* <HashLink to="#Home" style={{textDecoration:'none',color:'white',fontSize:'20px',marginRight:'8%'}}>Home</HashLink> */}
          <HashLink to="#About" style={{textDecoration:'none',color:'white',fontSize:'20px',marginRight:'8%'}}>About</HashLink>
          <HashLink to="#Experience" style={{textDecoration:'none',color:'white',fontSize:'20px',marginRight:'8%'}}>Experience</HashLink>
          <HashLink to="#Projects" style={{textDecoration:'none',color:'white',fontSize:'20px',marginRight:'8%'}}>Projects</HashLink>
          <HashLink to="#Contact" style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Contact</HashLink>
        {/* <h3 style={{marginRight:'8%'}}>About</h3>
        <h3 style={{marginRight:'8%'}}>Work</h3>
        <h3>Contact</h3> */}
        </Bar>
      {!isClicked ?
       (
        <Menu>
        <h1>Anjalina Jijo</h1>
        <button onClick={handleClick}>  <MenuIcon sx={{height:'20px',width:'20px'}}/> </button>
        </Menu>
       ): (
          <NavMenu>
          
          <Button onClick={handleClick}><CloseIcon sx={{height:'20px',width:'20px'}}/></Button> 
                    
          <DropDown>
          <h1 style={{fontSize:'30px'}}>Anjalina Jijo</h1>
          {/* <HashLinkk to="#Home" style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Home</HashLinkk> */}
          <HashLinkk to="#About" style={{textDecoration:'none',color:'white',fontSize:'20px'}}>About</HashLinkk>
          <HashLinkk to="#Experience" style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Experience</HashLinkk>
          <HashLinkk to="#Projects" style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Projects</HashLinkk>
          <HashLinkk to="#Contact" style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Contact</HashLinkk>
          </DropDown>    
          </NavMenu>

       )}
    </Container>
    <HR />
    {/* <hr sx={{display:'block',border:'solid 1px white',width: '96%',color: '#FFFF00',height: '1px'}}/> */}
    </Wrapper>
  )
}

const Container = styled.div`
display:flex;
width:100vw;
justify-content:space-between;
align-items:center;
padding-top:10px;
padding-bottom:10px;
`
const Wrapper = styled.div`
background-color:#000807;
width:100vw;
color:#fbf9ff;
display:flex;
flex-direction:column;
`
const Name = styled.div`
margin-left:5%;
h1{
font-size:25px;
}

@media screen and (max-width: 768px) {
  display:none;
 }

@media screen and (max-width: 350px) {
  display:none;
 }

`
const HR = styled.div`
border-top: 7px solid #9395d3;
width: 90%;
margin: auto;
z-index:5;
`
const Bar = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin-right:9%;
@media screen and (max-width: 768px) {
 display:none;
}
`
const Menu = styled.div`
width:100vw;
margin-left:5%;
margin-right:5%;
display:flex;
justify-content:space-between;
align-items:center;

margin-right:5%;

  h1{
  font-size:20px;
  }

  
@media screen and (min-width: 768px) {
  display:none;
 }

`

const NavMenu = styled.div`
width:100vw;
height:500px;
margin-right:5%;
margin-top:3%;
@media screen and (max-width: 768px) {
  display: fixed;
  // padding-top:10px;
  z-index:10;
}
@media screen and (min-width: 768px) {
  display: none;
}
`
const DropDown = styled.div`
// display:{{isClicked} ? 'block' :'none'};
margin-top:0;
font-size:30px;
color:white;
background-color:black;
height:300px;
margin-top:100px;
padding-left:10px
z-index:15;

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
}
`

const Button = styled.button `
float:right;
`

const HashLinkk = styled(HashLink)`

&:hover {
  transform: scale(1.05);
}
`

export default Navbar
