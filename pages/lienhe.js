import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';
import Link from 'next/link';
export default function Dichvu() {
    return (
        <div>
            <Head><link href="static/style/style-dichvu.css" rel="stylesheet" />
                <title>Tamdaoweb-Liên hệ</title>
            </Head>
            <Menu />
            <section>
                <div className="section1">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Liên hệ</li>
                        </ol>
                    </nav>
                    <div className=" row noidung">
                        <div className="col-sm-6 p-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237668.46215686825!2d105.60187001338616!3d21.446113474791144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134e87a32044fcb%3A0xcb6b2ad2ed13ec5a!2zVGFtIMSQ4bqjbywgVsSpbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1562607171383!5m2!1svi!2s" width="100%" height="100%" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                        </div>
                        <div className=" col-sm-6 p-3">
                            <p className="text-footer" style={{ color: 'black !important' }}><b style={{ paddingRight: '1rem' }}>Địa chỉ:</b>Thị Trấn Tam Đảo-Hợp Châu-Vĩnh Phúc</p>
                            <p className="text-footer" style={{ color: 'black !important' }}><b style={{ paddingRight: '1rem' }}>Website:</b>http://tamdao.vinhphuc.vn</p>
                            <p className="text-footer" style={{ color: 'black !important' }}><b style={{ paddingRight: '1rem' }}>Điện thoại:</b>0211.3853831</p>
                            <p className="text-footer" style={{ color: 'black !important' }}><b style={{ paddingRight: '1rem' }}>Số điện thoại cứu hộ:</b>112</p>
                            <p className="text-footer" style={{ color: 'black !important' }}><b style={{ paddingRight: '1rem' }}>Số an ninh trật tự:</b>113</p>
                            <p className="text-footer" style={{ color: 'black !important' }}><b style={{ paddingRight: '1rem' }}>Số điện thoại Y tế</b>115</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}