import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial,Sphere,OrbitControls } from '@react-three/drei'

const Section=styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width:768px) {
    height: 200vh;
}
`
const Container=styled.div`
  height: 100%;
  scroll-snap-align:center;
  width: 1100px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px) {
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 100%;
}
`;
const Left=styled.div`
flex:2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width:768px) {
    flex: 1;
    align-items: center;
}

`;
const Title=styled.h1`
font-size: 74px;

@media only screen and (max-width:768px) {
    text-align: center;
}
`;
const WhatWeDo=styled.div`
display: flex;
align-items: center;
gap: 10px;

`; 
const Line=styled.img`
height: 5px;
`;
const Subtitle=styled.h2`
color: #da4ea2;
`;
const Desc=styled.p`
font-size: 24px;
color: lightgray;

@media only screen and (max-width:768px) {
    padding: 20px;
    text-align: center;
}

`;
const Button=styled.button`
color: white;
width: 100px;
padding: 10px;
font-weight: 500;
background-color: #da4ea2;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Right=styled.div`
flex:3;
position: relative;

@media only screen and (max-width:768px) {
    flex: 1;
    width: 100%;
}
`;

const Img=styled.img`
width: 750px;
height: 450px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width:768px) {
    width: 300px;
    height: 300px;
}


@keyframes animate {
  100%{
    transform: translateY(20px);
  }
}
`;
const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
      <Left>
        <Title>Think. Make. Solve</Title>
        <WhatWeDo>
        <Line src="./line.png"/> 
          <Subtitle>What we do</Subtitle>
        </WhatWeDo>
        <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
      <Button>Learn More</Button>
      </Left>
      <Right>
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
          <Sphere args={[1,100,200]} scale={2.5}>
          <MeshDistortMaterial color="#3d1c56"
            attach="material"
            speed={2}
            distort={0.5}
          />
          </Sphere>
    </Canvas>
    <Img src="https://cdn3d.iconscout.com/3d/premium/thumb/young-man-sitting-and-using-laptop-5892974-4897576.png"/>
      </Right>
      </Container>
    </Section>
  )
}

export default Hero
