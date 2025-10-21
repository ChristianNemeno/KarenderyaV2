
import './App.css'

import Card from './components/card';
import Navbar from './components/navbar';

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

    </>
  )
}

export default App
