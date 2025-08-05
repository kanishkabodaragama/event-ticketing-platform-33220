import React from 'react';
import Header from './components/Header';
import EventFeed from './components/EventFeed';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <Header />
      <EventFeed />
    </div>
  );
}

export default App;
