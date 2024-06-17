import React from 'react'
import '../Styles/Contact.scss'
const Contact = () => {
  return (
    <div className="contact">
        <main className='contact-form'>
            <h1>contact form</h1>
            <form>
                <div className='form-input'>
                    <label>name</label>
                    <input type="text" placeholder='enter your name'></input>
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder='enter your email'></input>
                </div>
                <div>
                  <label>message</label>
                  <input type="text" placeholder='enter your message'></input>
                </div>
                <button>send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact