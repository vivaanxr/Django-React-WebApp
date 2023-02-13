import React, { useState, useEffect } from 'react';
import userLogo from './anon.jpeg'
import './App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import addImg from "./addImg.png";
import { useNavigate } from "react-router-dom";

function App() {
  const [myData, setMyData] = useState([]);

  let navigate = useNavigate();

  const getData=()=>{
    axios.get("http://127.0.0.1:8000/api/trm/")
    .then(res => {
      setMyData(res.data)
    })
  }

  const navigateToEditMember = (value) => {
    navigate("/editMember",{state:{id:value}});
  }

  useEffect(()=>{
    getData()
  }, []);

  const teamList = myData.map((myData) =>
  <div>
    <div className='team-list-margin'/>
    <div className='team-list-div' onClick={()=>navigateToEditMember(myData.id)}>
      <div>
        <img src={userLogo} alt="User Logo" className='App-logo'/>
      </div>
      <div className='member-data-container'>
        <b>{myData.role==="Admin"?myData.name+" ("+myData.role+")":myData.name}</b>
        <p>{myData.phoneNumber}</p>
        <p>{myData.email}</p>
      </div>
    </div>
    <div className='team-list-margin'/>
  </div>
  );

  return (
    <div className="App">

      <div className='Box'>
        <div className='main-container'>
            <div className='secondary-container'>
              <div className="subheading-container">
                <h1 className='subheading'>
                  Team Members
                </h1>
                <Link to="newMember">
                <img src={addImg} alt="User Logo" className='add-button'/>
                </Link>
              </div>
              <p className='subtitle'>
                You have {myData.length} team members
              </p>
              {teamList}
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
