import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

import './Works.css';

const Works = () => {
    const [Projects, setProjects] = useState([]);
    const [active, setActive] = useState('All');

    useEffect(() => {
        axios
            .get('data.json')
            .then((res) => {
                setProjects(res.data.R_Project);
            })
            .catch((err) => {
                console.error('Error fetching projects:', err);
            });
    }, []);

    const filterPro =
        active === 'All'
            ? Projects
            : Projects.filter((project) => project.type === active);

    const handleClick = (category) => {
        setActive(category);
    };

    return (
        <section id="Works">
            <Container>
                <h1 className="title text-center" data-aos="fade-up">My Recent Works</h1>
                <nav className="d-flex justify-content-center">
                    <div className="list d-flex">
                        {['All', 'Web', 'UI/UX'].map((category) => (
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
                    {filterPro.slice(0, 4).map((project) => (
                        <Col lg={6} md={12} sm={12} key={project.id}>
                            <div className="Projects" data-aos="fade-up">
                                <img src={project.image} alt={project.projectName} />
                                <a
                                    className="link d-flex justify-content-between"
                                    href={project.projectLink}
                                >
                                    <div className="text">
                                        <h3 className="l-title">{project.projectName}</h3>
                                        <p>Project was about precision and information....</p>
                                    </div>
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Works;
