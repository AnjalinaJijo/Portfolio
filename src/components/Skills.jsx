import React, { useEffect,useRef } from "react";
import styled from "styled-components";

import { debounce } from "lodash";

import {
  FaReact,
  FaNode,
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
  SiPostman,
  SiMysql,
  SiJest,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiFirebase,
  SiExpress,
  SiVisualstudiocode,
  SiSupabase,
  SiCypress,
  SiCloudflare,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";

const Skills = () => {

  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".anim-bg");
    const aboutSection = aboutRef.current;

    const animateSequentially = (index) => {
      if (index >= elements.length) return;

      const element = elements[index];
      element.style.setProperty("--bg-width", "100%");
      element.setAttribute("data-animated", "true");

      setTimeout(() => {
        animateSequentially(index + 1);
      }, 500); // 1000ms for animation duration + 500ms pause
    };

    const handleScroll = debounce(() => {
      const rect = aboutSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        // Start animation if the section is in view
        animateSequentially(0);
        window.removeEventListener("scroll", handleScroll); // Remove listener after animation starts
      } else {
        // Reset animation if the section is out of view
        elements.forEach((element) => {
          const isAnimated = element.getAttribute("data-animated") === "true";
          if (isAnimated) {
            element.style.setProperty("--bg-width", "0%");
            element.removeAttribute("data-animated");
          }
        });
      }
    },20) // Debounce delay in milliseconds

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    // Initial check in case the section is already in view
    handleScroll();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Container id="About">
      <Wrapper>
        <About ref={aboutRef}>
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
            and a minor in{" "}  <HighlightedText className="anim-bg" color="seagreen">computer</HighlightedText><HighlightedText className="anim-bg" color="seagreen"> science
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
              <TbApi size={40} color="#68A063" />
              <p>RESTful APIs</p>
            </SkillCard>
          </Tech>
        </Category>
        <Category>
          <CategoryTitle>BACK END DEVELOPMENT</CategoryTitle>
          <Tech>
            <SkillCard>
              <FaNode size={40} color="#68A063" />
              <p>Node.js</p>
            </SkillCard>
            <SkillCard>
              <SiExpress size={40} color="#68A063" />
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
            <SkillCard>
              <SiSupabase size={40} color="#3ECF8E" />
              <p>Supabase</p>
            </SkillCard>
            <SkillCard>
              <SiFirebase size={40} color="#FFCA28" />
              <p>Firebase</p>
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
              <SiPostman size={40} color="#FF6C37" />
              <p>Postman</p>
            </SkillCard>
          </Tech>
        </Category>
        <Category>
          <CategoryTitle>DEPLOYMENT</CategoryTitle>
          <Tech>
            <SkillCard>
              <IoLogoVercel size={40} color="#000000" />
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
    width: var(--bg-width, 0%);//0% is the default
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
