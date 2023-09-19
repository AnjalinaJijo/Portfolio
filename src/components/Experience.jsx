import React from 'react'
import styled from 'styled-components';

const Experience = () => {
  return (
    <Container id='Experience'>
      <Exp>
       <Heading>EXPERIENCE</Heading>


        <Card>
          <CardText>
            <p style={{fontSize:'40px',fontWeight:'bold',marginTop:'50px',textAlign:'left'}}>Software Intern<br />
            <span style={{fontSize:'20px'}}>Business Web Solutions</span><span>  <h6 style={{marginTop:'10px',marginBottom:'8px',fontSize:'15px'}}>Remote, India</h6><h6 style={{marginTop:'10px',marginBottom:'1px',fontSize:'15px'}}>October 2022 to December 2022</h6></span>
            </p>
            <Skills>
            <Tech>
              <p>React</p>
              <p>Redux</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Jira</p>
              <p>Git</p>
              <p>Agile</p>
            </Tech>
            </Skills>
            <p style={{fontSize:'25px',textAlign:'left'}}> I made significant contributions to the front-end development of an Employee Management Software using React and Redux.
              Primary responsibilities included  design and implement various front-end components that included creating interactive user interfaces and ensuring a consistent and aesthetically pleasing design.</p>
            <p style={{fontSize:'25px',textAlign:'left'}}> I used Git to manage the source code, allowing for seamless collaboration with team members. Throughout the internship, agile methodologies, particularly Scrum was used to monitor project progress closely. </p>

            
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
// gap:20px;
// flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;

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
width:50%;
display:flex;
// text-justify:auto;
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
// width:30%;
max-width:30%;

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
