import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import './login.css'

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    API.get(`/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/${id}`, form);
      alert("User updated successfully!");
      navigate("/users");
    } catch (err) {
      alert("Failed to update user.");
    }
  };

  return (
    <div className="outer">
    <div class="super-card">
     <form onSubmit={handleSubmit} >
  <h2 class="text-center mb-4">Update</h2>

  <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input name="name" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Name"  onChange={handleChange} />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={handleChange} />
    
  </div>
 
  
  <button  class="btn btn-primary">Update</button>
  </form>

    </div> </div>
  );
};

export default EditUser;
