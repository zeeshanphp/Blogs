import React from 'react'

function Register() {
    function addUser (){
        const uname = document.getElementById('uname').value;
        const fname = document.getElementById('fname').value;
        const uemail = document.getElementById('uemail').value;
        const uphone = document.getElementById('uphone').value;
        const upass = document.getElementById('upass').value;
        const ucity = document.getElementById('ucity').value;
        const message = document.getElementById('success');
        const userData = {
            fullname : fname,
            usernmae: uname,
            email: uemail,
            password:upass,
            adress:ucity,
            phone: uphone

          };
          fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          })
          .then(response => response.json())
          .then(data => {
            message.textContent = data.message; // Update textContent
            message.style.display = 'block'; // Show the message
           
          })
          .catch(error => console.error(error)); 
        
    }
  return (
    <div>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <p id='success' className='bg-success py-3 bg-gradient'></p>
                <div className="card">
                    <div className="card-header bg-primary bg-gradient text-white py-3"> <center><b>REGISTER USER</b> </center></div>
                    <div className="card-body">
        <table className="table">
        <tr>
        <td><b>Enter FullName</b></td>
        <td><input type="text" className="form-control" id="fname" placeholder="Enter User FullName" required /></td>
        </tr>
        <tr>
        <td><b>Enter Email Adress</b></td>
        <td><input type="text" className="form-control" id="uemail" placeholder="Enter User Email Adress" required /></td>
        </tr>
        <tr>
        <td><b>Enter Username</b></td>
        <td><input type="text" className="form-control" id="uname" placeholder="Enter User Username " required /></td>
        </tr>
        <tr>
        <td><b>Enter Password</b></td>
        <td><input type="password" className="form-control" id="upass" placeholder="Enter Password For User" required /></td>
        </tr>
        <tr>
        <td><b>Enter Phone</b></td>
        <td><input type="text" className="form-control" id="uphone" placeholder="Enter User Phone Number" required /></td>
        </tr>
        <tr>
        <td><b>Enter City</b></td>
        <td><input type="text" className="form-control" id="ucity" placeholder="Enter User City" required /></td>
        </tr>
        </table>
                    </div>
                    <div className="card-footer"><button className="btn btn-primary bg-gradient w-100" onClick={(e)=>{
                        addUser();
                    }}>Register User</button></div>
                </div>
              
        </div>
        </div>
    </div>

        
    </div>
  )
}

export default Register