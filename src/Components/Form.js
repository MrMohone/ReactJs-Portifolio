import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <lable>Your Name</lable>
            <input type='tex'></input>
            <lable>Email</lable>
            <input type='text'></input>
            <lable>Subject</lable>
            <input type='text'></input>
            <lable>Message</lable>
            <textarea rows='6' placeholder='Type your Message here'/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form