import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaStripe,
  FaJira,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJest,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiFirebase,
  SiVisualstudiocode,
  SiSupabase,
  SiCypress,
  SiCloudflare,
} from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".anim-bg");

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInView) {
          const delay = index * 500;
          element.style.setProperty("--bg-width", "100%");
          element.style.setProperty("--animation-delay", `${delay}ms`);
        } else {
          element.style.setProperty("--bg-width", "0%");
          element.style.setProperty("--animation-delay", "0ms");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container id="About">
      <Wrapper>
        <About>
          <Wrap>
            <Heading>ABOUT ME</Heading>
          </Wrap>
          <p>
            I'm{" "}
            <HighlightedText className="anim-bg" color="violet">
              Anjalina
            </HighlightedText>
            , a{" "}
            <HighlightedText className="anim-bg" color="blue">
              Web Developer
            </HighlightedText>{" "}
            and the founder of{" "}
            <HighlightedText className="anim-bg" color="yellow">
              BudgetBrainy
            </HighlightedText>
            , a smart solution for effortless budget management. With a
            bachelor's in{" "}
            <HighlightedText className="anim-bg" color="salmon">
              electronics{" "}
            </HighlightedText>{" "}
            & communication{" "}
            <HighlightedText className="anim-bg" color="violet">
              engineering{" "}
            </HighlightedText>{" "}
            and a{" "}
            <HighlightedText className="anim-bg" color="seagreen">
              minor in computer science
            </HighlightedText>
            , I love combining technology and design to build intuitive web
            applications.
          </p>

          <p>
            I'm{" "}
            <HighlightedText className="anim-bg" color="violet">
              friendly
            </HighlightedText>{" "}
            and{" "}
            <HighlightedText className="anim-bg" color="salmon">
              collaborative
            </HighlightedText>
            , always excited to work with others. Let's connect and create
            something amazing together!
          </p>
          <p>
            I'm currently looking for a new role as a developer.{" "}
            <HighlightedText className="anim-bg" color="blue">
              Hire me?
            </HighlightedText>
          </p>
        </About>
      </Wrapper>
      <TechSkills>
        <TechHeading>
          <h1>MY SKILLS</h1>
        </TechHeading>
        <Category>
          <CategoryTitle>FRONT END DEVELOPMENT</CategoryTitle>
          <Tech>
            <SkillCard>
              <SiNextdotjs size={40} color="#000000" />
              <p>Next.js</p>
            </SkillCard>
            <SkillCard>
              <FaReact size={40} color="#61DBFB" />
              <p>React.js</p>
            </SkillCard>
            <SkillCard>
              <SiRedux size={40} color="#764ABC" />
              <p>Redux</p>
            </SkillCard>
            <SkillCard>
              <FaJsSquare size={40} color="#F0DB4F" />
              <p>JavaScript</p>
            </SkillCard>
            <SkillCard>
              <SiBootstrap size={40} color="#563D7C" />
              <p>Bootstrap</p>
            </SkillCard>
            <SkillCard>
              <FaHtml5 size={40} color="#E34C26" />
              <p>HTML</p>
            </SkillCard>
            <SkillCard>
              <FaCss3Alt size={40} color="#264DE4" />
              <p>CSS</p>
            </SkillCard>
            <SkillCard>
              <SiTailwindcss size={40} color="#38B2AC" />
              <p>Tailwind CSS</p>
            </SkillCard>
            <SkillCard>
              <FaNodeJs size={40} color="#68A063" />
              <p>RESTful APIs</p>
            </SkillCard>
          </Tech>
        </Category>
        <Category>
          <CategoryTitle>BACK END DEVELOPMENT</CategoryTitle>
          <Tech>
            <SkillCard>
              <FaNodeJs size={40} color="#68A063" />
              <p>Node.js</p>
            </SkillCard>
            <SkillCard>
              <FaNodeJs size={40} color="#68A063" />
              <p>Express</p>
            </SkillCard>
            <SkillCard>
              <SiMongodb size={40} color="#4DB33D" />
              <p>MongoDB</p>
            </SkillCard>
            <SkillCard>
              <SiMysql size={40} color="#00758F" />
              <p>MySQL</p>
            </SkillCard>
            <SkillCard>
              <SiPostgresql size={40} color="#336791" />
              <p>PostgreSQL</p>
            </SkillCard>
          </Tech>
        </Category>
        <Category>
          <CategoryTitle>PROGRAMMING LANGUAGES</CategoryTitle>
          <Tech>
            <SkillCard>
              <FaJsSquare size={40} color="#F0DB4F" />
              <p>JavaScript</p>
            </SkillCard>
            <SkillCard>
              <FaPython size={40} color="#306998" />
              <p>Python</p>
            </SkillCard>
          </Tech>
        </Category>
        <Category>
          <CategoryTitle>TESTING</CategoryTitle>
          <Tech>
            <SkillCard>
              <SiCypress size={40} color="#17202C" />
              <p>Cypress</p>
            </SkillCard>
            <SkillCard>
              <SiJest size={40} color="#C21325" />
              <p>Jest</p>
            </SkillCard>
            <SkillCard>
              <FaNodeJs size={40} color="#FF6C37" />
              <p>Postman</p>
            </SkillCard>
          </Tech>
        </Category>
        <Category>
          <CategoryTitle>DEPLOYMENT</CategoryTitle>
          <Tech>
            <SkillCard>
              <FaNodeJs size={40} color="#000000" />
              <p>Vercel</p>
            </SkillCard>
            <SkillCard>
              <FaDocker size={40} color="#0db7ed" />
              <p>Docker</p>
            </SkillCard>
          </Tech>
        </Category>
        <Category>
          <CategoryTitle>OTHER</CategoryTitle>
          <Tech>
            <SkillCard>
              <SiSupabase size={40} color="#3ECF8E" />
              <p>Supabase</p>
            </SkillCard>
            <SkillCard>
              <SiCloudflare size={40} color="#F38020" />
              <p>Cloudflare</p>
            </SkillCard>
            <SkillCard>
              <FaStripe size={40} color="#6772E5" />
              <p>Stripe</p>
            </SkillCard>
            <SkillCard>
              <SiVisualstudiocode size={40} color="#007ACC" />
              <p>Visual Studio</p>
            </SkillCard>
            <SkillCard>
              <FaJira size={40} color="#0052CC" />
              <p>JIRA</p>
            </SkillCard>
            <SkillCard>
              <FaGitAlt size={40} color="#F05032" />
              <p>Git</p>
            </SkillCard>
            <SkillCard>
              <FaGithub size={40} color="#181717" />
              <p>GitHub</p>
            </SkillCard>
          </Tech>
        </Category>
      </TechSkills>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  height: auto;
  width: 100vw;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: auto;
  width: 100vw;
  color: #fbf9ff;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top:70px;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const About = styled.div`
  width: 60%;
  padding: 20px;
  color:#0f172a;
   p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TechSkills = styled.div`
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top:50px;
  padding-bottom:10px;

  @media (max-width: 768px) {
    width: 80%;
    padding: 30px;
  }
`;

const Heading = styled.h1`
  color: #000000;
  font-size: 36px;
  text-align: center;
  padding-bottom: 20px;
`;

const TechHeading = styled.div`
  text-align: center;
  h1 {
    font-size: 36px;
    color: #000000;
    margin-bottom: 20px;
  }
`;

const Category = styled.div`
  margin-bottom: 30px;
`;

const CategoryTitle = styled.h2`
  font-size: 19px;
  color: #000000;
  margin-bottom: 20px;
`;

const Tech = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #000000;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const HighlightedText = styled.span`
  position: relative;
  overflow: hidden; /* Ensure the pseudo-element doesn’t overflow */
  line-height: 1; /* Ensure line-height matches parent text */
  vertical-align: baseline; /* Ensure vertical alignment with other text */

  &::before {
    content: "";
    position: absolute;
    width: var(--bg-width, 0%);
    height: 100%;
    background: ${({ color }) => color || "violet"}; /* Use the color prop */
    opacity: 0.2; /* Adjust opacity as needed */
    transition: width 1s ease-in-out;
    transform: translateY(0); /* Center the pseudo-element vertically */
    top: 0;
    left: 0;
  }
`;

export default Skills;

// import React, { useEffect } from "react";
// import styled from "styled-components";

// const Skills = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll(".anim-bg");

//       elements.forEach((element, index) => {
//         const rect = element.getBoundingClientRect();
//         const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

//         if (isInView) {
//           // Apply a delay based on the element's index
//           const delay = index * 500; // Delay each element by 0.5 seconds
//           element.style.setProperty("--bg-width", "100%");
//           element.style.setProperty("--animation-delay", `${delay}ms`);
//         } else {
//           element.style.setProperty("--bg-width", "0%");
//           element.style.setProperty("--animation-delay", "0ms");
//         }
//       });
//     };

//     // Initial check
//     handleScroll();

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Container id="About">
//       <Wrapper>
//         <About>
//           <Wrap>
//             <Heading>ABOUT ME</Heading>
//           </Wrap>
//           <p>
//             I'm{" "}
//             <HighlightedText className="anim-bg" color="violet">
//               Anjalina
//             </HighlightedText>
//             , a{" "}
//             <HighlightedText className="anim-bg" color="blue">
//               Web Developer
//             </HighlightedText>{" "}
//             and the founder of{" "}
//             <HighlightedText className="anim-bg" color="yellow">
//               BudgetBrainy
//             </HighlightedText>
//             , a smart solution for effortless budget management. With a
//             bachelor's in{" "}
//             <HighlightedText className="anim-bg" color="salmon">
//               electronics{" "}
//             </HighlightedText>{" "}
//             & communication{" "}
//             <HighlightedText className="anim-bg" color="violet">
//               engineering{" "}
//             </HighlightedText>{" "}
//             and a{" "}
//             <HighlightedText className="anim-bg" color="seagreen">
//               minor in computer science
//             </HighlightedText>
//             , I love combining technology and design to build intuitive web
//             applications.
//           </p>

//           <p>
//             I'm{" "}
//             <HighlightedText className="anim-bg" color="violet">
//               friendly
//             </HighlightedText>{" "}
//             and{" "}
//             <HighlightedText className="anim-bg" color="salmon">
//               collaborative
//             </HighlightedText>
//             , always excited to work with others. Let's connect and create
//             something amazing together!
//           </p>
//           <p>
//             I'm currently looking for a new role as a developer.{" "}
//             <HighlightedText className="anim-bg" color="blue">

//               Hire me?
//             </HighlightedText>
//           </p>
//         </About>
//         <TechSkills>
//           <TechHeading>
//             <h1>MY SKILLS</h1>
//           </TechHeading>
//           <Tech>
//             <p>React</p>
//             <p>Redux</p>
//             <p>Express</p>
//             <p>Node.js</p>
//             <p>MongoDB</p>
//             <p>Jira</p>
//             <p>Git</p>
//             <p>RESTful APIs</p>
//             <p>HTML</p>
//             <p>CSS</p>
//             <p>JavaScript</p>
//             <p>Bootstrap</p>
//             <p>Firebase</p>
//             <p>Visual Studio</p>
//             <p>Command Prompt</p>
//             <p>Eclipse</p>
//           </Tech>
//         </TechSkills>
//       </Wrapper>
//     </Container>
//   );
// };

// const Container = styled.div`
//   background-color: #ffffff;
//   height: auto;
//   width: 100vw;
//   color: #00000;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding-top: 30px;
//   padding-bottom: 50px;
// `;

// const Wrapper = styled.div`
//   height: auto;
//   width: 100vw;
//   color: #fbf9ff;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   padding-left:30px;
//   padding-right:30px;

//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     gap: 10px;
//   }
// `;

// const Heading = styled.h1`
//   margin-top: 10%;
//   margin-bottom: 6%;
//   font-size: 25px;

//   @media (max-width: 900px) {
//     font-size: 20px;
//   }
//   @media (max-width: 340px) {
//     font-size: 22px;
//   }
// `;

// const Wrap = styled.div`
//   height: auto;
//   // width: 50%;
//   color: #00000;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const About = styled.div`
//   min-height: 520px;
//   width: 1200px;
//   padding: 35px;
//   color: #0f172a;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;

//   p {
//     font-size: 20px;
//   }

//   @media screen and (max-width: 768px) {
//     border-radius: 5%;
//     width: 90%;
//     margin: 50px auto;
//     p {
//       font-size: 15px;
//     }
//   }
// `;

// const TechSkills = styled.div`
//   display: flex;
//   items-align: center;
//   justify-content: center;
//   flex-direction: column;
//   // width: 40%;

//   @media screen and (max-width: 768px) {
//     // width: 90%;
//   }
// `;

// const TechHeading = styled.div`
//   h1 {
//     font-size: 25px;
//     font-weight: bold;
//     color: black;
//     text-align: center;
//   }

//   @media (max-width: 900px) {
//     h1 {
//       font-size: 20px;
//     }
//   }
//   @media (max-width: 340px) {
//     h1 {
//       font-size: 22px;
//     }
//   }
// `;

// const Tech = styled.div`
//   display: flex;
//   margin-left: 20%;
//   margin-right: 20%;
//   flex-wrap: wrap;
//   gap: 0 10px;

//   p {
//     font-size: 20px;
//     background-color: #000807;
//     padding: 10px;
//     margin-bottom: 0px;
//   }
// `;

// const HighlightedText = styled.span`
//   position: relative;
//   overflow: hidden; /* Ensure the pseudo-element doesn’t overflow */
//   line-height: 1; /* Ensure line-height matches parent text */
//   vertical-align: baseline; /* Ensure vertical alignment with other text */

//   &::before {
//     content: "";
//     position: absolute;
//     width: var(--bg-width, 0%);
//     height: 100%;
//     background: ${({ color }) => color || "violet"}; /* Use the color prop */
//     opacity: 0.2; /* Adjust opacity as needed */
//     transition: width 1s ease-in-out;
//     transform: translateY(0); /* Center the pseudo-element vertically */
//     top: 0;
//     left: 0;
//   }
// `;

// export default Skills;

// import React from "react";
// import styled from "styled-components";

// const Skills = () => {
//   return (
//     <Container id="About">
//       <Wrap>
//         <Heading>ABOUT ME</Heading>
//       </Wrap>
//       <Wrapper>
//         <About>
//           {/* <h1 style={{fontSize:'20px'}}>Passionate, Quick-Learning Developer | A Life Long Learner</h1> */}
//           <p>
//             I'm Anjalina, a Web Developer and the founder of BudgetBrainy, a
//             smart solution for effortless budget management. With a bachelor's
//             in electronics & communication and a minor in computer science, I
//             love combining technology and design to build intuitive web
//             applications.
//           </p>

//           <p>
//             I'm friendly and collaborative, always excited to work with others.
//             Let's connect and create something amazing together!
//           </p>
//           <p>
//           Feel free to reach out and say hello!
//            </p>

//           {/* <p>Outside of development, I enjoy keeping up with the latest tech trends and exploring new ideas. Let's connect and explore how we can collaborate on your next project!
//         </p> */}
//           {/* <p>I am a friendly and highly collaborative person who is easy to work with.
//           Join me on this journey as I continue to evolve and create, always pushing the boundaries of
//           what's possible in the digital landscape.
//           Feel free to reach out and say hello!
//         </p> */}
//         </About>
//         <TechSkills>
//           <TechHeading>
//             <h1>MY SKILLS</h1>
//           </TechHeading>
//           <Tech>
//             <p>React</p>
//             <p>Redux</p>
//             <p>Express</p>
//             <p>Node.js</p>
//             <p>MongoDB</p>
//             <p>Jira</p>
//             <p>Git</p>
//             <p>RESTful APIs</p>
//             {/* <p>Agile</p> */}
//             <p>HTML</p>
//             <p>CSS</p>

//             <p>JavaScript</p>
//             <p>Bootstrap</p>
//             <p>Firebase</p>
//             <p>Visual Studio</p>
//             <p>Command Prompt</p>
//             <p>Eclipse</p>
//             {/* <p>Linux</p> */}
//           </Tech>
//         </TechSkills>
//       </Wrapper>
//     </Container>
//   );
// };

// const Container = styled.div`
//   // slate-900
//   background-color: #0f172a;
//   height: auto;
//   width: 100vw;
//   color: #ffffff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding-top: 30px;
//   padding-bottom: 50px;
// `;
// const Wrapper = styled.div`
//   // background-color:#000807;
//   height: auto;
//   width: 100vw;
//   color: #fbf9ff;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     gap: 30px;
//   }
// `;
// const Heading = styled.h1`
//   margin-top: 10%;
//   margin-bottom: 6%;
//   font-size: 40px;

//   @media (max-width: 900px) {
//     font-size: 30px;
//   }
//   @media (max-width: 340px) {
//     font-size: 25px;
//   }
// `;

// const Wrap = styled.div`
//   // background-color:#a2a3bb;
//   height: auto;
//   width: 50%;
//   // color:#000807;
//   color: #ffffff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   // text-align:center;
// `;
// const About = styled.div`
//   // background-color:#b3b7ee;
//   // background-color:#9395d3;
//   // border:10px solid #9395d3;
//   min-height: 520px;
//   width: 50%;
//   padding: 35px;
//   // border-radius:20%;
//   color: #ffffff;
//   // color:white;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   // justify-content: center;
//   align-items: center;
//   // margin-left: 50px;
//   // margin-top: 50px;
//   text-align:center;

//   p {
//     font-size: 20px;
//   }
//   @media screen and (max-width: 768px) {
//     border-radius: 5%;
//     width: 90%;
//     margin: 50px auto;
//     p {
//       font-size: 19px;
//     }
//   }
// `;

// const TechSkills = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 40%;
//   @media screen and (max-width: 768px) {
//     width: 90%;
//   }
// `;
// const TechHeading = styled.div`
//   h1 {
//     font-size: 30px;
//     font-weight: bold;
//     color: "#ffffff";
//     text-align: center;
//   }
// `;
// const Tech = styled.div`
//   display: flex;
//   margin-left: 20%;
//   margin-right: 20%;
//   flex-wrap: wrap;
//   gap: 0 10px;
//   // justify-content:center;
//   p {
//     font-size: 20px;
//     background-color: #000807;
//     padding: 10px;
//     margin-bottom: 0px;
//   }
// `;

// export default Skills;
