// // // import React,{useState} from 'react'
// // // import emailjs from "@emailjs/browser";
// // // // import emailjs from "emailjs-com";

// // // import styled from 'styled-components';
// // // import GitHubIcon from '@mui/icons-material/GitHub';
// // // import LinkedInIcon from '@mui/icons-material/LinkedIn';
// // // import EmailIcon from '@mui/icons-material/Email';

// // // import Link from '@mui/material/Link';


// // // const Contact = () => {

// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     message: "",
// // //   });

// // //   const [loading, setLoading] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { target } = e;
// // //     const { name, value } = target;

// // //     setForm({
// // //       ...form,
// // //       [name]: value,
// // //     });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     emailjs
// // //       .send(
// // //        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
// // //        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
// // //         {
// // //           from_name: form.name,
// // //           to_name: "Anjalina",
// // //           from_email: form.email,
// // //           to_email: "anjalina008@gmail.com",
// // //           message: form.message,
// // //         },
// // //         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
// // //       )
// // //       .then(
// // //         () => {
// // //           setLoading(false);
// // //           alert("Thank you. I will get back to you as soon as possible.");

// // //           setForm({
// // //             name: "",
// // //             email: "",
// // //             message: "",
// // //           });
// // //         },
// // //         (error) => {
// // //           setLoading(false);
// // //           console.error(error);

// // //           alert("Ahh, something went wrong. Please try again.");
// // //         }
// // //       );
// // //   };

// // //   return (
// // //     <Container id='Contact'>
// // //         <Heading>CONTACT</Heading>
// // //     <Wrap>
// // //       <Form onSubmit={handleSubmit}>
// // //       <Label>
// // //         <Span>Your Name</Span>
// // //       <Input type="text" name="name"  placeholder='Name' value={form.name} onChange={handleChange} />
// // //       </Label>

// // //       <Label>
// // //         <Span>Email</Span>
// // //       <Input type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange} required/>
// // //       </Label>

// // //       <Label>
// // //         <Span>Your Message</Span>
// // //       <InputMsg type="text" name="message" placeholder='Message' value={form.message} onChange={handleChange}/>
// // //       </Label>

// // //       <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
// // //       </Form>
// // //       <SocialIcons>
// // //       <h1>Get In Touch</h1>
// // //       <Socials>
// // //         <Icons>
// // //         <Link href="https://github.com/AnjalinaJijo" alt="GitHub" sx={{textDecoration:'none'}}>
// // //           <GitHubIcon size="large" sx={{height:'85px',width:'85px',color:'#9395d3'}}/>
// // //           {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
// // //         </Link>
// // //         </Icons>
// // //         <Icons>
// // //         <Link href="https://www.linkedin.com/in/anjalina-jijo/" alt="GitHub" sx={{textDecoration:'none'}}>
          
// // //           <LinkedInIcon size="large" sx={{height:'85px',width:'85px',color:'#9395d3'}}/>
// // //           {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
// // //         </Link>
// // //         </Icons>
// // //         <Icons>
// // //         <Link href="mailto:anjalina008@gmail.com" alt="GitHub" sx={{textDecoration:'none'}}>
// // //           <EmailIcon size="large" sx={{height:'85px',width:'85px',color:'#9395d3'}}/>
// // //           {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
// // //         </Link>
// // //         </Icons>
// // //       </Socials>
// // //       </SocialIcons>
// // //     </Wrap>

// // //     <More>
// // //     <p>&copy; 2023, Designed & coded with 💜 by Anjalina Jijo</p>
// // //     </More>
// // //     </Container>
// // //   )
// // // }

