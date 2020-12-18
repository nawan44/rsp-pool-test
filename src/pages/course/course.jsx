import React from 'react';
import '../style/course.css';
import frame from '../../asset/course/frame.png';
import study from '../../asset/course/study.jpg';
import Erdi from '../../asset/course/Erdi.jpg';
import Firhat from '../../asset/course/Firhat.jpg';
import frame31 from '../../asset/course/Frame-3-1.png';
import HeaderCourse from './headerCourse.jsx';

const imgStudy = {
    width: '68%'
}
class Course extends React.Component {
    render() {
        return (
            <div>
                <HeaderCourse />
                <div className="container-course">
                    <div className="content-course1">
                        <div className="content-course1-left">
                            <h5>Bagaimana Refactory Course membantu <span>meningkatkan skill</span> anda</h5>
                            <div className="badge1" >Pelajari lebih</div>
                        </div>
                        <div className="content-course1-right">
                            <img src={frame} />
                        </div>
                    </div>
                    <div className="content-course2">
                        <div className="content-course2-left">
                            <h4>Kursus pemrograman untuk semua orang tanpa terkecuali</h4>
                            <p>Refactory Course dirancang untuk memudahkan setiap orang mampu meningkatkan keahlian dalam software engineering tanpa dibatasi oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun usia.</p>

                            <p>Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi keahlian yang sudah diperoleh dalam studi sehingga dapat membuka kesempatan tak terbatas pada karir software engineering.</p>

                            <p>Bagi karyawan atau tenaga profesional, Refactory Course dapat meningkatkan keahlian software engineer dalam menunjang menyelesaikan tugas pekerjaannya tanpa khawatir dengan keterbatasan waktu.</p>

                            <p>Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk meningkatkan keahlian sehingga mampu berkarya dan mendapat keuntungan karir tanpa khawatir mahalnya belajar.</p>
                            <p><div className="badge1" >Daftar Sekarang</div></p>
                        </div>
                        <div className="content-course2-right">
                            <img src={study} style={imgStudy} />
                        </div>
                        <div className="graduate-content">
                            <h4>MEET OUR GRADUATES</h4>
                            <h4>Review</h4>
                            <h4>Read what our alumni said on <span>Course Report</span></h4>
                        </div>
                    </div>
                    <div className="content-course3">
                        <div className="content-testi">
                            <div className="testi">
                                <img src={Firhat} className="person-img" />
                                <div class="w3-container">
                                    <h4><b>MUHAMMAD FIRHAT</b></h4>
                                    <h5>The other boss</h5>
                                    <div className="star">
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                    </div>
                                    <h6>Recommended Bootcamp</h6>
                                    <p>Refactory adalah game changer untuk belajar pemrograman. Kalau Anda yakin pada karir pemrograman, Refactory harus menjadi tempat pertama yang Anda tuju. Anda akan dilatih oleh Mentor yang Ahli di bidangnya. Refactory tidak hanya memberikan kurikulum terbaru, tetapi juga akan meberikan pengalaman studi kasus dan lingkungan pemrograman secara real menyesuaikan dunia bisnis saat ini. Refactory memang luar biasa!</p>
                                </div>
                            </div>
                            <div className="testi">
                                <img src={Erdi} className="person-img" />
                                <div class="w3-container">
                                    <h4><b>ERDIANSYAH</b></h4>
                                    <h5>The other boss</h5>
                                    <div className="star">
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                        <i class='fas fa-star'></i>
                                    </div>
                                    <h6>Recommended Bootcamp</h6>
                                    <p>Di Refactory saya mendapatkan lebih banyak dari standar saya. Saya tidak pernah membayangkan hanya dalam tiga bulan saya memiliki akun GitHub dengan kontribuasi lebih dari 500 poin dari yang sebelumnya tidak aktif. Saya terlibat dalam 4 real project besar dari client internasional. Saya juga dapat memberikan beberapa kontribusi untuk proyek open source, dan itu menyenangkan.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="content-course4">
                        <div className="content-course4-left">
                            Ready to start Learning?
                    </div>
                        <div className="content-course4-right">
                            <div className="badge-middle" >Daftar Sekarang</div>
                        </div>
                    </div>
                    <div className="content-course5">
                        <h6>LANGKAH MUDAH</h6>
                        <div className="tagline">
                            <h5>Memulai Belajar di
                        <p>Refactory Course</p></h5>
                        </div>
                        <img src={frame31} />
                        <div className="badge-middle" >Pelajari Lebih</div>

                    </div>

                </div>
            </div>
        );
    }
}
export default Course;