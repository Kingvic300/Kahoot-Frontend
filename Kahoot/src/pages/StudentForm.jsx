import React, { useState } from 'react';
import './StudentForm.css';
import {toast} from 'react-toastify'
import {Link} from "react-router-dom";
function StudentForm() {
     const [formData, setFormData] = useState({ username: '', password: '' });
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [success, setSuccess] = useState(false);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({...prev, [name]: value}));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          if (formData.username.length < 6) {
               toast.error("Username must be at least 6 characters!");
               return;
          }
          if (formData.password.length < 6) {
               toast.error("Password must be at least 6 characters!");
               return;
          }


          setIsSubmitting(true);

          try {
               const response = await fetch('http://localhost:8080/student/create-students', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         username: formData.username,
                         password: formData.password,
                         role: 'STUDENT'
                    })
               });

               const data = await response.json();

               if (!response.ok) {
                    if (response.status === 409) {
                         toast.error( data.message);
                    } else {
                         toast.error(`Registration failed: ${data.message || 'Unknown error'}`);
                    }
                    return;
               }
               toast.success('Student account created:', data);
               setSuccess(true);

          } catch (error) {
               toast.error('Registration error:', error);

          } finally {
               setIsSubmitting(false);
          }
     };

     if (success) {
          return (
              <div className="account-container success-message">
                   <h1>Account Created Successfully!</h1>
                   <p>Your student account is now ready.</p>
                   <div className="success-actions">
                        <button
                            className="primary-btn"
                            onClick={() => {
                                 window.location.href = '/';
                            }}
                        >
                             Go to Dashboard
                        </button>
                   </div>
              </div>
          );
     }

     return (
         <div className="account-container">
              <h1>Create Student Account</h1>
              <form onSubmit={handleSubmit}>
                   <div className="form-group">
                        <label>Username</label>
                        <p className="subtext">Do not use your real name</p>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username..."
                            maxLength={20}
                            required
                            minLength={6}
                        />
                        <div className="character-count">
                             {20 - formData.username.length} characters remaining
                        </div>
                   </div>

                   <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            autoComplete={"off"}
                            onChange={handleChange}
                            placeholder="Enter password..."
                            required
                            maxLength={20}
                            minLength={6}
                        />
                        <div className="character-count">
                             {20 - formData.password.length} characters remaining
                        </div>
                   </div>

                   <button
                       type="submit"
                       className="primary-btn"
                       disabled={isSubmitting}>
                        {isSubmitting ? 'Creating Account...' : 'Create Student Account'}
                   </button>
                   <div>
                        <p> already have an account <Link to="/login">login</Link></p>
                   </div>
              </form>
         </div>
     );
}

export default StudentForm;