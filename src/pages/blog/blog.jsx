import React from 'react';
import NavMenu from '../../component/navMenu';
import NavBlog from '../../component/navBlog';
import '../style/blog.css';
import study from '../../asset/course/study.jpg';
import MainSwiperBlog from './mainSwiperBlog';

class Blog extends React.Component {
    render() {
        return (
            <div className="container-blog">
                <div className="container-nav">
                    <NavMenu />

                </div>
                <NavBlog />
                <div className="row1">
                    <div className="blog-left1">
                        <div className="jumbo">
                            <img src={study} />
                            <h6>GROWTH & CULTURE</h6>
                            <h5>How Did You Become A Programmer?</h5>
                            <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                            <h6>Baca Artikel</h6>
                        </div>
                        <div className="row-jumbo">
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
                        </div>
                        <div className="row-jumbo">
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
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
                                <img src={study} />
                                <h6>ENGINEERING</h6>
                                <p>Bekerja Dengan Ticket: Bagian I</p>
                                <h6>Baca Artikel</h6>

                            </div>
                            <div className="artikel">
                                <img src={study} />
                                <h6>TIPS & TRICK</h6>
                                <p>10 Hal Penting Dalam Memilih Online Bootcamp</p>
                                <h6>Baca Artikel</h6>

                            </div>
                            <div className="badge-blog">Artikel Lain    <i class='fas fa-arrow-right'></i></div>

                        </div>
                    </div>

                </div>

                <div className="row2">
                    <div className="row-carousel">
                        <h3>Artikel Unggulan</h3>
                        <MainSwiperBlog />
                    </div>
                </div>
                <div className="row1">
                    <div className="blog-left1">

                        <div className="row-jumbo">
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
                        </div>
                        <div className="row-jumbo">
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
                            <div className="jumbo-child">
                                <img src={study} />
                                <h6>GROWTH & CULTURE</h6>
                                <h5>How Did You Become A Programmer?</h5>
                                <p>Post Categories Blog Engineering Profile Tutorial Tips & Trick Growth & Culture Newsroom Promo X Case Studies Training PT Gigaming Intermedia Solusindo BY Isna | July 16, 2020 Setiap kali</p>
                                <h6>Baca Artikel</h6>
                            </div>
                        </div>
                    </div>
                    <div className="blog-right1">

                        <div className="blog-case">
                            <h5>CASE STUDIES</h5>
                            <div className="artikel">
                                <img src={study} />
                                <h6>ENGINEERING</h6>
                                <p>Bekerja Dengan Ticket: Bagian I</p>
                                <h6>Baca Artikel</h6>

                            </div>
                            <div className="artikel">
                                <img src={study} />
                                <h6>TIPS & TRICK</h6>
                                <p>10 Hal Penting Dalam Memilih Online Bootcamp</p>
                                <h6>Baca Artikel</h6>

                            </div>
                            <div className="badge-blog">Artikel Lain    <i class='fas fa-arrow-right'></i></div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Blog;