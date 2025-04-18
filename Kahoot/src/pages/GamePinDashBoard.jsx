import React, {useState} from "react";
import "./GamePinDashBoard.css"
import {toast} from "react-toastify";

function GamePinEntry() {
     const [formData, setFormData] = useState({ gamePin:''});
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [success, setSuccess] = useState(false);

     const handleChange = (e) => {
          const { name, value } = e.target;
          const onlyPositiveNums = value.replace(/[^0-9]/g, "").slice(0, 4);
          setFormData(prev => ({ ...prev, [name]: onlyPositiveNums }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          if(formData.gamePin.length < 4) {
               alert("Game Pins must be at least 4 characters!");
               return;
          }
          setIsSubmitting(true);
          try {
               const response = await fetch('http://localhost:8080/game-pin/validate-game-pin', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         gamePin: formData.gamePin,
                    })
               })
               const data = await response.json();

               if (!response.ok) {
                    if (response.status === 409) {
                         toast.error( data.message);
                    } else {
                         toast.error("Game pin is incorrect");
                    }
                    return;
               }
               toast.success("Game pin is successful!");
               setSuccess(true);

          } catch (error) {
               alert("Game pin doesn't exists:" + error.message);

          } finally {
               setIsSubmitting(false);
          }
     };
     if (success) {
          return (
              <div className="account-container success-message">
                   <h1>Game pin is correct!!!!</h1>
                   <p>you will join a game shortly</p>
                   <div className="success-actions">
                        <button
                            className="primary-btn"
                            onClick={() => {
                                 window.location.href = '/dashboard';
                            }}
                        >
                              Join
                        </button>
                        <button
                            className="secondary-btn"
                            onClick={() => {
                                 window.location.href = '/Home'
                            }}
                        >
                              Exit the app
                        </button>
                   </div>
              </div>
          );
     }
     return (
         <div className="container">
              <div className="content">
                   <h1 className="title">Kahoot!</h1>
                   <form onSubmit={handleSubmit}>
                   <div className="form-box">
                        <input
                            type="text"
                            name= "gamePin"
                            value={formData.gamePin}
                            onChange={handleChange}
                            placeholder="Game PIN (e.g... 1234)"
                            className="input"
                            maxLength={4}
                            required
                        />
                        <div className="character-count">
                             {4 - formData.gamePin.length} characters remaining
                        </div>
                        <button
                            type="submit"
                            className="button"
                            disabled={isSubmitting}>
                            {isSubmitting ? "Loading..." : "Enter"}
                        </button>
                   </div>
                        </form>

                   <p className="footer">
                        Create your own kahoot at{" "}
                        <a href="/Home" className="home-link">
                             Home
                        </a>
                   </p>
              </div>
         </div>
     );
}
export default GamePinEntry;
