import './Contract.css'
import React from 'react';

const Contract = () => {
 return (
  <div>
   <div class="container">
  <div style={{textAlign:'center'}}>
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="https://eazybazar.com/wp-content/uploads/2021/05/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-1640.jpg" style={{width:"50%"}}/>
    </div>
    <div class="column">
      <form action="/action_page.php"/>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
        <input type="submit" value="Submit"/>
      
    </div>
  </div>
</div>
  </div>
 );
};

export default Contract;