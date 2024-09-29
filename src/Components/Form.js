import React from 'react'
import './Form.css'

const Form = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fd627a8a-d379-4839-a09f-aea6626f5b79");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className='form'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' placeholder='enter your name' name='name'></input>
            <label>Email</label>
            <input type='email' placeholder='enter your email' name='email'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Type your Message here' name='message'/>
            <button className='btn' type='submit'>Submit Now</button>
        </form>
    </div>
  )
}

export default Form