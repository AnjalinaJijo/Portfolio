import React from 'react'
import styled from 'styled-components';


const Skills = () => {
  return (
    <Container>
      <Wrap>
      <h1 style={{marginTop:'10%',marginBottom:'6%',fontSize:'50px',
        textDecoration:'underline',textDecorationColor:'#9395d3',  
        textDecorationStyle:'double'}}>SKILLS</h1>
      </Wrap>
      <Tech>
              <p>React</p>
              <p>Redux</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>Jira</p>
              <p>Git</p>
              <p>RESTful APIs</p>
              <p>Agile</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Bootstarp</p>
              <p>JavaScript</p>
              <p>Firebase</p>
              <p>Visual Studio</p>
              <p>Command Prompt</p>
              <p>Eclipse</p>
              <p>Java</p>
              <p>Python</p>
              <p>Linux</p>
      </Tech>

      
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

const Wrap = styled.div `
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

const Tech = styled.div`
display:flex;
margin-left:20%;
margin-right:20%;
flex-wrap:wrap;
gap: 0 10px;
justify-content:center;
p{
  font-size:30px;
  border:1px solid #9395d3;
  background-color: #000807;
  padding:10px;
  margin-bottom:0px;
}
`

export default Skills
