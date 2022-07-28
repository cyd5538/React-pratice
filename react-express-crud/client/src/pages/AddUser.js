import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./AddUser.css";
import { toast } from "react-toastify";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const { name, email, contact } = state;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http:///localhost:5000/user/${id}`);
    if (response.data === 200) {
      setState({ ...response.data[0] });
    }
  };

  const navigate = useNavigate();

  const addUser = async (data) => {
    const response = await axios.post("http:///localhost:5000/user", data);
    if (response.data === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http:///localhost:5000/user/${id}`, data);
    if (response.data === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("넣어라좀");
    } else {
      if (!id) {
        addUser(state);
      }else{
        updateUser(state, id)
      }
      navigate("/");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="name">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="contact"
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddUser;
