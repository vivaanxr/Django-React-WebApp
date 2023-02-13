import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import {useLocation,useNavigate} from 'react-router-dom';

const options = ["Regular", "Admin"];

function App() {

  const [updatedFirstName, setUpdatedFirstName] =useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedEmail,setUpdatedEmail] = useState("");
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("")
  const [updatedRole, setUpdatedRole] = useState(options[0]);

  const location = useLocation();
  const navigate = useNavigate();

  const updateMember = () => {
    //fix this
    const item={name: updatedFirstName+" "+updatedLastName, email:updatedEmail, phoneNumber:updatedPhoneNumber, role:updatedRole }

    axios.put("http://127.0.0.1:8000/api/trm/"+location.state.id+"/", item).then((response)=>(console.log(response)));
    console.log("http://127.0.0.1:8000/api/trm/"+location.state.id+"/", item);
    navigate("/");
  }

  const deleteMember = () => {
    //fix this
    axios.delete("http://127.0.0.1:8000/api/trm/"+location.state.id+"/");
    navigate("/");
  }

  return (
    <div className="App">
      <div className='Box'>
            <div className='main-container'>
            <div className='secondary-container'>
              <h1 className='subheading'>
                Edit Team Member
              </h1>
              <p className='subtitle'>
                Edit Contact info,location and role.
              </p>
              <div className='team-list-margin'/>
              <h3 className='sub-sub-heading'>Info</h3>
              <form className='form'>
                <label>
                  <div className='form'>
                    <input type="text" name="first_name" value={updatedFirstName} onChange={(e)=>setUpdatedFirstName(e.target.value)} placeholder="First Name" className='input'/>
                    <input type="text" name="second_name" value={updatedLastName} onChange={(e)=>setUpdatedLastName(e.target.value)} placeholder="Last Name" className='input'/>
                    <input type="text" name="email" value={updatedEmail} onChange={(e)=>setUpdatedEmail(e.target.value)} placeholder="Email" className='input'/>
                    <input type="text" name="phone_number" value={updatedPhoneNumber} onChange={(e)=>setUpdatedPhoneNumber(e.target.value)} placeholder="Phone Number" className='input'/>
                  </div>
                  <label>
                    <h3 className='sub-sub-heading'>
                      Role
                    </h3>
                  </label>
                  <select value={updatedRole}  onChange={(e)=>setUpdatedRole(e.target.value)} className="input">
                        {options.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                        ))}
                  </select>
                </label>
                <div className='submit-button-container'>
                  <button
                    name="submit1"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={deleteMember}
                    className="submit-button"
                  >
                    Delete
                  </button>
                  <button
                    name="submit2"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={updateMember}
                    className="submit-button"
                  >
                    Update
                  </button>
                </div>
              </form>
              </div>
            </div>
            </div>
      </div>
  );
}

export default App;
