import React from 'react'
import { useEffect } from 'react';
function Addblog() {
  const token = localStorage.getItem('authToken');
    function saveBlog() {
        const title = document.getElementById('title').value;
        const desc = document.getElementById('desc').value;
        const author = document.getElementById('author').value;
        const message = document.getElementById('success');
        const blogData = {
            title : title,
            description: desc,
            author: author
          };
          fetch('http://localhost:8000/api/blogs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(blogData)
          })
          .then(response => response.json())
          .then(data => {
            message.textContent = data.message; // Update textContent
            message.style.display = 'block'; // Show the message
          })        
          .catch(error => console.error(error)); 
        
    }
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <p id='success' className='text-success bold'></p>
            <div className="card">
    <div className="card-header bg-success bg-gradient text-white">
        <h4>Add Blog</h4>
    </div>
    {token === "" ? (
                <div className='alert bg-danger text-white'> <b> Please log in To Add New Blogs.... </b></div>
            ) : (
    <div className="card-body">
        <form>
        <label>Title</label>
        <input type="text" className="form-control" id='title' placeholder="" required />
        <label>Description</label>
        <textarea className='form-control' name="" id="desc"></textarea>
        <label>Author</label>
        <input type="text" className="form-control" id='author' placeholder="" required />
       
        <button onClick={(e) => {
  e.preventDefault();
  saveBlog();
}} className='btn btn-primary'>Add Blog</button>


        </form>
    </div>
    )}
    </div>
            </div>
        </div>
    </div>
   
  )
}

export default Addblog