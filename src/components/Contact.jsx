import React,{useState} from 'react'
import emailjs from "@emailjs/browser";
// import emailjs from "emailjs-com";

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
    <Container>
        <h1 style={{marginTop:'10%',marginBottom:'6%',fontSize:'50px',
        textDecoration:'underline',textDecorationColor:'#9395d3',  
        textDecorationStyle:'double'}}>CONTACT</h1>
    <Wrap>
      <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Your Name</Span>
      <Input type="text" name="name"  placeholder='Name' value={form.name} onChange={handleChange} />
      </Label>

      <Label>
        <Span>Email</Span>
      <Input type="email" name="email" placeholder='Email' value={form.email} onChange={handleChange} required/>
      </Label>

      <Label>
        <Span>Your Message</Span>
      <InputMsg type="text" name="message" placeholder='Message' value={form.message} onChange={handleChange}/>
      </Label>

      <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
      </Form>
      <SocialIcons>
      <h1>Get In Touch</h1>
      <Socials>
        <Icons>
        <Link href="https://github.com/AnjalinaJijo" alt="GitHub" sx={{textDecoration:'none'}}>
          <GitHubIcon size="large" sx={{height:'85px',width:'85px',color:'#9395d3'}}/>
          {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
        </Link>
        </Icons>
        <Icons>
        <Link href="www.linkedin.com/in/anjalina-jijo/" alt="GitHub" sx={{textDecoration:'none'}}>
          
          <LinkedInIcon size="large" sx={{height:'85px',width:'85px',color:'#9395d3'}}/>
          {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
        </Link>
        </Icons>
        <Icons>
        <Link href="mailto:anjalina008@gmail.com" alt="GitHub" sx={{textDecoration:'none'}}>
          <EmailIcon size="large" sx={{height:'85px',width:'85px',color:'#9395d3'}}/>
          {/* <p style={{fontSize:'20px',fontWeight:'bold',color:'#000807'}}>GitHub</p> */}
        </Link>
        </Icons>
      </Socials>
      </SocialIcons>
    </Wrap>

    <More>
    <p>&copy; 2023, Designed & coded with 💜 by Anjalina Jijo</p>
    </More>
    </Container>
  )
}

const Container = styled.div `
height:auto;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Wrap = styled.div `
height:auto;
width:100vw;
color:#000807;
display:flex;
gap:20px;
margin-right:10px;
margin-left:70px;
@media (max-width: 900px) {
  flex-direction:column;
  margin-right:10px;
  margin-left:10px;
}
`

const SocialIcons = styled.div`
display:flex;
display:flex;
flex-direction:column;
// justify-content:center;
// align-items:center;
@media (max-width: 900px) {
  margin:0 auto;
}
  
}

`

const Socials = styled.div`
display:flex;
display:flex;
// justify-content:center;
// align-items:center;
  
}

`
const Icons = styled.div`
border-radius:50%;
&:hover {
    transform: scale(1.05);
}

`
const Form = styled.form`
height:auto;
display:flex;
gap:20px;
flex-direction:column;
margin:0 30px;
// justify-content:center;
// align-items:center;
border:5px solid #9395d3;
padding:30px;
border-radius:2%;
background-color: #000807;
color:white;
@media (max-width: 900px) {
  margin:0 auto;
}
`
const Label = styled.label`
display:flex;
flex-direction:column;
`
const Input = styled.input`
width: 50vw;
height: 7vh;
border-radius:2%;
padding:5px 20px;
font-size:20px;
`
const InputMsg = styled.textarea`
overflow-y: scroll;
width: 50vw;
height: 150px;
border-radius:2%;
font-size:20px;
padding:5px 20px;
`

const Span = styled.span`
display:flex;
flex-direction:column;
margin-bottom:10px;
font-size:20px;
font-weight:bold;

`

const Button = styled.button`
width:150px;
height:50px;
padding:2px;
background-color:#9395d3;
font-weight:bold;
font-size:20px;
border-radius:2%;
&:hover {
    transform: scale(1.05);
    background-color:#b3b7ee;
}
`

const More = styled.div `
margin-top:30px;
background-color:#000807;
height:100px;
width:100vw;
color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
`

export default Contact
