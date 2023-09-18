import React from 'react'
import styled from 'styled-components';

const Experience = () => {
  return (
    <Container id='Experience'>
      <Exp>
       <Heading>EXPERIENCE</Heading>


        <Card>
          <CardText>
            <p style={{fontSize:'20px',marginTop:'50px',textAlign:'left'}}>Business Web Solutions <br />
            <span style={{fontSize:'40px',fontWeight:'bold'}}>Software Intern</span><span>  <h6 style={{marginTop:'10px',marginBottom:'20px',fontSize:'15px'}}>March 2022 to March 2023</h6></span>
            </p>
            <Skills>
            <Tech>
              <p>React</p>
              <p>Redux</p>
              <p>Express</p>
              <p>NodeJS</p>
              <p>MongoDB</p>
              <p>Jira</p>
              <p>Git</p>
              <p>Agile</p>
            </Tech>
            </Skills>
            <p style={{fontSize:'25px',textAlign:'left'}}> My role encompassed both front-end and back-end development, where I designed and implemented user interfaces using React and Redux,
             ensuring a seamless and engaging user experience. On the server-side, I successfully 
             implemented Express and NodeJS functionalities, collaborating closely with my fellow 
             engineers.</p>
            <p style={{fontSize:'25px',textAlign:'left'}}>Our work environment followed agile methodologies, and I actively participated in agile scrum meetings.
             Additionally, I played a key role in modeling MongoDB schemas, integrating them efficiently with existing APIs to optimize data handling.</p>

            
          </CardText>
          <CardImg>
          <img src="./images/girl.png" style={{}}/>
          </CardImg>
        </Card>

        </Exp>

    </Container>
  )
}

const Container = styled.div `
// background-color:#000807;
height:auto;
width:100vw;
color:#fbf9ff;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Exp = styled.div `
// background-color:#a2a3bb;
height:auto;
width:100vw;
color:#000807;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`

const Card = styled.div`
display:flex;
gap:20px;
// flex-direction:column;
justify-content:center;
// align-items:center;

@media (max-width: 1100px) {
  flex-direction:column;
   align-items:center;
   gap:0px;
}
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

const CardText = styled.div`
// background-color:#b3b7ee;
min-height:400px;
max-width:50%;
display:flex;
text-justify:auto;
flex-direction:column;
@media (max-width: 1100px) {
  max-width:80%;
}


`
const CardImg = styled.div`
display:flex;
// flex-direction:column;
justify-content:center;
// align-items:center;

img{
  width:500px;
  height:300px;
}

@media (max-width: 900px) {
  img{
    width: 300px;
    height: 200px;
  }
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
gap: 0 10px;
// justify-content:start;
p{
  font-size:20px;
  border:1px solid #9395d3;
  background-color: #9395d3;
  padding:5px;
  margin-bottom:0px;
}
`

export default Experience
