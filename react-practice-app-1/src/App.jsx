import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import cardDP from './assets/butterfly150.jpg'
import UserGreeting from './UserGreetings.jsx'
import React from 'react';
function App(){
  return (
    <>
    <Header />
    <Food />
    <UserGreeting 
      isLoggedIn={true} 
      userName="Al amin"
    />
    <Card 
      title='Butterfly' 
      src={cardDP} 
      text='Butterflies are mentally mental, so is love.'/>
    <Footer/>
    </>
  );
}
export default App;