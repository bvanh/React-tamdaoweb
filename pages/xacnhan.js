import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';
import Link from 'next/link';
export default function Xacnhan() {
    return (
        <div>
            <Head>
                <link href="static/style/style-xacnhan.css" rel="stylesheet" />
                <title>Tamdaoweb-Xác nhận</title>
            </Head>
            <Menu />
            <section>
                <div className="thongtin2">
                    <img src="./static/img/ok.png" className="img-fluid" />
                    <h4>YÊU CẦU ĐẶT PHÒNG CỦA BẠN ĐÃ ĐƯỢC GỬI</h4>
                    <p>Cảm ơn bạn!<b>Bách Xanh House</b>sẽ chủ động liên hệ với quý khách trong vòng 30'để xác nhận phòng trống và hướng dẫn thanh toán.      </p>
                    <p><b>Kiểm tra các thông tin của bạn</b></p>
                </div>
                <div className="thongtin">
                    <div className="thongtin1">
                        <h5>Bách Xanh House<i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></h5>
                        <p style={{ margin: 0, fontSize: '.875rem' }}><img src="./static/img/pin-round.png" style={{ paddingRight: '1rem' }} />Khu 2 - thị trấn Tam Đảo - Tam Đảo - Vĩnh Phúc, Tam Ðảo, Việt Nam</p>
                        <p style={{ paddingTop: '1rem' }} id="check1">Ngày nhận phòng :</p>
                        <p>Tiền phòng :</p>
                    </div>
                </div>
                <div className="pre">
                    <a href="chitiet.html" className="pre"><i className="far fa-arrow-alt-circle-left" style={{ paddingRight: '.5rem' }} />Quay lại trang vừa xem</a>
                </div>
                <div className="h1">
                    <h1>Một Số Khách Sạn Lân Cận</h1>
                </div>
                <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                <div className="section3">
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval={100000}>
                                <div className="row">
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks15.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Anh Đức Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 480.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button type="button" className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks ">
                                        <img src="./static/img/ks16.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Ngọc Sơn Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 915.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button type="button" className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks06.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Cây Thông Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 3.500.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button type="button" className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Bách Xanh House</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 500.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button type="button" className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item " data-interval={2000000}>
                                <div className="row">
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks2.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Anh Đức Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><button type="button" className="btn-chitiet chitiet">Chi
                  tiết</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks ">
                                        <img src="./static/img/ks3.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Ngọc Sơn Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><button type="button" className="btn-chitiet chitiet">Chi
                  tiết</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Cây Thông Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><button type="button" className="btn-chitiet chitiet">Chi
                  tiết</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Bách Xanh House</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button type="button" className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="xemthem">
                        <a href="dichvu.html" className="text-xemthem">Xem Thêm<img src="./static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}