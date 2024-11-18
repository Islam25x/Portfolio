import {React,useEffect,useState}from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

import './Resume.css'

const Resume = () => {

    const [Resumes , setResumes] = useState([])

    useEffect(()=>{
        axios.get('Resume.json')
        .then((res)=>{
            setResumes(res.data.MyResumes)
        })
    },[])
    return (
        <section id='Resume'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="title d-flex" >
                            <i class="fa-solid fa-medal"></i>
                            <h2>My Experience</h2>
                        </div>
                        {
                            Resumes.filter((Resume)=> Resume.type === "Ex").map((Resume)=>(
                                <div className="con-box" >
                                    <p className='time'>{Resume.Date}</p>
                                    <h3 className='name'>{Resume.ExName}</h3>
                                    <p className='des'>{Resume.ExDes}</p>
                                </div>
                            ))
                        }
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="title d-flex" >
                        <i class="fa-solid fa-graduation-cap"></i>
                            <h2>My Education</h2>
                        </div>
                        {
                            Resumes.filter((Resume)=> Resume.type === "Edu").map((Resume)=>(
                                <div className="con-box" data-aos="fade-left">
                                    <p className='time'>{Resume.Date}</p>
                                    <h3 className='name'>{Resume.ExName}</h3>
                                    <p className='des'>{Resume.ExDes}</p>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Resume