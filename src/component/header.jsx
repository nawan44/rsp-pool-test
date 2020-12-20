import React from 'react';
import '../style/component.css';
import NavMenu from './navMenu';


const badge = {
    width: '100%',
    margin: '50px 0 0 0',
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <NavMenu />
                <div className="content-header">
                    <h1>Empowering <span>People</span> Through Programming</h1>
                    <p>Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda.</p>

                    <div style={badge}>
                        <div className="badge1">Temukan Solusi Anda</div>

                        <div className="badge2">Tingkatkan Skill Anda</div>
                    </div>
                    <h4>PARTNER EKSKUSIF KAMI</h4>
                </div>

            </div>
        );
    }
}
export default Header;