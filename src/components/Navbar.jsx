import React, { useState,useEffect } from 'react'
import styled from'styled-components'
import { NavLink as Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isClicked,setIsClicked] = useState(false)
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

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
        <h3 style={{marginRight:'8%'}}>About</h3>
        <h3 style={{marginRight:'8%'}}>Work</h3>
        <h3>Contact</h3>
        </Bar>
      {!isClicked ?
       (
        <Menu>
        <h1>Anjalina Jijo</h1>
        <button onClick={handleClick}><MenuIcon sx={{height:'40px',width:'40px'}}/></button>
        </Menu>
       ): (
          <NavMenu>
          
          <Button onClick={handleClick}><CloseIcon sx={{height:'50px',width:'50px'}}/></Button> 
                    
          <DropDown>
          <h1 style={{fontSize:'30px'}}>Anjalina Jijo</h1>
          <NavLink to='/Skills' style={{textDecoration:'none',color:'white'}}>
          About
          </NavLink>
          <NavLink to="/Experience" style={{textDecoration:'none',color:'white'}}>
          Experience
          </NavLink>
          <NavLink to="/Project" style={{textDecoration:'none',color:'white'}}>
          Projects
          </NavLink>
          <NavLink to="/Contact" style={{textDecoration:'none',color:'white'}}>
          Contact
          </NavLink>
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
justify-content:space-between;
align-items:center;
`
const Wrapper = styled.div`
background-color:#000807;
color:#fbf9ff;
display:flex;
flex-direction:column;
`
const Name = styled.div`
display:inline;
// width:auto;
// margin-top:3%;
margin-left:5%;
@media screen and (max-width: 768px) {
  display:none;
 }

`
const HR = styled.div`
border-top: 7px solid #9395d3;
width: 90%;
margin: auto;
z-index:5;
// margin-top:10px;
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
width:100%;
margin:5%;
display:flex;
justify-content:space-between;
align-items:center;

margin-right:5%;
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
// width:100vw;
// position:absolute;
margin-top:100px;
padding-left:10px
z-index:15;

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
// z-index:5;
}
`

const Button = styled.button `
float:right;
`

const NavLink = styled(Link)`
&:hover {
  transform: scale(1.05);
}
`

export default Navbar
