import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          'gmail',
          'template_eiuwq1r',
          form.current,
          'ulivM4tLF2ZrGmG2S'
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          form.current.reset();
          alert('Your email has been sent! Thank you and have a great day!');
        }, (error) => {
          console.log('FAILED...', error);
        });

        e.target.elements.user_name.value = '';
        e.target.elements.user_email.value = '';
        e.target.elements.message.value = '';
        e.target.elements.subject.value = '';

      };

    function handleClick(){
        alert('Your email has been sent! Thank you and have a great day!')
    }

return(

    <section id="contact">
    <h1 className="section-header">Contact</h1>

    <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
            <div className="col-sm-12">
            <input type="text" className="form-control" id="name" placeholder="NAME" name="user_name" required/>
        </div>
        </div>
        <div className="form-group">
            <div className="col-sm-12">
            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="user_email" required/>
        </div>
        </div>
        <div className="form-group">
            <div className="col-sm-12">
            <input type="text" className="form-control" id="subject" placeholder="SUBJECT" name="subject" required/>
        </div>
        </div>
        <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
            <i></i><span onClick={handleClick} className="send-text">send</span>
            </div>
        </button>
        </form>


        <div className="direct-contact-container">
            <ul className="contact-list">
            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place"> 🏠 Sometown, CA</span></i></li>
            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:678-999-8212" title="Give me a call"> 📞 (678) 999-8212</a></span></i></li>
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:contact@carcar.com" title="Send me an email"> 📧 contact@carcar.com</a></span></i></li>
            </ul>
            <hr />
            <div className="copyright">Created by Matthew Huff and Dahna Ahn</div>
        </div>
    </div>
    </section>

    )
}

export default Contact
