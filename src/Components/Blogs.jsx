import React from 'react'
import { useEffect , useState } from 'react';
export default function Blogs() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    let token = localStorage.getItem('authToken');
console.log(token);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/blogs/',{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);          
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
  
    return (
        <div className='container'>
            <div className="row">
          <h1>Blogs</h1>
          {token === "" ? (
                <div className='alert bg-danger text-white'> <b> Please log in To See All Blogs.... </b></div>
            ) : (
              data.map((d) => (
                <div className="col-md-3 mt-3">
                <div className="card bg-primary bg-gradient">
                <div className="card-header bg-warning">
                <p><b>{d.title}</b></p>
                </div>
                
                <div className="card-footer">
                <a href={`/blog/${d.id}`} key={d.id} className="btn btn-success">View Blog</a>
                </div>
                </div>
                </div>
                
              ))
            )}
         
        </div>
        </div>
      )
}
