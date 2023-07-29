import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Works from "./components/Works"
import Who from "./components/Who"


const Container=styled.div`
  height: 100vh;
  scroll-snap-type:y mandatory;
  scroll-behavior:smooth;
  overflow-y: auto;
  color:white;
  background-image:url("https://c4.wallpaperflare.com/wallpaper/380/523/681/design-neon-abstract-light-design-hd-wallpaper-preview.jpg");
  background-size: cover;
  scrollbar-width:none;
  &::-webkit-scrollbar{
    display:none;
  }
`;

function App() {

  return (
    <Container>
    <Hero/>
    <Who/>
    <Works/>
    <Contact/>
    </Container>
  )
}

export default App
