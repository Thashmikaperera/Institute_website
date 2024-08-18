import React from 'react'
import './Contact.css'
import massage_icon from '../../assets/img/message.png'
import msg_icon from '../../assets/img/msg.png'
import contact_icon from '../../assets/img/call.png'
import location_icon from '../../assets/img/lction.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "17fa3387-f87d-4314-b365-a3ffa405b2bb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send a message <img src={massage_icon}/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem in quaerat voluptas, tempora eius, corporis 
                amet voluptate repellat culpa atque explicabo maxime quasi obcaecati placeat quae ab officiis natus?</p>
            <ul>
                <li><img src={msg_icon}/>pthashmika@gmal.com</li>
                <li><img src={contact_icon}/>+94 75 720 6813</li>
                <li><img src={location_icon}/>No:52/40,Modarawila,Panadura</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                <label>Write Youe Message here</label>
                <textarea name='message' rows={6} placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact