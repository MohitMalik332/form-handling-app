
import { useState } from 'react'
import './App.css'

function App() {

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // It prevents Page Reload.
    console.log(formData);

    let newErrors = {};

    // Name Validation
    if (!formData.name) {
      newErrors.name = "Name is Required";
    }

    // Email Validatio
    if (!formData.email) {
      newErrors.email = "Email is Required";
    }

    // Password Validation
    if(!formData.password){
      newErrors.password = "Password is Required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 Characters";
    }

    setErrors(newErrors);

    // If No Errors then Submit
    if (Object.keys(newErrors).length === 0){
      console.log("Form Submitted : ", formData);

      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  }

  return (
    <div className="container">
      <div className="form-box">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className='error'>{errors.name}</p>}

          <div className="input-group">
            <label>Email</label>
            <input 
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className='error'>{errors.email}</p>}

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errors.password && <p className='error'>{errors.password}</p>}

          <button type="submit">Submit</button>

        </form>
        {/* <p>{JSON.stringify(formData)}</p> */}
      </div>
    </div>
  )
}

export default App