// // // const Container = styled.div `
// // // height:auto;
// // // width:100vw;
// // // display:flex;
// // // flex-direction:column;
// // // justify-content:center;
// // // align-items:center;
// // // `
// // // const Heading = styled.h1`
// // // margin-top:10%;
// // // margin-bottom:6%;
// // // font-size:50px;
// // // text-decoration:underline;
// // // text-decoration-color:#9395d3;  
// // // text-decoration-style:double;
// // // @media (max-width: 900px) {
// // //   font-size:40px;
// // // }
// // // `
// // // const Wrap = styled.div `
// // // height:auto;
// // // width:100vw;
// // // color:#000807;
// // // display:flex;
// // // gap:20px;
// // // margin-right:10px;
// // // margin-left:70px;
// // // margin-top:50px;
// // // @media (max-width: 900px) {
// // //   flex-direction:column;
// // //   margin-right:10px;
// // //   margin-left:10px;
// // // }
// // // `

// // // const SocialIcons = styled.div`
// // // display:flex;
// // // display:flex;
// // // flex-direction:column;
// // // // justify-content:center;
// // // // align-items:center;
// // // @media (max-width: 900px) {
// // //   margin:0 auto;
// // // }
  
// // // }

// // // `

// // // const Socials = styled.div`
// // // display:flex;
// // // display:flex;
// // // // justify-content:center;
// // // // align-items:center;
  
// // // }

// // // `
// // // const Icons = styled.div`
// // // border-radius:50%;
// // // &:hover {
// // //     transform: scale(1.05);
// // // }

// // // `
// // // const Form = styled.form`
// // // height:auto;
// // // display:flex;
// // // gap:20px;
// // // flex-direction:column;
// // // margin:0 50px;
// // // // justify-content:center;
// // // // align-items:center;
// // // border:5px solid #9395d3;
// // // padding:30px;
// // // border-radius:2%;
// // // background-color: #000807;
// // // color:white;
// // // @media (max-width: 900px) {
// // //   margin:0 auto;
// // // }
// // // `
// // // const Label = styled.label`
// // // display:flex;
// // // flex-direction:column;
// // // `
// // // const Input = styled.input`
// // // width: 50vw;
// // // height: 7vh;
// // // border-radius:2%;
// // // padding:5px 20px;
// // // font-size:20px;
// // // `
// // // const InputMsg = styled.textarea`
// // // overflow-y: scroll;
// // // width: 50vw;
// // // height: 150px;
// // // border-radius:2%;
// // // font-size:20px;
// // // padding:5px 20px;
// // // `

// // // const Span = styled.span`
// // // display:flex;
// // // flex-direction:column;
// // // margin-bottom:10px;
// // // font-size:20px;
// // // font-weight:bold;

// // // `

// // // const Button = styled.button`
// // // width:150px;
// // // height:50px;
// // // padding:2px;
// // // background-color:#9395d3;
// // // font-weight:bold;
// // // font-size:20px;
// // // border-radius:2%;
// // // &:hover {
// // //     transform: scale(1.05);
// // //     background-color:#b3b7ee;
// // // }
// // // `

// // // const More = styled.div `
// // // margin-top:30px;
// // // background-color:#000807;
// // // height:100px;
// // // width:100vw;
// // // color:white;
// // // display:flex;
// // // flex-direction:column;
// // // justify-content:center;
// // // align-items:center;
// // // text-align:center;
// // // `

// // // export default Contact
// // import React, { useState } from 'react';
// // import emailjs from "@emailjs/browser";
// // import styled from 'styled-components';
// // import GitHubIcon from '@mui/icons-material/GitHub';
// // import LinkedInIcon from '@mui/icons-material/LinkedIn';
// // import EmailIcon from '@mui/icons-material/Email';
// // import Link from '@mui/material/Link';

// // const Contact = () => {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     const { target } = e;
// //     const { name, value } = target;

// //     setForm({
// //       ...form,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     emailjs
// //       .send(
// //         process.env.REACT_APP_EMAILJS_SERVICE_KEY,
// //         process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
// //         {
// //           from_name: form.name,
// //           to_name: "Anjalina",
// //           from_email: form.email,
// //           to_email: "anjalina008@gmail.com",
// //           message: form.message,
// //         },
// //         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
// //       )
// //       .then(
// //         () => {
// //           setLoading(false);
// //           alert("Thank you. I will get back to you as soon as possible.");

