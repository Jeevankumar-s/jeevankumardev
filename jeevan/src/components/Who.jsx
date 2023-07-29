import React from 'react'
import styled from 'styled-components'
import { OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import Cube from './Cube'

const Section=styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
  justify-content: center;
`
const Container=styled.div`
  height: 100vh;
  scroll-snap-align:center;
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;
const Left=styled.div`
flex:1;

@media only screen and (max-width:768px) {
    display: none;
}

`;
const Title=styled.h1`
font-size: 74px;

@media only screen and (max-width:768px) {
    font-size: 60px;
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

`;
const Button=styled.button`
color: white;
width: 120px;
padding: 10px;
font-weight: 500;
background-color: #da4ea2;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Right=styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width:768px) {
    align-items: center;
    text-align: center;
}
`;



const Who = () => {
  return (
    <Section>
      <Container>
      <Left>
      <Canvas camera={{fov:25,position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
          <Cube/>
    </Canvas>
      </Left>
      <Right>
      <Title>Think outside the square space</Title>
        <WhatWeDo>
        <Line src="./line.png"/> 
          <Subtitle>who are we</Subtitle>
        </WhatWeDo>
        <Desc>we enjoy creating delightful, human-centered digital experiences</Desc>
      <Button>see out works</Button>
     
      </Right>
      </Container>
    </Section>
  )
}

export default Who
