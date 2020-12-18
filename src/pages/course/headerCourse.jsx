import React from 'react';
import '../css/home.css';
import NavMenu from '../../component/navMenu.jsx';


const badge = {
    width: '100%',
    margin: '50px 0 0 0',
}

class HeaderCourse extends React.Component {
    render() {
        return (
            <div className="header">
                <NavMenu />
                <div className="content-header">
                    <h1>Tingkatkan <span>skill pemrograman</span> kapan pun, dimana pun.</h1>
                    <p>We’re a brand of passionate software engineers and educators with an engaging curriculum backed by real-world software projects ready to boost your career.</p>

                    <div style={badge}>
                        <div className="badge1">Masuk & Memulai Belajar</div>

                        <div className="badge2">Daftar Sekarang</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderCourse;