import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import cardDP from './assets/butterfly150.jpg'
import UserGreeting from './UserGreetings.jsx'
import List from './List.jsx'
import React from 'react';
function App(){

  const fruits = [
    {id:1, name: "Apple", calories: 95}, 
    {id:2, name: "Orange", calories: 45}, 
    {id:3, name: "Banana", calories:105}, 
    {id:4, name: "Coconut", calories: 159}, 
    {id:5, name: "Pineapple", calories: 37}];

  const vegetables = [
      {id:6, name: "Potato", calories: 110}, 
      {id:7, name: "Cabbage", calories: 56}, 
      {id:8, name: "Tomato", calories:35}, 
      {id:9, name: "Brinjal", calories: 57}, 
      {id:10, name: "Peas", calories: 80}];

  return (
    <>
    <Header />
    <UserGreeting 
      isLoggedIn={true} 
      userName="Al amin"
    />
    {/* <Food /> */}
    {fruits.length > 0 && <List items={fruits} category= "Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category= "Vegetables"/>}
    <Card 
      title='Butterfly' 
      src={cardDP} 
      text='Butterflies are mentally mental, so is love.'/>
    <Footer/>
    </>
  );
}
export default App;