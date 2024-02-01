import React from 'react';
import '../Style/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h1 id='heading'>Contact</h1>
      <div id='main'>
        <table>
          <tr className='tableRow'>
            <th> Email Address</th>
            <th> Full Name</th>
            <th> Contact number</th>
            <th> Servics</th>
            <th> Message</th>
          </tr>
          </table>
      </div>
    </div>
  )
}

export default Contact