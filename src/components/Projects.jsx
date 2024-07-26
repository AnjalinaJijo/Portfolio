import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Container id='Projects'>
      <Heading>Highlighted Projects</Heading>
      <ProjectWrapper>
        <ProjectCard>
          <CardImage src="./images/NDH.png" alt="National Disaster Hub" />
          <CardContent>
            <ProjectTitle>National Disaster Hub</ProjectTitle>
            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>Redux</TechTag>
              <TechTag>Express</TechTag>
              <TechTag>NodeJS</TechTag>
              <TechTag>MongoDB</TechTag>
            </TechStack>
            <ProjectDescription>
              A MERN stack application enabling disaster survivors to check in and update their safety status. This tool provides a critical service during emergencies and assists agencies in tracking and managing safety.
            </ProjectDescription>
            <ButtonWrapper>
              <ViewButton to='https://national-disaster-hub-ndh.onrender.com' target="_blank">
                View Project
              </ViewButton>
            </ButtonWrapper>
          </CardContent>
        </ProjectCard>

        <ProjectCard>
          <CardImage src="./images/travel_companion.png" alt="Travel Companion" />
          <CardContent>
            <ProjectTitle>Travel Companion</ProjectTitle>
            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>Redux</TechTag>
              <TechTag>Material UI</TechTag>
            </TechStack>
            <ProjectDescription>
              A dynamic travel website for discovering hotels, restaurants, and attractions. Integrated with Rapid API for real-time data and user-friendly search and filtering options.
            </ProjectDescription>
            <ButtonWrapper>
              <ViewButton to='https://travel-companion-2qh8.onrender.com' target="_blank">
                View Project
              </ViewButton>
            </ButtonWrapper>
          </CardContent>
        </ProjectCard>
      </ProjectWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 80px 0;
  background-color: #fafafa; /* Very light gray background */
  color: #333; /* Dark text color for contrast */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 40px;
  color: black;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 90%;
`;

const ProjectCard = styled.div`
  background-color: #ffffff; /* White background for cards */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 4px solid #7c4dff; /* Soft violet border */
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 260px;
  justify-content: space-between;
`;

const ProjectTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #7c4dff; /* Soft violet for title */
  font-weight: 600;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const TechTag = styled.span`
  font-size: 0.9rem;
  background-color: #e9e9e9; /* Light gray background for tags */
  color: #7c4dff; /* Soft violet text color for tags */
  padding: 6px 12px;
  border-radius: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #333; /* Dark gray text color */
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  padding: 12px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #7c4dff; /* Soft violet button */
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #5e35b1; /* Darker violet for hover */
    transform: scale(1.05);
  }
`;

export default Projects;



// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Projects = () => {
//   return (
//     <Container id='Projects'>
//       <Heading>PROJECTS</Heading>

//       <ProjectGrid>
//         <ProjectCard>
//           <CardImage>
//             <Link to='https://national-disaster-hub-ndh.onrender.com' target="_blank">
//               <img src="./images/NDH.png" alt="National Disaster Hub" />
//             </Link>
//           </CardImage>
//           <CardContent>
//             <ProjectTitle>MERN Stack | Full Stack</ProjectTitle>
//             <ProjectSubtitle>National Disaster Hub</ProjectSubtitle>
//             <TechStack>
//               <TechTag>React</TechTag>
//               <TechTag>Redux</TechTag>
//               <TechTag>Express</TechTag>
//               <TechTag>NodeJS</TechTag>
//               <TechTag>MongoDB</TechTag>
//             </TechStack>
//             <ProjectDescription>
//               A MERN stack application that allows disaster survivors to check in so that their dear ones know that they are safe. Enables individuals to quickly check the safety status of their loved ones.
//             </ProjectDescription>
//             <LinkButton to='https://national-disaster-hub-ndh.onrender.com' target="_blank">
//               View Project
//             </LinkButton>
//           </CardContent>
//         </ProjectCard>

//         <ProjectCard>
//           <CardImage>
//             <Link to='https://travel-companion-2qh8.onrender.com' target="_blank">
//               <img src="./images/travel_companion.png" alt="Travel Companion" />
//             </Link>
//           </CardImage>
//           <CardContent>
//             <ProjectTitle>Travel Companion</ProjectTitle>
//             <TechStack>
//               <TechTag>React</TechTag>
//               <TechTag>Redux</TechTag>
//               <TechTag>Material UI</TechTag>
//             </TechStack>
//             <ProjectDescription>
//               A travel website helping users find hotels, restaurants, and attractions. Integrated Rapid API for accurate information and implemented search and filtering options.
//             </ProjectDescription>
//             <LinkButton to='https://travel-companion-2qh8.onrender.com' target="_blank">
//               View Project
//             </LinkButton>
//           </CardContent>
//         </ProjectCard>
//       </ProjectGrid>
//     </Container>
//   )
// }

// const Container = styled.div`
//   width: 100%;
//   padding: 60px 0;
//   background-color: #f9f9f9;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const Heading = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 40px;
//   color: #333;
//   text-align: center;
//   font-weight: 700;
//   text-transform: uppercase;
//   position: relative;
//   &:before {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -10px;
//     width: 60px;
//     height: 5px;
//     background: #007bff;
//     border-radius: 5px;
//   }
// `

