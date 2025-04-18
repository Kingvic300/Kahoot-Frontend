import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizForm = () => {
     const navigate = useNavigate();

     const [formData, setFormData] = useState({ question: '', option1: '', option2: '', option3: '', option4: '' });

     const handleExitClick = () => {
          navigate('/Home');
     };

     return (
         <div className="w-full box-border flex flex-col justify-center items-center p-5">
              <header className="w-full flex justify-between items-center fixed top-0 left-0 px-1 bg-white shadow-md z-10">
                   <div className="flex items-center gap-8">
                        <h1 className="text-purple-700 text-2xl font-bold m-0">kahoot!</h1>
                        <input
                            className="w-72 p-2 text-base border border-gray-300 rounded-lg"
                            placeholder="Enter kahoot title..."
                        />
                   </div>

                   <div className="flex gap-2">
                        <button
                            onClick={handleExitClick}
                            className="flex items-center justify-center px-4 py-2 bg-gray-300 text-black rounded-lg text-base cursor-pointer"
                            type="button"
                        >
                             exit
                        </button>
                        <button
                            className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg text-base cursor-pointer"
                            type="submit"
                        >
                             save
                        </button>
                   </div>
              </header>
         </div>
     );
};

export default QuizForm;
