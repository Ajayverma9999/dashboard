import React from 'react';
import '../Style/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h1 id='heading'>Contact</h1>
      <div id='main'>
        <table>
          <tr className='tableRow'>
            <thead> Email Address</thead>
            <thead> Full Name</thead>
            <thead> Contact number</thead>
            <thead> Servics</thead>
            <thead> Message</thead>
          </tr>
          
          </table>
      </div>
    </div>
  )
}

export default Contact