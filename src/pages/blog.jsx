import React from 'react';
import NavBlog from '../component/navBlog';
import './css/blog.css';
import { Jumbotron, Button } from 'reactstrap';


class Blog extends React.Component {
    render() {
        return (
            <div>
                <NavBlog />
                <div className="blog-left1">
                    <div className="jumbo">
                        <h1 className="display-3">Hello, world!</h1>
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
                        <ul>
                            <li><i class='fab fa-linkedin'></i>Linkedin</li>
                            <li><i class='fab fa-facebook'></i>Facebook</li>
                            <li><i class='fab fa-instagram'></i>Instagram</li>
                            <li><i class='fab fa-youtube'></i>Youtube</li>
                        </ul>
                    </div>
                    <div className="blog-artikel-populer">
                        <h5>ARTIKEL POPULER</h5>
                    </div>
                </div>

            </div>
        );
    }
}
export default Blog;