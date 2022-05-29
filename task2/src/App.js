import './App.css';
import React, { useState } from 'react';

function App() {
    const [ users, setUser ] = useState();
    const fetchData = async () => {
            fetch("https://reqres.in/api/users?page=1")
              .then(response => {
                return response.json()
              })
              .then(data => {
                setUser(data)
                console.log(users)
              }).catch((error)=>{
                  console.log(error)
              })
          }

    return (

        <div className = 'App' >
            <div className = 'header' >
            <h1 > ABC </h1> 
            <button onClick = {fetchData} > Get Users </button> 
            </div >
            <div className = "Users" >
            <h2 > Users: </h2>
            <ul className='user_list'>
                {users && users.data.map(({ id, first_name, last_name, email, avatar })=>(
                    <li className='user' key = {id}>
                        <img src= {avatar} alt={'image of '+first_name}/> <br/>
                        name: { first_name + ' ' + last_name } <br/>
                        email: {email}<br/>
                    </li>
                ))}
                
            </ul>

            </div> 
        </div>
    );
}
export default App;