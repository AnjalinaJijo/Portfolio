// import React from 'react';
// import styled from 'styled-components';

// const Experience = () => {
//   return (
//     <Container id='Experience'>
//       <Heading>Experience</Heading>

//       {/* Founder Experience */}
//       <Card>
//         <CardImg>
//           <img src="./images/Budgetbrainy.png" alt="BudgetBrainy" />
//         </CardImg>
//         <CardContent>
//           <Role>
//             <RoleTitle>Founder and Developer</RoleTitle>
//             <CompanyName>BudgetBrainy</CompanyName>
//             <Dates>July 2023 - Present</Dates>
//           </Role>
//           <TechStacks>
//             <TechStack>Next.js</TechStack>
//             <TechStack>Supabase</TechStack>
//             <TechStack>Stripe</TechStack>
//             <TechStack>Docker</TechStack>
//             <TechStack>Tailwind CSS</TechStack>
//             <TechStack>Git</TechStack>
//             <TechStack>Vercel</TechStack>
//             <TechStack>Cypress</TechStack>
//             <TechStack>Jest</TechStack>
//           </TechStacks>
//           <Description>
//             As the founder of BudgetBrainy, I led the development of a budgeting application, overseeing all stages of the SDLC. I designed core features, integrated Stripe and Supabase, and ensured a smooth user experience with a focus on scalable and maintainable code.
//           </Description>
//           <ViewButton href="https://budgetbrainy.com" target="_blank" rel="noopener noreferrer">View Site</ViewButton>
//         </CardContent>
//       </Card>

//       {/* Previous Experience */}
//       <Card>
//         <CardImg>
//           <img src="./images/girl.png" alt="Internship Experience" />
//         </CardImg>
//         <CardContent>
//           <Role>
//             <RoleTitle>Software Intern</RoleTitle>
//             <CompanyName>Business Web Solutions</CompanyName>
//             <Dates>October 2022 - December 2022</Dates>
//           </Role>
//           <TechStacks>
//             <TechStack>React</TechStack>
//             <TechStack>JavaScript</TechStack>
//             <TechStack>HTML</TechStack>
//             <TechStack>CSS</TechStack>
//             <TechStack>Jira</TechStack>
//             <TechStack>Git</TechStack>
//             <TechStack>Agile</TechStack>
//           </TechStacks>
//           <Description>
//             Developed a web application for employee management using HTML, CSS, JavaScript, and React.js in an agile environment. Managed source code with Git for efficient collaboration, and contributed to debugging and testing to enhance functionality and user experience.
//           </Description>
//         </CardContent>
//       </Card>
//     </Container>
//   )
// }

// const Container = styled.div`
//   width: 100%;
//   padding: 80px 0;
//   background-color: #f4f4f9;
//   color: #333;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Heading = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 40px;
//   text-transform: uppercase;
//   font-weight: bold;
//   color: black;
//   text-align: center;
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 12px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin: 20px 0;
//   padding: 20px;
//   width: 90%;
//   max-width: 1200px;
//   position: relative;

//   @media (max-width: 1100px) {
//     flex-direction: column;
//   }
// `;

// const CardContent = styled.div`
//   flex: 2;
//   padding: 20px;
// `;

// const Role = styled.div`
//   margin-bottom: 20px;
// `;

// const RoleTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   color: black;
//   margin: 0;
// `;

// const CompanyName = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: #555;
//   margin: 0;
  
//   a {
//     color: #7c4dff;
//     text-decoration: none;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Dates = styled.p`
//   font-size: 1rem;
//   color: #777;
//   margin: 5px 0;
// `;

// const Description = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.6;
//   color: #333;
//   margin: 10px 0;
  
//   a {
//     color: #7c4dff;
//     text-decoration: none;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const TechStacks = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const TechStack = styled.div`
//   background-color: #7c4dff;
//   color: #fff;
//   padding: 8px 15px;
//   border-radius: 20px;
//   font-size: 0.9rem;
// `;

