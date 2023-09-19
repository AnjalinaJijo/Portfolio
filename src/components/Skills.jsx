import React from 'react'
import styled from 'styled-components';


const Skills = () => {
  return (
    <Container id='About'>
      <Wrap>
      <Heading>ABOUT ME</Heading>
      </Wrap>
      <Wrapper>
      <About>
        <h1 style={{fontSize:'20px'}}>Passionate, Quick-Learning Developer | A Life Long Learner</h1>
        <p>I'm passionate about bringing both the technical and visual aspects of digital products to life.
           User experience, beautiful pixels and writing clean accessible, human code matters to me. I have an eye for simple but elegant websites that give great user experience.
           I am a quick learner and love challenges that help me think outside the box.</p>

        <p>I have an Electronics and Communications
           Engineering Degree with a minor in 
           Computer Science. My passion for coding made me a self taught Web Developer.
        </p>
        <p>I am a friendly and highly collaborative person who is easy to work with. 
          Join me on this journey as I continue to evolve and create, always pushing the boundaries of 
          what's possible in the digital landscape.
          Feel free to reach out and say hello!
        </p>

      </About>
      <TechSkills>
        <TechHeading>
          <h1>MY SKILLS</h1>
        </TechHeading>
      <Tech>
              <p>React</p>
              <p>Redux</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>Jira</p>
              <p>Git</p>
              <p>RESTful APIs</p>
              {/* <p>Agile</p> */}
              <p>HTML</p>
              <p>CSS</p>
              
              <p>JavaScript</p>
              <p>Bootstrap</p>
              <p>Firebase</p>
              <p>Visual Studio</p>
              <p>Command Prompt</p>
              <p>Eclipse</p>
              <p>Linux</p>
      </Tech>
      </TechSkills>

      </Wrapper>
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
const Wrapper = styled.div `
// background-color:#000807;
height:auto;
width:100vw;
color:#fbf9ff;
display:flex;
justify-content:center;
align-items:center;


@media screen and (max-width: 768px) {
  flex-direction:column;
  gap:30px;
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

const Wrap = styled.div `
// background-color:#a2a3bb;
height:auto;
width:50%;
color:#000807;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// text-align:center;

`
const About = styled.div `
// background-color:#b3b7ee;
// background-color:#9395d3;
border:10px solid #9395d3;
min-height:520px;
width:50%;
padding:35px;
border-radius:20%;
color:#000807;
// color:white;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left:50px;
margin-top:50px;
// text-align:center;
p{
  font-size:20px;
}
@media screen and (max-width: 768px) {
  border-radius:5%;
  width:90%;
  margin:50px auto;
  p{
    font-size:19px;
  }
 }
`

const TechSkills = styled.div`
display:flex;
flex-direction:column;
width:40%;
@media screen and (max-width: 768px) {
  width:90%;
 }
`
const TechHeading = styled.div`
h1{
  font-size:30px;
  font-weight:bold;
  color:black;
  text-align:center;
}
`
const Tech = styled.div`
display:flex;
margin-left:20%;
margin-right:20%;
flex-wrap:wrap;
gap: 0 10px;
// justify-content:center;
p{
  font-size:20px;
  background-color: #000807;
  padding:10px;
  margin-bottom:0px;
}
`

export default Skills
