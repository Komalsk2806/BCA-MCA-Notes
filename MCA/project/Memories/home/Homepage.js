import React from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


function Home() {
  return (
    <div className="container bg-image">
    <div style={{backgroundImage:'URL("E/sem2p/frontend/Budgeting.jpg")'}}>
        <Navbar/>
        <h1 style={{color:'black'}}><strong><center>Student Budgeting System</center></strong></h1>
    </div>
    </div>
  )

  
}

export default Home