// const ProjectGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
//   width: 90%;
//   max-width: 1200px;
// `

// const ProjectCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 8px 16px rgba(0,0,0,0.1);
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 12px 24px rgba(0,0,0,0.2);
//   }
// `

// const CardImage = styled.div`
//   flex: 1;
//   img {
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
//     transition: transform 0.3s ease;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }
// `

// const CardContent = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `

// const ProjectTitle = styled.h2`
//   font-size: 1.6rem;
//   color: #333;
//   margin-bottom: 10px;
//   font-weight: 600;
// `

// const ProjectSubtitle = styled.h3`
//   font-size: 1.3rem;
//   color: #666;
//   margin-bottom: 15px;
// `

// const TechStack = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-bottom: 20px;
// `

// const TechTag = styled.span`
//   font-size: 0.9rem;
//   background-color: #007bff;
//   color: #fff;
//   padding: 5px 10px;
//   border-radius: 5px;
// `

// const ProjectDescription = styled.p`
//   font-size: 1rem;
//   color: #333;
//   line-height: 1.6;
//   margin-bottom: 20px;
// `

// const LinkButton = styled(Link)`
//   display: inline-block;
//   padding: 10px 20px;
//   font-size: 1rem;
//   color: #fff;
//   background-color: #007bff;
//   border-radius: 5px;
//   text-decoration: none;
//   text-align: center;
//   font-weight: 600;

//   &:hover {
//     background-color: #0056b3;
//     transform: scale(1.05);
//   }
// `

// export default Projects



