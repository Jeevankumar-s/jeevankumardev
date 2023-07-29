import React, { useState } from 'react'
import styled from 'styled-components'
import Map from './map'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Section=styled.div`
  height: 100vh;
  scroll-snap-align:center;
`
const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

@media only screen and (max-width:768px) {
    justify-content: center;
}
`
const Title=styled.h1`
font-weight: 200;

`
const Form=styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;

@media only screen and (max-width:768px) {
    width: 300px;
}
`
const Input=styled.input`
padding: 20px;
background-color:#e8e6e6;
border: none;
border-radius:5px;
`
const TextArea=styled.textarea`
padding: 20px;
background-color:#e8e6e6;
border: none;
border-radius:5px;

`
const Button=styled.button`
background-color: #da4ea2;
color:white;
border: none;
font-weight: bold;
cursor: pointer;
border-radius: 20px;
padding: 20px;
`
const Right=styled.div`
flex: 1;
height:100%;


@media only screen and (max-width:768px) {
    display: none
}
`



const Contact = () => {
  const ref=useRef();
const [success,setSuccess]=useState(null)

const handleSubmit=e=>{
  e.preventDefault();

  emailjs.sendForm('service_fqpln2a', 'template_kxnlfxf', ref.current, 'DuJbLJXUelOfO1_Te')
  .then((result) => {
      console.log(result.text);
      useState(true)
  }, (error) => {
      console.log(error.text);
      useState(false)
  });
}
  return (
    <Section>
      <Container>
        <Left>
       
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder='Name' name="name"/>
            <Input placeholder='email' name="email"/>
            <TextArea rows={8} name="message" placeholder='Write your message'/>
      <Button type="submit">Send</Button>
      {success && "Your Message has been Sent Successfully :)"}
          </Form>
        </Left>
        <Right><Map/></Right>
      </Container>
    </Section>
  )
}

export default Contact