// const CardImg = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     max-width: 100%;
//     height: auto;
//     border-radius: 8px;
//   }

//   @media (max-width: 1100px) {
//     margin-top: 20px;
//   }
// `;

// const ViewButton = styled.a`
//   display: inline-block;
//   margin-top: 20px;
//   padding: 10px 20px;
//   background-color: #7c4dff;
//   color: #fff;
//   font-size: 1rem;
//   border-radius: 5px;
//   text-decoration: none;
//   text-align: center;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #005a9c;
//   }
// `;

// export default Experience;
import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <Container id='Experience'>
      <Heading>Experience</Heading>

      {/* Founder Experience */}
      <Card>
        <CardImg>
          <img src="./images/Budgetbrainy.png" alt="BudgetBrainy" />
        </CardImg>
        <CardContent>
          <Role>
            <RoleTitle>Founder and Developer</RoleTitle>
            <CompanyName>BudgetBrainy</CompanyName>
            <Dates>July 2023 - Present</Dates>
          </Role>
          <TechStacks>
            <TechStack>Next.js</TechStack>
            <TechStack>Supabase</TechStack>
            <TechStack>Stripe</TechStack>
            <TechStack>Docker</TechStack>
            <TechStack>Tailwind CSS</TechStack>
            <TechStack>Git</TechStack>
            <TechStack>Vercel</TechStack>
            <TechStack>Cypress</TechStack>
            <TechStack>Jest</TechStack>
          </TechStacks>
          <Description>
            As the founder of BudgetBrainy, I led the development of a budgeting application, overseeing all stages of the SDLC. I designed core features, integrated Stripe and Supabase, and ensured a smooth user experience with a focus on scalable and maintainable code.
          </Description>
          <ViewButton href="https://budgetbrainy.com" target="_blank" rel="noopener noreferrer">View Site</ViewButton>
        </CardContent>
      </Card>

      {/* Previous Experience */}
      <Card>
        <CardImg>
          <img src="./images/girl.png" alt="Internship Experience" />
        </CardImg>
        <CardContent>
          <Role>
            <RoleTitle>Software Intern</RoleTitle>
            <CompanyName>Business Web Solutions</CompanyName>
            <Dates>October 2022 - December 2022</Dates>
          </Role>
          <TechStacks>
            <TechStack>React</TechStack>
            <TechStack>JavaScript</TechStack>
            <TechStack>HTML</TechStack>
            <TechStack>CSS</TechStack>
            <TechStack>Jira</TechStack>
            <TechStack>Git</TechStack>
            <TechStack>Agile</TechStack>
          </TechStacks>
          <Description>
            Developed a web application for employee management using HTML, CSS, JavaScript, and React.js in an agile environment. Managed source code with Git for efficient collaboration, and contributed to debugging and testing to enhance functionality and user experience.
          </Description>
        </CardContent>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 80px 0;
  background-color: #f4f4f9;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: bold;
  color: #222;
  text-align: center;
  position: relative;
  // &:before {
  //   content: '';
  //   position: absolute;
  //   width: 60px;
  //   height: 4px;
  //   background-color: #7c4dff;
  //   bottom: -10px;
  //   left: 50%;
  //   transform: translateX(-50%);
  // }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
  width: 90%;
  max-width: 1200px;
  position: relative;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  flex: 2;
  padding: 20px;
`;

const Role = styled.div`
  margin-bottom: 20px;
`;

const RoleTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #222;
  margin: 0;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #555;
  margin: 0;

  a {
    color: #7c4dff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Dates = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin: 10px 0;

  a {
    color: #7c4dff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TechStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  background-color: #7c4dff;
  color: #fff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const CardImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 1100px) {
    margin-top: 20px;
  }
`;

const ViewButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #7c4dff;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:  #5e35b1;
  }
`;

export default Experience;