// //           setForm({
// //             name: "",
// //             email: "",
// //             message: "",
// //           });
// //         },
// //         (error) => {
// //           setLoading(false);
// //           console.error(error);
// //           alert("Ahh, something went wrong. Please try again.");
// //         }
// //       );
// //   };

// //   return (
// //     <Container id='Contact'>
// //       <ContentWrap>
// //         <Heading>Contact</Heading>
// //         <FormWrap>
// //           <Form onSubmit={handleSubmit}>
// //             <Label>
// //               <Span>Your Name</Span>
// //               <Input type="text" name="name" placeholder='Name' value={form.name} onChange={handleChange} />
// //             </Label>

// //             <Label>
// //               <Span>Email</Span>
// //               <Input type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange} required />
// //             </Label>

// //             <Label>
// //               <Span>Your Message</Span>
// //               <InputMsg name="message" placeholder='Message' value={form.message} onChange={handleChange} />
// //             </Label>

// //             <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
// //           </Form>
// //         </FormWrap>
// //         <SocialWrap>
// //           <SocialIcons>
// //             <h2>Connect with Me</h2>
// //             <Socials>
// //               <IconLink href="https://github.com/AnjalinaJijo">
// //                 <GitHubIcon />
// //               </IconLink>
// //               <IconLink href="https://www.linkedin.com/in/anjalina-jijo/">
// //                 <LinkedInIcon />
// //               </IconLink>
// //               <IconLink href="mailto:anjalina008@gmail.com">
// //                 <EmailIcon />
// //               </IconLink>
// //             </Socials>
// //           </SocialIcons>
// //         </SocialWrap>
// //       </ContentWrap>
// //       <Footer>
// //         <p>&copy; 2023, Designed & coded with 💜 by Anjalina Jijo</p>
// //       </Footer>
// //     </Container>
// //   );
// // }

// // const Container = styled.div`
// //   min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
// //   display: flex;
// //   flex-direction: column;
// //   background-color: #f5f5f5; /* Light gray background for the contact section */
// // `;

// // const ContentWrap = styled.div`
// //   flex: 1; /* Ensures the content takes up remaining space */
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center; /* Center horizontally */
// //   justify-content: center; /* Center vertically */
// //   padding: 2rem 0;
// // `;

// // const Heading = styled.h1`
// //   font-size: 2rem;
// //   color: black;
// //   text-transform: uppercase;
// //   font-weight: 700;
// //   margin-bottom: 2rem;
// //   @media (max-width: 900px) {
// //     font-size: 2.5rem;
// //   }
// // `;

// // const FormWrap = styled.div`
// //   width: 100%;
// //   max-width: 600px; /* Adjust width as needed */
// // `;

// // const SocialWrap = styled.div`
// //   width: 100%;
// //   max-width: 600px; /* Adjust width as needed */
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   margin-top: 2rem;
// // `;

// // const Form = styled.form`
// //   display: flex;
// //   flex-direction: column;
// //   gap: 1rem;
// //   padding: 2rem;
// //   border-radius: 8px;
// //   background-color: #ffffff; /* Light background for the form */
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   border: 1px solid #ddd;
// // `;

// // const Label = styled.label`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const Span = styled.span`
// //   margin-bottom: 0.5rem;
// //   font-size: 1rem;
// //   font-weight: bold;
// // `;

// // const Input = styled.input`
// //   width: 100%;
// //   padding: 0.75rem;
// //   border: 1px solid #ddd;
// //   border-radius: 4px;
// //   font-size: 1rem;
// // `;

// // const InputMsg = styled.textarea`
// //   width: 100%;
// //   padding: 0.75rem;
// //   border: 1px solid #ddd;
// //   border-radius: 4px;
// //   font-size: 1rem;
// //   height: 150px;
// // `;

