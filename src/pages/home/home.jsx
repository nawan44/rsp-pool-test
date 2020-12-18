import React from 'react';
import approval from '../../asset/img/material_approval.png';
import bolt from '../../asset/img/material_bolt.png';
import '../style/home.css';
import cnn from '../../asset/logo/cnn.png';
import medcom from '../../asset/logo/medcom.png';
import beritasatu from '../../asset/logo/beritasatu.png';
import kumparan from '../../asset/logo/kumparan.png';
import idntimes from '../../asset/logo/idntimes.png';
import viva from '../../asset/logo/viva.png';
import mediaindonesia from '../../asset/logo/media-indonesia.png';
import tribunnews from '../../asset/logo/tribunnews.png';
import jawapos from '../../asset/logo/jawa-pos.png';
import inilahcom from '../../asset/logo/inilahcom.png';
import HeaderHome from './headerHome';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <div className="container-home">
                    <div className="home-title1">Apa Yang Refactory Dapat Bantu?</div>
                    <div className="content-home1">
                        <div className="content-home1-left">
                            <img src={approval} />
                            <h3>Memperkuat Tim Engineer Anda</h3>
                            <p>Bisnis di jaman modern membutuhkan keterampilan pengembangan terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan course dan juga dapat menyediakan tim yang menangani kebutuhan digital Anda.</p>
                        </div>
                        <div className="content-home1-right">
                            <img src={bolt} />
                            <h3>Wujudkan Software Impian Anda</h3>
                            <p>Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda, membantu di setiap tahap mulai dari menyusun ide, melalui desain dan pengembangan aplikasi seluler, situs web dan aplikasi desktop, hingga peluncuran produk.</p>
                        </div>
                    </div>
                    <div className="content-home2">
                        <h5>INSIGHT TERBARU</h5>
                        <h3>Knowledge Sharing</h3>
                    </div>
                    <h6>Lihat Semua    <i class='fas fa-arrow-right'></i></h6>
                    <div className="content-home3">
                        <h4>AS SEEN ON</h4>
                        <div className="container-logo">
                            <img src={cnn} />
                            <img src={medcom} />
                            <img src={beritasatu} />
                            <img src={kumparan} />
                            <img src={idntimes} />
                            <img src={viva} />
                            <img src={mediaindonesia} />
                            <img src={tribunnews} />
                            <img src={jawapos} />
                            <img src={inilahcom} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Home;