// import { Description } from '@mui/icons-material';
// import React from 'react'
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Projects = () => {
//   return (
//     <Container id='Projects'>
//       <Project>
//       <Heading>PROJECTS</Heading>
//         <Card >
//           <CardText>
//             <p style={{marginTop:'50px',fontSize:'20px',textAlign:'left'}}>MERN Stack | Full Stack <br />
//             <span style={{fontSize:'40px',fontWeight:'bold'}}>National Disaster Hub</span>
//             </p>
//             <Skills>
//             <Tech>
//               <p>React</p>
//               <p>Redux</p>
//               <p>Express</p>
//               <p>NodeJS</p>
//               <p>MongoDB</p>
//             </Tech>
//             </Skills>
            
//             <View to='https://national-disaster-hub-ndh.onrender.com' target="_blank">
//             <Button>View Project</Button>
//             </View>
//             <Describe > 
//            <p> A MERN stack application that allows disaster survivors to check in so that their
//               dear ones know that they are safe.
//               Anyone can access this site to see if their dear ones are checked in and are safe.
//               The last tracked location of the checked person is obtained and stored. </p>
//       <p>It enables individuals to quickly check the safety status of their loved ones, reducing anxiety and uncertainty.
//       This is a valuable tool for emergency management agencies to manage and track safe individuals efficiently.
//               Successfully developed a web application that serves a critical purpose during disasters.</p>
//             </Describe>
//           </CardText>
//           <CardImg>
//           <Link to='https://national-disaster-hub-ndh.onrender.com' target="_blank">
//           <img src="./images/NDH.png" style={{marginTop:'100px'}}/>
//           </Link>
//           </CardImg>
//         </Card>

//         <Card>
//           <CardText>
//             <p style={{fontSize:'50px',marginTop:'50px',textAlign:'left',fontWeight:'bold'}}>
//                   Travel Companion
//             </p>
//             <Skills>
//             <Tech>
//               <p>React</p>
//               <p>Redux</p>
//               <p>Material UI</p>
//             </Tech>
//             </Skills>
            
//             <View to='https://travel-companion-2qh8.onrender.com' target="_blank">
//             <Button>View Project</Button>
         
//             </View>
//             <Describe>

//             <p>A travel website aimed at helping users find hotels, restaurants, and attractions based on specified location.
//             Integrated Rapid API to fetch data on hotels, restaurants, and attractions in the specified location, ensuring current and accurate information.</p>
//            <p>Also implemented search and filtering options, allowing users to narrow down their choices based on preferences such as rating, cuisine, or number of adults.
//             Provided in-depth information on each listing, including descriptions, ratings, photos, and websites.</p>
   
//             </Describe>
//           </CardText>
//           <CardImg>
//           <Link to='https://travel-companion-2qh8.onrender.com' target="_blank">
//           <img src="./images/travel_companion.png" style={{marginTop:'110px'}}/>
//           </Link>
//           </CardImg>
//         </Card>

//       </Project>
      
//     </Container>
//   )
// }

// const Container = styled.div `
// // background-color:#a2a3bb;
// height:auto;
// width:100vw;
// color:#fbf9ff;
// display:flex;
// color:'9395d3'
// `
// const Project = styled.div `
// // background-color:#a2a3bb;
// height:auto;
// width:100vw;
// color:#000807;
// display:flex;
// // gap:150px;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// text-align:center;
// `
// const Heading = styled.h1`
// margin-top:10%;
// margin-bottom:6%;
// font-size:50px;
// text-decoration:underline;
// text-decoration-color:#9395d3;  
// text-decoration-style:double;
// @media (max-width: 900px) {
//   font-size:40px;
// }
// `

// const Card = styled.div`
// display:flex;
// gap:30px;
// justify-content:center;
// // align-items:center;

// @media (max-width: 1100px) {
//   flex-direction:column;
//    align-items:center;
//    gap:0px;
// }
// `
// const CardText = styled.div`
// // background-color:#b3b7ee;
// min-height:400px;
// max-width:50%;
// display:flex;
// flex-direction:column;
// // flex-wrap:wrap;
// @media (max-width: 1100px) {
//   max-width:80%;
// }
// `
// const Describe = styled.p`
// font-size:25px;
// text-align:left;
// text-justify:inter-word;

// `

// const CardImg = styled.div`
// display:flex;
// img{
//   width:500px;
//   height:300px;
//   border-radius:10%;
//   border: 5px solid black;
//   padding:5px;
//   // marginTop:100px;

// }

// &:hover {
//   img{
//     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//     transform: scale(1.05);
//     border-color: rgba(249, 249, 249, 0.8);
//   }

// }
// @media (max-width: 900px) {
//   img{
//     height:250px;
//     width:400px;
//   }

// }

// `
// const Skills = styled.div`
// display:flex;
// display: inline-flex;
// `
// const Tech = styled.div`
// display:flex;
// flex-wrap:wrap;
// gap:0 10px;
// // justify-content:start;
// p{
//   font-size:20px;
//   background-color: #9395d3;
//   padding:5px;
//   margin-bottom:0px;
// }
// `


// const View = styled(Link)`
// margin-top:20px;
// width:150px;
// height:50px;
// // background-color: #a2a3bb;
// font-weight:bold;
// font-size:20px;
// border-radius:5%;
// &:hover {
//     transform: scale(1.05);
//     background-color:#b3b7ee;
// }
// `
// const Button = styled.button`
// width:100%;
// height:100%;
// pading:5px;
// background-color: #a2a3bb;
// font-weight:bold;
// font-size:20px;
// border-radius:5%;
// // &:hover {
// //     transform: scale(1.05);
// //     background-color:#b3b7ee;
// // }
// `

// export default Projects
