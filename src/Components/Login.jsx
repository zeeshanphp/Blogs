import React from 'react'

function Login() {

  function loginUser (){
    const uemail = document.getElementById('uemail').value;
    const upass = document.getElementById('upass').value;
    const message = document.getElementById('success');
    const userData = {
        email: uemail,
        password:upass,

      };
      fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.token);
        const token = data.token;
        message.textContent = "Logged In Successfully...";
        localStorage.setItem('authToken', token);
      })
      .catch(error => console.error(error)); 
    
}

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <p id='success' className='bg-success py-3 bg-gradient'></p>
                <div className="card">
                    <div className="card-header bg-primary bg-gradient text-white py-3"> <center><b>LOGIN USER</b> </center></div>
                    <div className="card-body">
        <table className="table">
        
        <tr>
        <td><b>Enter Email Adress</b></td>
        <td><input type="text" className="form-control" id="uemail" placeholder="Enter User Email Adress" required /></td>
        </tr>
        
        <tr>
        <td><b>Enter Password</b></td>
        <td><input type="password" className="form-control" id="upass" placeholder="Enter Password For User" required /></td>
        </tr>
        
        </table>
                    </div>
                    <div className="card-footer"><button className="btn btn-primary bg-gradient w-100" onClick={(e)=>{
                        loginUser();
                    }}>Login User</button></div>
                </div>
              
        </div>
        </div>
    </div>
    
  )
}

export default Login