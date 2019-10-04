import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';
import Danhsachhotel from '../components/danhsachhotel';
export default function Dichvu() {
    return (
        <div>
            <Head>
                <link href="static/style/style-dichvu.css" rel="stylesheet" />
                <title>Tamdaoweb-Dịch vụ</title>
            </Head>
            <Menu />
            <section>
                <div className="section1">
                    <nav aria-label="breadcrumb" className="thanhtrang">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a style={{ color: '#0077cc !important' }}>Trang chủ</a></li>
                            <li className="breadcrumb-item"><a style={{ color: '#0077cc !important' }}>Dịch Vụ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Khách Sạn</li>
                        </ol>
                        <p style={{ paddingLeft: '1rem', opacity: '.7' }}>(Hiện có <b>22</b> hotel trống)</p>
                    </nav>
                    <Danhsachhotel />
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true" disabled style={{ opacity: '.7' }}>Previous</a>
                        </li>
                        <li className="page-item active"><a className="page-link" href>1</a></li>
                        <li className="page-item"><a className="page-link" href>2</a></li>
                        <li className="page-item"><a className="page-link" href>3</a></li>
                        <li className="page-item">
                            <a className="page-link" href>Next</a>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
}