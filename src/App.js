import React from 'react';
import './App.css'; // Import the App.css for global styles
import ProfileCard from './components/ProfileCard';  // Import ProfileCard
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <div className="App">
      <ProfileCard />  {/* Use ProfileCard */}
    </div>
  );
}

export default App;
