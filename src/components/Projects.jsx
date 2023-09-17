import React from 'react'
import styled from 'styled-components';

const Projects = () => {
  return (
    <Container>
      <Project>
      <h1 style={{marginTop:'10%',marginBottom:'6%',fontSize:'50px',
        textDecoration:'underline',textDecorationColor:'#9395d3',  
        textDecorationStyle:'double'}}>PROJECTS</h1>
        <Card >
          <CardText>
            <p style={{marginTop:'50px',fontSize:'20px',textAlign:'left'}}>MERN Stack | Full Stack <br />
            <span style={{fontSize:'40px',fontWeight:'bold'}}>National Disaster Hub</span>
            </p>
            <Skills>
            <Tech>
              <p>React</p>
              <p>Redux</p>
              <p>Express</p>
              <p>NodeJS</p>
              <p>MongoDB</p>
            </Tech>
            </Skills>
            <Button>View Project</Button>
            <p style={{fontSize:'20px',textAlign:'left',textJustify:'inter-word'}}> A website that allows disaster survivors to check in so that their dear ones know that they are safe.
              Anyone can access this site to see if their dear ones are checked in and are safe.
              The last tracked location of the checked person is obtained and stored. 
              Real time weather information is also obtained.
            </p>
          </CardText>
          <CardImg>
          <img src="./images/NDH.png" style={{marginTop:'100px'}}/>
          </CardImg>
        </Card>

        <Card>
          <CardText>
            <p style={{fontSize:'50px',marginTop:'50px',textAlign:'left',fontWeight:'bold'}}>
                  Travel Companion
            </p>
            <Skills>
            <Tech>
              <p>React</p>
              <p>Redux</p>
              <p>Material UI</p>
            </Tech>
            </Skills>
            <Button>View Project</Button>
            <p style={{fontSize:'20px',textAlign:'left',textJustify:'inter-word'}}> A website that allows disaster survivors to check in so that their dear ones know that they are safe.
              Anyone can access this site to see if their dear ones are checked in and are safe.
              The last tracked location of the checked person is obtained and stored. 
              Real time weather information is also obtained.
            </p>
          </CardText>
          <CardImg>
          <img src="./images/TravelCompanion.png" style={{marginTop:'110px'}}/>
          </CardImg>
        </Card>

      </Project>
      
    </Container>
  )
}

const Container = styled.div `
// background-color:#a2a3bb;
height:auto;
width:100vw;
color:#fbf9ff;
display:flex;
color:'9395d3'
`
const Project = styled.div `
// background-color:#a2a3bb;
height:auto;
width:100vw;
color:#000807;
display:flex;
// gap:150px;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`

const Card = styled.div`
display:flex;
gap:30px;
justify-content:center;
// align-items:center;

@media (max-width: 900px) {
  flex-direction:column;
   align-items:center;
   gap:0px;
}
`
const CardText = styled.div`
// background-color:#b3b7ee;
min-height:400px;
max-width:400px;
display:flex;
flex-direction:column;
// flex-wrap:wrap;
`
const CardImg = styled.div`
display:flex;
img{
  width:500px;
  height:300px;
  border-radius:10%;
  border: 5px solid black;
  padding:5px;
  // marginTop:100px;

}

&:hover {
  img{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

}
@media (max-width: 900px) {
  img{
    height:250px;
    width:400px;
  }

}

`
const Skills = styled.div`
display:flex;
display: inline-flex;
`
const Tech = styled.div`
display:flex;
flex-wrap:wrap;
gap:0 10px;
// justify-content:start;
p{
  font-size:20px;
  background-color: #9395d3;
  padding:5px;
  margin-bottom:0px;
}
`

const Button = styled.button`
margin-top:20px;
width:150px;
height:50px;
pading:5px;
background-color: #a2a3bb;
font-weight:bold;
font-size:20px;
border-radius:5%;
&:hover {
    transform: scale(1.05);
    background-color:#b3b7ee;
}
`

export default Projects
