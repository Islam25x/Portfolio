import {React,useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSpring,animated } from 'react-spring'

import './Home.css'
    
const Home = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setStartAnimation(true);
            } else {
                setStartAnimation(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    let Number = ({n})=>{
        const {number} = useSpring({
            from :{number: 0},
            number : n,
            delay: 200,
            config: {mass: 1, tension: 20, friction: 10},
        });
        return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
    }
    return (
        <section id='Home'>
            <Container>
            <p className='Hi'>Hi</p>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className="H-con" data-aos="fade-right">
                            <p className='name'>I am Islam</p>
                            <h1>Web Developer + UX Designer</h1>
                            <div className="H-photo">
                                <img src="imgs/person photo.jpg" alt="" />
                            </div>
                            <p className='H-des'>
                                I break down complex user experience problems to create integrity focussed solutions that connect billions of people
                            </p>
                            <div className="followMe d-flex">
                                <button>Download Cv <i class="fa-solid fa-download"></i></button>
                                <a href="https://www.facebook.com/profile.php?id=100073313929787">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/islam-salah-b111bb275/">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100073313929787">
                                    <i class="fa-brands fa-dribbble"></i>
                                </a>
                                <a href="https://github.com/Islam25x">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                    <div className="H-photo" data-aos="fade-left">
                                <img src="imgs\person photo.jpg" alt="" />
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="achieve d-flex">
                            <h1> <Number n={0} /> </h1>
                            <p>Years of Experience</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="achieve d-flex">
                            <h1> <Number n={20} /> </h1>
                            <p>Project Completed</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="achieve d-flex">
                            <h1> <Number n={22} /> </h1>
                            <p>Happy Clients</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="achieve d-flex">
                            <h1> <Number n={0} /> </h1>
                            <p>Years of Experience</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home