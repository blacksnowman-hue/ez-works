import React, { useState } from 'react';
import './Form.css';
import './Header.css';



const Form = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setMessage('');

        try {
            const response = await fetch('http://34.225.132.160:8002/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 422) {
                setError('Invalid Input');
            } else if (response.status === 200) {
                setMessage('Form Submitted');
            } else {
                setError('An unexpected error occurred.');
            }
        } catch (err) {
            setError('An unexpected error occurred.');
        }
    };

    return (

        
        <form className="form" onSubmit={handleSubmit}>


            
            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
              <button type="submit">Contact Me</button>
            {error && <div className="error">{error}</div>}
            {message && <div className="message">{message}</div>}
          
        </form>

        
    );
};

export default Form;
