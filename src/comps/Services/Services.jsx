import React from 'react'
import  {Container} from 'react-bootstrap'
import './Services.css'
const Services = () => {
    return (
        <section id='Services'>
            <Container>
                <h1 className='title text-center' data-aos="fade-up">My Quality Services</h1>
                <p className='des text-center' data-aos="fade-up">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                <div className="list">
                    <ul>
                        <li data-aos="fade-up">
                            <a className='d-flex justify-content-between' href="x">
                                <div className="list-left d-flex">
                                    <span>01</span>
                                    <h3 className='S-title'>UI/UX Design</h3>
                                </div>
                                <p>Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...</p>
                                <div className='space'></div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </li>
                        <li data-aos="fade-up">
                            <a className='d-flex justify-content-between' href="x">
                                <div className="list-left d-flex">
                                    <span>02</span>
                                    <h3 className='S-title'>Web Design</h3>
                                </div>
                                <p>Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...</p>
                                <div className='space'></div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Services