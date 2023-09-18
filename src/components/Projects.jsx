import { Description } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Projects = () => {
  return (
    <Container id='Projects'>
      <Project>
      <Heading>PROJECTS</Heading>
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
            <Describe > 
           <p> A MERN stack application that allows disaster survivors to check in so that their
              dear ones know that they are safe.
              Anyone can access this site to see if their dear ones are checked in and are safe.
              The last tracked location of the checked person is obtained and stored. </p>
      <p>It enables individuals to quickly check the safety status of their loved ones, reducing anxiety and uncertainty.
      This is a valuable tool for emergency management agencies to manage and track safe individuals efficiently.
              Successfully developed a web application that serves a critical purpose during disasters.</p>
            </Describe>
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
            <Describe>

            <p>A travel website aimed at helping users find hotels, restaurants, and attractions based on specified location.
            Integrated Rapid API to fetch data on hotels, restaurants, and attractions in the specified location, ensuring current and accurate information.</p>
           <p>Also implemented search and filtering options, allowing users to narrow down their choices based on preferences such as rating, cuisine, or number of adults.
            Provided in-depth information on each listing, including descriptions, ratings, photos, and websites.</p>
   
            </Describe>
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
const Heading = styled.h1`
margin-top:10%;
margin-bottom:6%;
font-size:50px;
text-decoration:underline;
text-decoration-color:#9395d3;  
text-decoration-style:double;
@media (max-width: 900px) {
  font-size:40px;
}
`

const Card = styled.div`
display:flex;
gap:30px;
justify-content:center;
// align-items:center;

@media (max-width: 1100px) {
  flex-direction:column;
   align-items:center;
   gap:0px;
}
`
const CardText = styled.div`
// background-color:#b3b7ee;
min-height:400px;
max-width:50%;
display:flex;
flex-direction:column;
// flex-wrap:wrap;
@media (max-width: 1100px) {
  max-width:80%;
}
`
const Describe = styled.p`
font-size:25px;
text-align:left;
text-justify:inter-word;

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
