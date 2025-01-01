import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

import './Skills.css';

const Skills = () => {
    const [Skills, setSkills] = useState([]);

    useEffect(() => {
        axios
            .get('skills.json')
            .then((res) => {
                setSkills(res.data.Skills);
            })
            .catch((err) => {
                console.error('Error fetching skills:', err);
            });
    }, []);

    return (
        <section id="Skills">
            <Container>
                <div className="top text-center" data-aos="fade-up">
                    <h1 className="title">My Skills</h1>
                    <p className="des">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                    </p>
                </div>

                <Row>
                    {Skills.map((Skill) => (
                        <Col lg={2} md={4} sm={6} key={Skill.id}>
                            <div className="skill" data-aos="fade-right">
                                <img src={Skill.image} alt={Skill.skillName} />
                            </div>
                            <p className="S-name text-center" data-aos="fade-right">{Skill.skillName}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
