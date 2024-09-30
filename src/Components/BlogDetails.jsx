import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/blogs/${id}`,{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(data => setBlog(data));
  }, [id , token]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <div className="card bg-dark bg-gradient text-white">
      <div className="card-header">
      <h4>Title : {blog.title}</h4>
      </div>
      <div className="card-body">
      <p><b>Description :</b>{blog.description}</p>
      </div>
      <div className="card-footer"><p><b>Written By :</b>{blog.author}</p></div>
      </div>
      
          </div>
        </div>
      </div>
     
      
      
    </div>
  );
}
