/** @format */

import React from "react";
import "./ContactSection.css";
import Swal from "sweetalert2";

const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "daaa8d73-a7b0-4da9-bc38-abf232e8664e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent succsessfully!",
        icon: "success",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact-section'>
      <div className='ContactSection'>
        <section className='contact'>
          <div className='content'>
            <h2>Let's get in touch!</h2>
            <p>Feel free to reach out</p>
          </div>
          <div className='container'>
            <div className='contactInfo'>
              <div className='box'>
                <div className='icon'>
                  <b></b>
                  <i class='fa-regular fa-envelope'></i>
                </div>
                <div className='text'>
                  <h3>Email</h3>
                  <p>leliuc.robert@gmail.com</p>
                </div>
              </div>
              <h2 className='txt'>Let's connect!</h2>
              <ul className='sci'>
                <li>
                  <a
                    href='https://www.facebook.com/robi.lel.7/'
                    target='_blank'
                  >
                    <i class='fa-brands fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i class='fa-brands fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/LeliucRobert' target='_blank'>
                    <i class='fa-brands fa-github'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://linkedin.com/in/leliuc-robert-997a35232'
                    target='_blank'
                  >
                    <i class='fa-brands fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='contactForm'>
              <form onSubmit={onSubmit}>
                <h2>Send Message</h2>
                <div className='inputBox'>
                  <input type='text' name='name' required='required' />
                  <span>Full Name</span>
                </div>

                <div className='inputBox'>
                  <input type='text' name='email' required='required' />
                  <span>Email</span>
                </div>

                <div className='inputBox'>
                  <textarea required='required' name='message'></textarea>
                  <span>Type your Message...</span>
                </div>

                <div className='inputBox'>
                  <input type='submit' value='Send' />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