// // const Button = styled.button`
// //   padding: 0.75rem 1.5rem;
// //   border: none;
// //   border-radius: 4px;
// //   background-color:#7c4dff; /* Adjust color to match theme */
// //   color: #fff;
// //   font-size: 1rem;
// //   font-weight: bold;
// //   cursor: pointer;
// //   transition: background-color 0.3s;

// //   &:hover {
// //     background-color: #0056b3; /* Darker shade for hover */
// //   }
// // `;

// // const SocialIcons = styled.div`
// //   text-align: center;
// // `;

// // const Socials = styled.div`
// //   display: flex;
// //   gap: 1rem;
// //   margin-top: 1rem;
// // `;

// // const IconLink = styled(Link)`
// //   color:#7c4dff; /* Adjust color to match theme */
// //   transition: color 0.3s;
// //   font-size: 2rem;
  
// //   &:hover {
// //     color: #0056b3; /* Darker shade for hover */
// //   }
// // `;

// // const Footer = styled.footer`
// //   background-color: #000000; /* Black color for footer */
// //   color: #ffffff;
// //   text-align: center;
// //   padding: 1rem;
// //   width: 100%;
// // `;

// // export default Contact;

// import React, { useState } from 'react';
// import emailjs from "@emailjs/browser";
// import styled from 'styled-components';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import Link from '@mui/material/Link';

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     emailjs
//       .send(
//         process.env.REACT_APP_EMAILJS_SERVICE_KEY,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
//         {
//           from_name: form.name,
//           to_name: "Anjalina",
//           from_email: form.email,
//           to_email: "anjalina008@gmail.com",
//           message: form.message,
//         },
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);
//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <Container id='Contact'>
//       <ContentWrap>
//         <Heading>Contact</Heading>
//         <FormWrap>
//           <Form onSubmit={handleSubmit}>
//             <Label>
//               <Span>Your Name</Span>
//               <Input type="text" name="name" placeholder='Name' value={form.name} onChange={handleChange} />
//             </Label>

//             <Label>
//               <Span>Email</Span>
//               <Input type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange} required />
//             </Label>

//             <Label>
//               <Span>Your Message</Span>
//               <InputMsg name="message" placeholder='Message' value={form.message} onChange={handleChange} />
//             </Label>

//             <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
//           </Form>
//         </FormWrap>
//         <SocialWrap>
//           <SocialIcons>
//             <h2>Connect with Me</h2>
//             <Socials>
//               <IconLink href="https://github.com/AnjalinaJijo">
//                 <GitHubIcon />
//               </IconLink>
//               <IconLink href="https://www.linkedin.com/in/anjalina-jijo/">
//                 <LinkedInIcon />
//               </IconLink>
//               <IconLink href="mailto:anjalina008@gmail.com">
//                 <EmailIcon />
//               </IconLink>
//             </Socials>
//           </SocialIcons>
//         </SocialWrap>
//       </ContentWrap>
//       <Footer>
//         <p>&copy; 2023, Designed & coded with 💜 by Anjalina Jijo</p>
//       </Footer>
//     </Container>
//   );
// }

// const Container = styled.div`
//   min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
//   display: flex;
//   flex-direction: column;
//   background-color: #f5f5f5; /* Light gray background for the contact section */
// `;

// const ContentWrap = styled.div`
//   flex: 1; /* Ensures the content takes up remaining space */
//   display: flex;
//   flex-direction: column;
//   align-items: center; /* Center horizontally */
//   justify-content: center; /* Center vertically */
//   padding: 2rem 0;
// `;

// const Heading = styled.h1`
//   font-size: 2rem;
//   color: black;
//   text-transform: uppercase;
//   font-weight: 700;
//   margin-bottom: 2rem;
//   @media (max-width: 900px) {
//     font-size: 2.5rem;
//   }
// `;

