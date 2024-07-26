import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <Container id='Experience'>
      <Heading>Experience</Heading>

      {/* Founder Experience */}
      <Card>
        <CardContent>
          <Role>
            <RoleTitle>Founder</RoleTitle>
            <CompanyName><a href="https://budgetbrainy.com" target="_blank" rel="noopener noreferrer">BudgetBrainy</a></CompanyName>
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
            As the founder of <a href="https://budgetbrainy.com" target="_blank" rel="noopener noreferrer">BudgetBrainy</a>, I have led the development and growth of a comprehensive budgeting application. Responsibilities included designing and implementing core features, integrating third-party services like Stripe and Supabase, and ensuring a seamless user experience. Focused on building scalable and maintainable code while guiding a small team of developers and collaborating with stakeholders.
          </Description>
          <ViewButton href="https://budgetbrainy.com" target="_blank" rel="noopener noreferrer">View Project</ViewButton>
        </CardContent>
        <CardImg>
          <img src="./images/Budgetbrainy.png" alt="BudgetBrainy" />
        </CardImg>
      </Card>

      {/* Previous Experience */}
      <Card>
        <CardContent>
          <Role>
            <RoleTitle>Software Intern</RoleTitle>
            <CompanyName>Business Web Solutions</CompanyName>
            <Dates>October 2022 - December 2022</Dates>
          </Role>
          <TechStacks>
            <TechStack>React</TechStack>
            <TechStack>Redux</TechStack>
            <TechStack>JavaScript</TechStack>
            <TechStack>HTML</TechStack>
            <TechStack>CSS</TechStack>
            <TechStack>Jira</TechStack>
            <TechStack>Git</TechStack>
            <TechStack>Agile</TechStack>
          </TechStacks>
          <Description>
            I made significant contributions to the front-end development of an Employee Management Software using React and Redux. Primary responsibilities included designing and implementing various front-end components, creating interactive user interfaces, and ensuring a consistent and aesthetically pleasing design.
          </Description>
          <Description>
            I used Git to manage the source code, allowing for seamless collaboration with team members. Throughout the internship, agile methodologies, particularly Scrum, were used to monitor project progress closely.
          </Description>
        </CardContent>
        <CardImg>
          <img src="./images/girl.png" alt="Internship Experience" />
        </CardImg>
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
  font-size: 3rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: bold;
  color: #007acc;
  position: relative;
  text-align: center;
  
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 50%;
    height: 3px;
    background-color: #007acc;
    transform: translateX(-50%);
  }
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
  font-size: 2rem;
  font-weight: bold;
  color: #007acc;
  margin: 0;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #555;
  margin: 0;
  
  a {
    color: #007acc;
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
    color: #007acc;
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
  background-color: #007acc;
  color: #fff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;

const Skill = styled.div`
  background-color: #007acc;
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
  background-color: #007acc;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005a9c;
  }
`;

export default Experience;
