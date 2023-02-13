import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const options = ["Regular", "Admin"];

function App() {
  const [newFirstName, setNewFirstName] =useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail,setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("")
  const [newRole, setNewRole] = useState(options[0]);

  const navigate = useNavigate();

  const addMember = () => {
    
    const item={name: newFirstName+" "+newLastName, email:newEmail, phoneNumber:newPhoneNumber, role:newRole }

    axios.post("http://127.0.0.1:8000/api/trm/", item).then((response)=>(console.log(response)));
    navigate("/");
  }

  return (
    <div className="App">
      <div className='Box'>
          <div className='main-container'>
            <div className='secondary-container'>
              <h1>
                Add a team member
              </h1>
              <p>
                Set email, location and role.
              </p>
              <div className='team-list-margin'/>
              <h3 className='sub-sub-heading'>Info</h3>
              <form className='form'>
                <label>
                  <div className='form'>
                    <input type="text" name="first_name" value={newFirstName} onChange={(e)=>setNewFirstName(e.target.value)} placeholder="First Name" className='input'/>
                    <input type="text" name="second_name" value={newLastName} onChange={(e)=>setNewLastName(e.target.value)} placeholder="Last Name" className='input'/>
                    <input type="text" name="email" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} placeholder="Email" className='input'/>
                    <input type="text" name="phone_number" value={newPhoneNumber} onChange={(e)=>setNewPhoneNumber(e.target.value)} placeholder="Phone Number" className='input'/>
                  </div>
                  <label>
                    <h3 className='sub-sub-heading'>
                      Role
                    </h3>
                  </label>
                  <select value={newRole}  onChange={(e)=>setNewRole(e.target.value)} className="input">
                        {options.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                        ))}
                  </select>
                </label>
                <button
                    name="submit2"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={addMember}
                    className="submit-button"
                  >
                    Submit
                  </button>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
