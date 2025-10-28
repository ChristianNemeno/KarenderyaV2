
import './App.css'

import Card from './components/card';
import Grid from './components/grid';
import Navbar from './components/navbar';
import { Section } from './components/section';
import Sidebar, { 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarItem,
  SidebarGroup 
} from './components/sidebar';

function App() {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>

        <Sidebar width="md" variant="responsive" bg="bg-gray-900">
        {/* Header */}
        <SidebarHeader>
          <h1 className="text-2xl font-bold">Karenderya</h1>
          <p className="text-sm text-gray-400">Admin Dashboard</p>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent>
          {/* Main Navigation */}
          <SidebarGroup title="Main">
            <SidebarItem icon="📊" active href="/">
              Dashboard
            </SidebarItem>
            <SidebarItem icon="📦" href="/products">
              Products
            </SidebarItem>
            <SidebarItem icon="🛒" href="/orders">
              Orders
            </SidebarItem>
          </SidebarGroup>

          {/* Settings */}
          <SidebarGroup title="Settings">
            <SidebarItem icon="👤" href="/profile">
              Profile
            </SidebarItem>
            <SidebarItem icon="⚙️" href="/settings">
              Settings
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter>
          <p className="text-sm text-gray-400">© 2025 Karenderya</p>
        </SidebarFooter>
      </Sidebar>


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
