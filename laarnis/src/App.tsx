
import './App.css'

import Card from './components/card';
import Grid from './components/grid';
import Navbar from './components/navbar';
import { Section } from './components/section';
import Sidebar from './components/sidebar'

function App() {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
    <Navbar
      logo="Karenderya"
      links={navLinks}
    />

    <Sidebar width = "md" position = "left" >
      <div>
          <ul>sad</ul>
          <ul>me</ul>
          <ul>asf</ul>
      </div>
      
    </Sidebar>



     <Card 
      title = "I am"
      content="Very sad"
     ></Card>

    <Section background='dark' fullHeight={false} >
      <h2 className="text-2xl font-bold">SECTION F1</h2>
    </Section>


    <Grid cols={4} gap='lg' className='p-4'>
      <Card 
        title = "Card 1"
        content="This is the content of card 1."
      />
      <Card 
        title = "Card 2"
        content="This is the content of card 2."
      />
      <Card 
        title = "Card 3"
        content="This is the content of card 3."
      />
      <Card 
        title = "Card 4"
        content="This is the content of card 4."
      />
    </Grid>
      

      

    </>
  )
}

export default App
