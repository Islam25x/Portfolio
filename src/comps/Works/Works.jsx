import {React,useEffect,useState }from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

import './Works.css'
const Works = () => {
    const [Projects , setProjects] = useState([]);
        const [active, setActive] = useState('All');

    useEffect(()=>{
        axios.get('data.json')
        .then((res)=>{
            setProjects(res.data.R_Project)
        })
    },[])

    const filterPro =
    active === 'All'
        ? Projects
        : Projects.filter((project) => project.type === active);

        const handleClick = (category) => {
            setActive(category);
        };
    return (
        <section id='Works'>
            <Container>
                <h1 className="title text-center" data-aos="fade-up">My Recent Works</h1>
                <nav className='d-flex justify-content-center'>
                    <div className="list d-flex">
                        {
                            ['All', 'Web', 'UI/UX'].map((category) => (
                            <p
                            key={category}
                            className={active === category ? 'active' : ''}
                            onClick={() => handleClick(category)}
                            >
                            {category}
                            </p>
                        ))}
                    </div>
                </nav>
                <Row>
                    {
                        filterPro.slice(0,4).map((project)=>(
                            <Col lg = {6} md={12} sm={12}>
                                <div key={project.id} className="Projects" data-aos="fade-up">
                                    <img key={project.id} src={project.image} alt="" />
                                    <a className="link d-flex justify-content-between" key={project.id} href={project.projectLink}>
                                        <div className="text">
                                            <h3 className="l-title" key={project.id}>{project.projectName}</h3>
                                            <p>Project was about precision and information....</p>
                                        </div>
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </a>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Works