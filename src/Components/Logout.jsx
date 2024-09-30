import React from 'react'

function Logout() {
    const token = localStorage.getItem('authToken');
    let message = document.getElementById('message');
    fetch('http://localhost:8000/api/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        localStorage.setItem('authToken' , '');
        
        message.textContent = data.message; // Update textContent
        
      });

  return (
  
    <div>
        <p id='message'></p>
        </div>

  )
}

export default Logout