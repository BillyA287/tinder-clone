import "./App.css"
import React from 'react'
import Header from './components/header/header.component'
import Card from './components/card/card.component'
import SwipeButton from './components/swipe-buttons/swipe-button.component'
function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header/>
      <Card/>
      <SwipeButton />
    </div>
  );
}

export default App;
