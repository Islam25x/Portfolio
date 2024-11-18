import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // Form validation
        const formData = new FormData(form.current);
        const firstName = formData.get('froms_Fname');
        const lastName = formData.get('from_Lname');
        const email = formData.get('from_Email');
        const phone = formData.get('from_Phone');
        const service = formData.get('from_Service');
        const message = formData.get('message');

        if (!firstName || !lastName || !email || !phone || !service || !message) {
            return(toast.error(' Please fill out all the fields.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                }));
        }
        else{
            toast.success(' Thank you for your message. It has been sent.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                })
        }
            emailjs
            .sendForm('service_beyzz3s', 'template_opnb7dq', form.current, {
                publicKey: 'W43MeO7T7b-SxTlLn',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        };
        
    return (
        <section id='Contact'>
            <Container>
                <ToastContainer />
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className="left">
                            <div className="top" data-aos="fade-top">
                                <h2 className='title'>Let’s work together!</h2>
                                <p className='des'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                            </div>
                            <form ref={form} onSubmit={sendEmail} data-aos="fade-top">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <input type="text" name="froms_Fname"  placeholder='First Name'/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <input className='inp-right' type="text" name="from_Lname"  placeholder='Last Name'/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <input type="email" name="from_Email" placeholder='Email address'/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <input className='inp-right' type="text" name="from_Phone" placeholder='Phone number'/>
                                    </Col>
                                </Row>
                                <div className="select">
                                    <select name="from_Service" id="">
                                        <option value="">—Please choose an option—</option>
                                        <option value="Web Design">Web Design</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                    </select>
                                </div>
                                <textarea name="message" placeholder='Message'/>
                                <input className='btn' type="submit" value="Send Message" />
                            </form>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="right">
                            <div className="R-con d-flex" data-aos="fade-left">
                                <i class="fa-solid fa-phone"></i>
                                <div className="text">
                                    <p>Phone</p>
                                    <h5>+20 1004791339</h5>
                                </div>
                            </div>
                            <div className="R-con d-flex" data-aos="fade-left">
                                <i class="fa-regular fa-envelope"></i>
                                <div className="text">
                                    <p>Email</p>
                                    <h5>islam.salah.is08@gmail.com</h5>
                                </div>
                            </div>
                            <div className="R-con d-flex" data-aos="fade-left">
                                <i class="fa-solid fa-location-dot"></i>
                                <div className="text">
                                    <p>Address</p>
                                    <h5>Egypt,Cairo,Elnasr City</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact