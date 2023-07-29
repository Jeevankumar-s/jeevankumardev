import React from 'react'
import styled from 'styled-components'

const Section=styled.div`
display: flex;
justify-content: center;

@media only screen and (max-width:768px) {
  width: 100%;
}
`;
const Container=styled.div`
width: 1100px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;

@media only screen and (max-width:768px) {
  width: 100%;
  padding: 10px;
}
`;
const Links=styled.div`
display: flex;
align-items: center;
gap: 50px;


`;
const Logo=styled.img`
height: 60px;

@media only screen and (max-width:768px) {
    height: 80px;
    width: 80px;
}
`;
const List=styled.ul`
display: flex;
gap: 20px;
list-style:none;

@media only screen and (max-width:768px) {
    display: none
}
`;

const ListItem=styled.li`
cursor: pointer;`;


const Icons=styled.div`
display: flex;
align-items: center;
gap: 20px;`;

const Icon=styled.img`
height: 30px;
cursor: pointer;
`;
const Button=styled.button`
width: 100px;
color:white;
padding:10px;
border:none;
background-color: #da4ea2;
border-radius:5px;
cursor:pointer;

`;

const Navbar = () => {
  return (
    <Section>
      <Container> 
<Links>
    <Logo src="https://ik.imagekit.io/ksa4qcl0x/images-removebg-preview.png?updatedAt=1689833336357"/>
    <List>
        <ListItem>Studio</ListItem>
        <ListItem>Works</ListItem>
        <ListItem>Home</ListItem>
        <ListItem>Contact</ListItem>
    </List>
</Links>
<Icons>
<Icon src="https://ik.imagekit.io/ksa4qcl0x/pngtree-vector-find-icon-png-image_854997-removebg-preview.png?updatedAt=1689833626824"/>
<Button>Hire Now</Button>
</Icons>
      </Container> 
    </Section>
  )
}

export default Navbar