// const FormWrap = styled.div`
//   width: 100%;
//   max-width: 600px; /* Adjust width as needed */
// `;

// const SocialWrap = styled.div`
//   width: 100%;
//   max-width: 600px; /* Adjust width as needed */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 2rem;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 2rem;
//   border-radius: 8px;
//   background-color: #ffffff; /* Light background for the form */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border: 1px solid #ddd;
// `;

// const Label = styled.label`
//   display: flex;
//   flex-direction: column;
// `;

// const Span = styled.span`
//   margin-bottom: 0.5rem;
//   font-size: 1rem;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;
// `;

// const InputMsg = styled.textarea`
//   width: 100%;
//   padding: 0.75rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;
//   height: 150px;
// `;

// const Button = styled.button`
//   padding: 0.75rem 1.5rem;
//   border: none;
//   border-radius: 4px;
//   background-color:#7c4dff; /* Adjust color to match theme */
//   color: #fff;
//   font-size: 1rem;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #b3b7ee; /* Appropriate violet shade for hover */
//   }
// `;

// const SocialIcons = styled.div`
//   text-align: center;
// `;

// const Socials = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
// `;

// const IconLink = styled(Link)`
//   color: #7c4dff; /* Violet color to match button */
//   transition: color 0.3s;
//   font-size: 2rem;
  
//   &:hover {
//     color: #b3b7ee; /* Appropriate violet shade for hover */
//   }
// `;

// const Footer = styled.footer`
//   background-color: #000000; /* Black color for footer */
//   color: #ffffff;
//   text-align: center;
//   padding: 1rem;
//   width: 100%;
// `;

// export default Contact;


import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
        {
          from_name: form.name,
          to_name: "Anjalina",
          from_email: form.email,
          to_email: "anjalina008@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container id='Contact'>
      <ContentWrap>
        <Heading>Contact</Heading>
        <FormWrap>
          <Form onSubmit={handleSubmit}>
            <Label>
              <Span>Your Name</Span>
              <Input type="text" name="name" placeholder='Name' value={form.name} onChange={handleChange} />
            </Label>

            <Label>
              <Span>Email</Span>
              <Input type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange} required />
            </Label>

            <Label>
              <Span>Your Message</Span>
              <InputMsg name="message" placeholder='Message' value={form.message} onChange={handleChange} />
            </Label>

            <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
          </Form>
        </FormWrap>
        <SocialWrap>
          <SocialIcons>
            <h2>Connect with Me</h2>
            <Socials>
              <IconLink href="https://github.com/AnjalinaJijo">
                <GitHubIcon />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/anjalina-jijo/">
                <LinkedInIcon />
              </IconLink>
              <IconLink href="mailto:anjalina008@gmail.com">
                <EmailIcon />
              </IconLink>
            </Socials>
          </SocialIcons>
        </SocialWrap>
      </ContentWrap>
      <Footer>
        <p>&copy; 2024, Designed & coded with 💜 by Anjalina Jijo</p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5; /* Light gray background for the contact section */
`;

const ContentWrap = styled.div`
  flex: 1; /* Ensures the content takes up remaining space */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  padding: 2rem 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const FormWrap = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust width as needed */
`;

const SocialWrap = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust width as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: #ffffff; /* Light background for the form */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const InputMsg = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  height: 150px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #7c4dff; /* Adjust color to match theme */
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b3b7ee; /* Appropriate violet shade for hover */
  }
`;

const SocialIcons = styled.div`
  text-align: center;
`;

const Socials = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled(Link)`
  color: #7c4dff !important; /* Violet color to match button */
  transition: color 0.3s !important;
  font-size: 2rem !important;
  
  &:hover {
    color: #b3b7ee !important; /* Appropriate violet shade for hover */
  }
`;

const Footer = styled.footer`
  background-color: #000000; /* Black color for footer */
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

export default Contact;
