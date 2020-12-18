import React from 'react';
import NavBlog from '../component/navBlog';
import './css/blog.css';
import { Jumbotron, Button } from 'reactstrap';
import study from '../asset/course/study.jpg';

class Blog extends React.Component {
    render() {
        return (
            <div className="container-blog">
                <NavBlog />
                <div className="blog-left1">
                    <div className="jumbo">
                        <img src={study} />
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </div>

                </div>
                <div className="blog-right1">
                    <div className="blog-medsos">
                        <h4>HUBUNGKAN DENGAN KAMI</h4>
                        <h3>Ikuti refactory</h3>

                        <div className="medsos">
                            <p><i class='fab fa-linkedin'></i>Linkedin</p>
                            <p><i class='fab fa-facebook'></i>Facebook</p>
                            <p><i class='fab fa-instagram'></i>Instagram</p>
                            <p><i class='fab fa-youtube'></i>Youtube</p>
                        </div>

                    </div>
                    <div className="blog-artikel-populer">
                        <h5>ARTIKEL POPULER</h5>
                        <div className="artikel">
                            <img />
                            <h6>ENGINEERING</h6>
                            <p>Bekerja Dengan Ticket: Bagian I</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Blog;