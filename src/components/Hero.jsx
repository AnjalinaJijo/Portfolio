import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";

const Hero = () => {
  const [text, setText] = useState("");
  const featureTextRef = useRef(null);
  const cursorRef = useRef(null);

  // "#fde047"
  useEffect(() => {
    const carouselText = [
      { text: "Full-stack", color: "#ec4899" },
      { text: "Front-end", color: "#a3e635" },
      { text: "Back-end", color: "#e879f9" },
    ];

    async function typeSentence(sentence, delay = 100) {
      let accumulatedText = "";
      for (const letter of sentence) {
        await waitForMs(delay);
        accumulatedText += letter;
        setText(accumulatedText); // Update the state only once per iteration
      }
    }

    function waitForMs(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function deleteSentence() {
      while (featureTextRef.current.innerHTML.length > 0) {
        await waitForMs(50);
        setText((prev) => prev.slice(0, -1));
      }
    }

    function updateFontColor(color) {
      featureTextRef.current.style.color = color;
    }

    async function carousel(carouselList) {
      let i = 0;
      while (true) {
        updateFontColor(carouselList[i].color);
        await typeSentence(carouselList[i].text);
        await waitForMs(1500);
        await deleteSentence();
        await waitForMs(500);
        i++;
        if (i >= carouselList.length) {
          i = 0;
        }
      }
    }

    carousel(carouselText);

    return () => {
      setText("");
    };
  }, []);

  return (
    <div id="Home">
      <Navbar />
      <Container>
        <Intro>
          <IntroImg
            src="./images/girlimg.png"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <IntroText>

            <h1>Hi, I'm <NameSpan>Anjalina</NameSpan></h1>
            <TypingContainer>
              <span className="sentence">
                A {" "}
                <span id="feature-text" ref={featureTextRef}>
                  {text}
                </span>
                <span className="input-cursor" ref={cursorRef}></span>
                {" "}Developer
              </span>
            </TypingContainer>

            <Socials>
              <Icons>
                <Link
                  href="https://github.com/AnjalinaJijo"
                  alt="GitHub"
                  sx={{ textDecoration: "none" }}
                >
                  <GitHubIcon
                    size="large"
                    sx={{ height: "35px", width: "35px", color: "white" }}
                  />
                </Link>
              </Icons>
              <Icons>
                <Link
                  href="https://www.linkedin.com/in/anjalina-jijo/"
                  alt="LinkedIn"
                  sx={{ textDecoration: "none" }}
                >
                  <LinkedInIcon
                    size="large"
                    sx={{ height: "35px", width: "35px", color: "white" }}
                  />
                </Link>
              </Icons>
              <Icons>
                <Link
                  href="mailto:anjalina008@gmail.com"
                  alt="Email"
                  sx={{ textDecoration: "none" }}
                >
                  <EmailIcon
                    size="large"
                    sx={{ height: "35px", width: "35px", color: "white" }}
                  />
                </Link>
              </Icons>
            </Socials>
          </IntroText>
        </Intro>
      </Container>
    </div>
  );
};

// Styled Components
const Container = styled.div`
  // background-color: #000807;
  background-color: black;
  
  width: 100vw;
  height: 100vh;
  color: #fbf9ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
`;

const Intro = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-center: center;
  margin: 20px;
  width: 50vw;
  padding: 30px;
  

  p {
    font-size: 8px;
    margin: 0;
  }
  
  h1{
  font-size: 40px;

  
  }

  @media (max-width: 900px) {
    width: 100vw;
    padding: 20px;
    p {
      font-size: 20px;
    }
      h1{
      font-size: 35px;
      }

  }

  @media (max-width: 770px) {
    padding: 10px;
    p {
      font-size: 15px;
    }
    h1 {
      font-size: 30px;
    }
}

`;

const IntroImg = styled(motion.img)`
  @media (max-width: 900px) {
    width: 180px;
    height: 200px;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
`;

const Icons = styled.div`
  border-radius: 50%;
  &:hover {
    transform: scale(1.05);
  }
`;

const TypingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  font-weight: bold;
  margin-bottom:10px;

  .sentence {
    font-size: 35px;
    color: white;
    white-space: nowrap;
  }

  .input-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: white;
    margin-left: 4px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 900px) {
    .sentence {
      font-size: 30px;
    }
  }

  @media (max-width: 770px) {
    .sentence {
      font-size: 25px;
    }
  }

  @media (max-width: 400px) {
    .sentence {
      font-size: 23px;
    }
  }
`;

const NameSpan = styled.span`
color: #c084fc;
// color: #7c4dff;
`;

export default Hero;


// import React, { useEffect } from "react";
// import styled from "styled-components";
// import Navbar from "./Navbar";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
// import Link from "@mui/material/Link";

// // Main Hero Component
// const Hero = () => {
//   useEffect(() => {
//     const carouselText = [
//       { text: "Anjalina", color: "red" },
//       { text: "a Developer", color: "orange" },
//     ];

//     async function typeSentence(sentence, eleRef, delay = 100) {
//       const letters = sentence.split("");
//       let i = 0;
//       while (i < letters.length) {
//         await waitForMs(delay);
//         eleRef.current.append(letters[i]);
//         i++;
//       }
//     }

//     function waitForMs(ms) {
//       return new Promise((resolve) => setTimeout(resolve, ms));
//     }

//     async function deleteSentence(eleRef) {
//       const sentence = eleRef.current.innerHTML;
//       const letters = sentence.split("");
//       while (letters.length > 0) {
//         await waitForMs(100);
//         letters.pop();
//         eleRef.current.innerHTML = letters.join("");
//       }
//     }

//     function updateFontColor(eleRef, color) {
//       eleRef.current.style.color = color;
//     }

//     async function carousel(carouselList, eleRef) {
//       let i = 0;
//       while (true) {
//         updateFontColor(eleRef, carouselList[i].color);
//         await typeSentence(carouselList[i].text, eleRef);
//         await waitForMs(1500);
//         await deleteSentence(eleRef);
//         await waitForMs(500);
//         i++;
//         if (i >= carouselList.length) {
//           i = 0;
//         }
//       }
//     }

//     const featureText = document.getElementById("feature-text");
//     carousel(carouselText, { current: featureText });
//   }, []);

//   return (
//     <div id="Home">
//       <Navbar />
//       <Container>
//         <Intro>
//           <IntroImg src="./images/girlimg.png" />
//           <IntroText>
//             <div className="typing-container">
//               <span id="sentence" className="sentence">
//                 Hi, I am <span id="feature-text"></span>
//               </span>
//               <span className="input-cursor"></span>
//             </div>

//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <Socials>
//                 <Icons>
//                   <Link
//                     href="https://github.com/AnjalinaJijo"
//                     alt="GitHub"
//                     sx={{ textDecoration: "none" }}
//                   >
//                     <GitHubIcon
//                       size="large"
//                       sx={{ height: "35px", width: "35px", color: "white" }}
//                     />
//                   </Link>
//                 </Icons>
//                 <Icons>
//                   <Link
//                     href="https://www.linkedin.com/in/anjalina-jijo/"
//                     alt="LinkedIn"
//                     sx={{ textDecoration: "none" }}
//                   >
//                     <LinkedInIcon
//                       size="large"
//                       sx={{ height: "35px", width: "35px", color: "white" }}
//                     />
//                   </Link>
//                 </Icons>
//                 <Icons>
//                   <Link
//                     href="mailto:anjalina008@gmail.com"
//                     alt="Email"
//                     sx={{ textDecoration: "none" }}
//                   >
//                     <EmailIcon
//                       size="large"
//                       sx={{ height: "35px", width: "35px", color: "white" }}
//                     />
//                   </Link>
//                 </Icons>
//               </Socials>
//             </div>
//           </IntroText>
//         </Intro>
//       </Container>
//     </div>
//   );
// };

// // Styled Components
// const Container = styled.div`
//   background-color: #000807;
//   height: 100vh;
//   width: 100vw;
//   color: #fbf9ff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Intro = styled.div`
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 0px;
//   }
// `;

// const IntroText = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-center: center;
//   margin: 20px;
//   width: 50vw;
//   padding: 30px;

//   p {
//     font-size: 20px;
//     margin: 0;
//   }

//   @media (max-width: 900px) {
//     width: 100vw;
//     padding: 20px;
//     p {
//       font-size: 20px;
//     }
//   }

//   @media (max-width: 770px) {
//     padding: 10px;
//     p {
//       font-size: 15px;
//     }
//   }
// `;

// const IntroImg = styled.img`
//   @media (max-width: 900px) {
//     width: 180px;
//     height: 200px;
//   }
// `;

// const Socials = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const Icons = styled.div`
//   border-radius: 50%;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const AnimatedTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   gap: 5px;
//   padding-bottom: 30px;

//   p {
//     font-size: 60px;
//     position: relative;
//     overflow: hidden;
//     color: #fbf9ff;
//     white-space: nowrap;
//   }

//   @media (max-width: 900px) {
//     width: 100vw;
//     padding: 20px;

//     p {
//       font-size: 50px;
//     }
//   }

//   @media (max-width: 770px) {
//     padding: 10px;
//     p {
//       font-size: 40px;
//     }
//   }

//   .cursor {
//     display: inline-block;
//     vertical-align: bottom;
//     width: 0.6em;
//     height: 1em;
//     background-color: #fff;
//     animation: blink 1s infinite;
//   }

//   .cursor-stale {
//     display: inline-block;
//     vertical-align: bottom;
//     width: 0.6em;
//     height: 1em;
//     background-color: #fff;
//   }

//   .typing-container {
//     display: flex;
//     justify-content: center;
//     align-items: center @keyframes blink {
//       0% {
//         opacity: 1;
//       }
//       40% {
//         opacity: 1;
//       }
//       60% {
//         opacity: 0;
//       }
//       100% {
//         opacity: 0;
//       }
//     }
//   }

//   .input-cursor {
//     display: inline-block;
//     width: 2px;
//     height: 42px;
//     background-color: white;
//     margin-left: 8px;

//     animation: blink 0.6s linear infinite alternate;
//   }
// `;

// export default Hero;

// import React, { useEffect, useState } from 'react';
// import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// import styled from 'styled-components';
// import Navbar from './Navbar';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import Link from '@mui/material/Link';

// // Main Hero Component
// const Hero = () => {
//   return (
//     <div id='Home'>
//       <Navbar />
//       <Container>
//         <Intro>
//           <IntroImg src="./images/girlimg.png" />
//           <IntroText>
//             <AnimatedText
//               texts={[
//                 "Hi, I am Anjalina",
//                 "Hi, I am a Developer",
//                 "I am Anjalina"
//               ]}
//               highlight={["Anjalina", "Developer"]}
//               highlightColor="violet"
//             />
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Socials>
//                 <Icons>
//                   <Link href="https://github.com/AnjalinaJijo" alt="GitHub" sx={{ textDecoration: 'none' }}>
//                     <GitHubIcon size="large" sx={{ height: '35px', width: '35px', color: 'white' }} />
//                   </Link>
//                 </Icons>
//                 <Icons>
//                   <Link href="https://www.linkedin.com/in/anjalina-jijo/" alt="LinkedIn" sx={{ textDecoration: 'none' }}>
//                     <LinkedInIcon size="large" sx={{ height: '35px', width: '35px', color: 'white' }} />
//                   </Link>
//                 </Icons>
//                 <Icons>
//                   <Link href="mailto:anjalina008@gmail.com" alt="Email" sx={{ textDecoration: 'none' }}>
//                     <EmailIcon size="large" sx={{ height: '35px', width: '35px', color: 'white' }} />
//                   </Link>
//                 </Icons>
//               </Socials>
//             </div>
//           </IntroText>
//         </Intro>
//       </Container>
//     </div>
//   );
// };

// // Animated Text Component
// const AnimatedText = ({ texts, highlight, highlightColor }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const displayText = useTransform(rounded, (latest) => texts[currentIndex].slice(0, latest));

//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     const typeAndErase = () => {
//       animate(count, texts[currentIndex].length, {
//         type: 'tween',
//         duration: 5,
//         ease: 'linear',
//         onComplete: () => {
//           setTimeout(() => {
//             animate(count, 1, {
//               type: 'tween',
//               duration: 2,
//               ease: 'linear',
//               onComplete: () => {
//                 setTimeout(() => {
//                   setCurrentIndex((prev) => (prev + 1) % texts.length);
//                   animate(count, 0, {
//                     type: 'tween',
//                     duration: 1,
//                     ease: 'linear',
//                   });
//                 }, 1000);
//               },
//             });
//           }, 2000);
//         },
//       });
//     };

//     typeAndErase();

//     return () => {
//       animate(count, 0).stop();
//     };
//   }, [currentIndex, texts]);

//   useEffect(() => {
//     const unsubscribe = displayText.onChange((latest) => {
//       setDisplayedText(latest);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [displayText]);

//   const highlightedText = displayedText.split("").map((char, index) => {
//     const isHighlight = highlight.some(part => {
//       const regex = new RegExp(part, 'i');
//       return regex.test(texts[currentIndex].slice(0, index + 1));
//     });

//     return (
//       <span
//         key={index}
//         style={{
//           color: isHighlight ? highlightColor : 'inherit',
//           fontWeight: isHighlight ? 'bold' : 'normal',
//         }}
//       >
//         {char}
//       </span>
//     );
//   });

//   return <p>{highlightedText}</p>;
// };

// // Styled Components
// const Container = styled.div`
//   background-color: #000807;
//   height: 100vh;
//   width: 100vw;
//   color: #fbf9ff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Intro = styled.div`
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 0px;
//   }
// `;

// const IntroText = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-center: center;
//   margin: 20px;
//   width: 50vw;
//   padding: 30px;

//   p {
//     font-size: 20px;
//     margin: 0;
//   }

//   @media (max-width: 900px) {
//     width: 100vw;
//     padding: 20px;
//     p {
//       font-size: 20px;
//     }
//   }

//   @media (max-width: 770px) {
//     padding: 10px;
//     p {
//       font-size: 15px;
//     }
//   }
// `;

// const IntroImg = styled.img`
//   @media (max-width: 900px) {
//     width: 180px;
//     height: 200px;
//   }
// `;

// const Socials = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const Icons = styled.div`
//   border-radius: 50%;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const AnimatedTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   gap: 5px;
//   padding-bottom: 30px;

//   p {
//     font-size: 60px;
//     position: relative;
//     overflow: hidden;
//     color: #fbf9ff;
//     white-space: nowrap;
//   }

//   @media (max-width: 900px) {
//     width: 100vw;
//     padding: 20px;

//     p {
//       font-size: 50px;
//     }
//   }

//   @media (max-width: 770px) {
//     padding: 10px;
//     p {
//       font-size: 40px;
//     }
//   }
// `;

// export default Hero;

// "use client";

// import React, { useEffect, useState } from 'react';
// import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// import styled from 'styled-components';
// import Navbar from './Navbar';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import Link from '@mui/material/Link';

// const Hero = () => {
//   return (
//     <div id='Home'>
//       <Navbar />
//       <Container>
//         <Intro>
//           <IntroImg src="./images/girlimg.png" />
//           <IntroText>
//             <AnimatedTextContainer>
//               <AnimatedText
//                 text="Hi, I am Anjalina"
//                 highlight={["Anjalina"]}
//                 highlightColor="violet"
//               />
//               <AnimatedText
//                 text="I am a Web Developer"
//                 highlight={["Web Developer"]}
//                 highlightColor="violet"
//               />
//             </AnimatedTextContainer>
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Socials>
//                 <Icons>
//                   <Link href="https://github.com/AnjalinaJijo" alt="GitHub" sx={{ textDecoration: 'none' }}>
//                     <GitHubIcon size="large" sx={{ height: '35px', width: '35px', color: 'white' }} />
//                   </Link>
//                 </Icons>
//                 <Icons>
//                   <Link href="https://www.linkedin.com/in/anjalina-jijo/" alt="LinkedIn" sx={{ textDecoration: 'none' }}>
//                     <LinkedInIcon size="large" sx={{ height: '35px', width: '35px', color: 'white' }} />
//                   </Link>
//                 </Icons>
//                 <Icons>
//                   <Link href="mailto:anjalina008@gmail.com" alt="Email" sx={{ textDecoration: 'none' }}>
//                     <EmailIcon size="large" sx={{ height: '35px', width: '35px', color: 'white' }} />
//                   </Link>
//                 </Icons>
//               </Socials>
//             </div>
//           </IntroText>
//         </Intro>
//       </Container>
//     </div>
//   );
// };

// const AnimatedText = ({ text, highlight, highlightColor }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     const unsubscribe = displayText.onChange((latest) => {
//       setDisplayedText(latest);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [displayText]);

//   useEffect(() => {
//     const typeAndErase = () => {
//       animate(count, text.length, {
//         type: 'tween',
//         duration: 5,
//         ease: 'linear',
//         onComplete: () => {
//           setTimeout(() => {
//             animate(count, 1, {
//               type: 'tween',
//               duration: 2,
//               ease: 'linear',
//               onComplete: () => {
//                 setTimeout(typeAndErase, 1000);
//               },
//             });
//           }, 2000);
//         },
//       });
//     };

//     typeAndErase();

//     return () => {
//       animate(count, 0).stop();
//     };
//   }, [text]);

//   const highlightedText = displayedText.split("").map((char, index) => {
//     const isHighlight = highlight.some(part => {
//       const regex = new RegExp(part, 'i');
//       return regex.test(text.slice(0, index + 1));
//     });

//     return (
//       <span
//         key={index}
//         style={{
//           color: isHighlight ? highlightColor : 'inherit',
//           fontWeight: isHighlight ? 'bold' : 'normal',
//         }}
//       >
//         {char}
//       </span>
//     );
//   });

//   return <p>{highlightedText}</p>;
// };

// const Container = styled.div`
//   background-color: #000807;
//   height: 100vh;
//   width: 100vw;
//   color: #fbf9ff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Intro = styled.div`
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 0px;
//   }
// `;

// const IntroText = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-center: center;
//   margin: 20px;
//   width: 50vw;
//   padding: 30px;

//   p {
//     font-size: 20px;
//     margin: 0;
//   }

//   @media (max-width: 900px) {
//     width: 100vw;
//     padding: 20px;
//     p {
//       font-size: 20px;
//     }
//   }

//   @media (max-width: 770px) {
//     padding: 10px;
//     p {
//       font-size: 15px;
//     }
//   }
// `;

// const IntroImg = styled.img`
//   @media (max-width: 900px) {
//     width: 180px;
//     height: 200px;
//   }
// `;

// const Socials = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const Icons = styled.div`
//   border-radius: 50%;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const AnimatedTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   gap: 5px;
//   padding-bottom: 30px;

//   p {
//     font-size: 60px;
//     position: relative;
//     overflow: hidden;
//     color: #fbf9ff;
//     white-space: nowrap;
//   }

//   @media (max-width: 900px) {
//     width: 100vw;
//     padding: 20px;

//     p {
//       font-size: 50px;
//     }
//   }

//   @media (max-width: 770px) {
//     padding: 10px;
//     p {
//       font-size: 40px;
//     }
//   }
// `;

// export default Hero;

// import React from 'react'
// import styled from 'styled-components';

// import Navbar from './Navbar'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';

// import Link from '@mui/material/Link';

// const Hero = () => {
//     return (
//         <div id='Home'>
//         <Navbar/>
//         <Container className='hero-bg'>
//         <Intro>
//             <IntroImg  src="./images/girlimg.png" />
//             <IntroText>
//               <h1> Hai, I am Anjalina
//                 <div style={{display:'flex',justifyContent:'center',AlignItems:'center'}}>
//         <Socials>
//         <Icons>
//         <Link href="https://github.com/AnjalinaJijo" alt="GitHub" sx={{textDecoration:'none'}}>
//           <GitHubIcon size="large" sx={{height:'35px',width:'35px',color:'white'}}/>
//           {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
//         </Link>
//         </Icons>
//         <Icons>
//         <Link href="https://www.linkedin.com/in/anjalina-jijo/" alt="GitHub" sx={{textDecoration:'none'}}>

//           <LinkedInIcon size="large" sx={{height:'35px',width:'35px',color:'white'}}/>
//           {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
//         </Link>
//         </Icons>
//         <Icons>
//         <Link href="mailto:anjalina008@gmail.com" alt="GitHub" sx={{textDecoration:'none'}}>
//           <EmailIcon size="large" sx={{height:'35px',width:'35px',color:'white'}}/>
//           {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
//         </Link>
//         </Icons>
//       </Socials>
//      </div>
//       <p style={{wordWrap: 'break-word'}}>I am a Web Developer Focused on Building Responsive
//                     Websites with Delightful User Experience
//                 </p>
//               </h1>

//             </IntroText>
//             </Intro>
//         </Container >
//         </div>

//     )
// }

// const Container = styled.div`
// background-color:#000807;
// height:100vh;
// width:100vw;
// color:#fbf9ff;
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// `
// const Intro = styled.div `
// display:flex;
// gap:20px;
// justify-content:center;
// @media (max-width: 900px) {
//     flex-direction:column;
//      align-items:center;
//      gap:0px;
//   }
// `
// const IntroText = styled.div `
// display:flex;
// flex-direction:column;
// // justify-content:center;
// align-items:center;

// h1{
//     font-size:60px;
//     text-align:center;
// }

// p{
//     font-size:20px;
// }
// @media (max-width: 900px) {
//     h1{
//         font-size:40px;
//         // text-align:center;
//     }
//     p{
//       font-size:20px;
//   }
// }
// @media (max-width: 770px) {
//   h1{
//       font-size:35px;
//       // text-align:center;
//   }
//   p{
//     font-size:15px;
// }
// }
// `
// const IntroImg = styled.img `
// @media (max-width: 900px) {
//     width: 180px;
//     height: 200px;
// }
// `
// const Socials = styled.div`
// display:flex;
// gap:10px;
// // justify-content:center;
// // align-items:center;

// }

// `
// const Icons = styled.div`
// border-radius:50%;
// &:hover {
//     transform: scale(1.05);
// }

// `

// export default Hero
