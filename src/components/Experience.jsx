import React from 'react'
import styled from 'styled-components';

const Experience = () => {
  return (
    <Container>
      <Exp>
       <h1 style={{marginTop:'10%',marginBottom:'6%',fontSize:'50px',
        textDecoration:'underline',textDecorationColor:'#9395d3',  
        textDecorationStyle:'double'}}>EXPERIENCE</h1>


        <Card>
          <CardText>
            <p style={{fontSize:'20px',marginTop:'1px',textAlign:'left'}}>Business Web Solutions <br />
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
            <Button>View Project</Button>
            <p style={{fontSize:'20px',textAlign:'left'}}> 1 year internship experience in agile environment. Collaborated with highly skilled and passionate engineers to develop 
            frontend using react and redux.Also got the chance to help the backend team using express and NodeJS.
            </p>
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
text-justify:auto;
flex-direction:column;

@media (max-width: 900px) {
  
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

const Button = styled.button`
// margin:10px auto;
width:150px;
height:50px;
pading:5px;
margin-top:15px;
// background-color:#9395d3;
background-color: #a2a3bb;
font-weight:bold;
font-size:20px;
// border-radius:10%;
&:hover {
    transform: scale(1.05);
    background-color:#b3b7ee;
}
`

export default Experience
