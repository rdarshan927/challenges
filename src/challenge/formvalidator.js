//form validation

import React, {useState} from "react";
import Css2 from './css/formvalidator.css';

export default function FormValidator() {
    const [issue, setIssue] = useState('Fill the form and click the submit button!');
    const [formData, setFormData] = useState({
        email: '',
        pass: '',
        cpass: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!formData.email || !formData.pass || !formData.cpass ){
            setIssue('Please fill all the details.');
        }
        else if (event.target.id === 'email' && !formData.email.includes('@')) {
            setIssue('Email must contain "@" symbol.');
        }
        else if(formData.pass !== formData.cpass){
            setIssue('Please try again! passwords doesnt match.');
        }
        else{
            setFormData({
                email: '',
                pass: '',
                cpass: ''
            });
            setIssue('Submitted successfully.');
        }
    }

    return (
        <div className="top">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up!</h2>
                <span>Email</span><br/>
                <input id="email" type="email" value={formData.email} onChange={handleChange}/><br/>
                <span>Password</span><br/>
                <input id="pass" type="password" value={formData.pass} onChange={handleChange}/><br/>
                <span>Confirm Password</span><br/>
                <input id="cpass" type="password" value={formData.cpass} onChange={handleChange}/><br/>
                <span id="problem">{issue}</span><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}