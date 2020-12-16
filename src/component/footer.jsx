import React from 'react';
import '../style/component.css';
import { Container, Row, Col, Badge } from 'reactstrap';



class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content-detail" >
                        <h4>Site Map</h4>
                        <ul>
                            <li>Home</li>
                            <li>Bootecamp</li>
                            <li>Software Development</li>
                            <li>Courses</li>
                            <li>Custom Trainings</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer-content-detail">
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Career <span color="secondary">We’re Hiring</span> </li>
                            <li>Press Kit</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer-content-detail">
                        <h4>Connect</h4>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                    <div className="footer-content-allcontact">
                        <div className="footer-content-medsos">
                            <i class='fab fa-linkedin'></i>
                            <i class='fab fa-facebook'></i>
                            <i class='fab fa-youtube'></i>
                            <i class='fab fa-instagram'></i>
                        </div>
                        <div className="footer-address">
                            <div className="footer-content-company">
                                <h4>Company Address</h4>
                                <p>
                                    Jln. Palagan Tentara Pelajar
                                    Km. 9,8
                                    Ngaglik, Kab. Sleman
                                    DI Yogyakarta 55581
                        </p>
                            </div>
                            <div className="footer-content-contact">

                                <h4>Contact</h4>
                                <p>
                                    marketing@refactory.id
                                    +62 8122 8203 381
                        </p>
                                <p>
                                    Contact
                                    marketing@refactory.id
                                    +62 8122 8203 381

                                    Dewita: 0857 2582 7222
                                    Septin: 0878 2080 0206
                        </p>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copywright-footer">
                    <p> &copy; 2020 Refactory - All Rights Reserved - Terms of Services / Privacy Policy</p>
                </div>
            </div>
        );
    }
}
export default Footer;