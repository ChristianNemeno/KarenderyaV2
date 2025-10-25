
import './App.css'

import Card from './components/card';
import Navbar from './components/navbar';
import { Section } from './components/section';

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


     <Card 
      title = "I am"
      content="Very sad"
     ></Card>

    <Section background='dark' fullHeight={false} >
      <h2 className="text-2xl font-bold">SECTION F1</h2>
    </Section>

    </>
  )
}

export default App
