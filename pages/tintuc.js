import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';
import Link from 'next/link';
export default function Tintuc() {
    return (
        <div>
            <Head>
                <link href="static/style/style-tintuc.css" rel="stylesheet" />
                <title>Tamdaoweb-Tin tức</title>
            </Head>
            <Menu />
            <section>
                <div className="section1">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                            <li className="breadcrumb-item"><a href="tintuc.html">Tin Tức</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Bài Viết</li>
                        </ol>
                    </nav>
                    <div className=" row noidung">
                        <div className="col-sm-8 p-3">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <img src="./static/img/camnhan.jpg" className="img-fluid" />
                                </div>
                                <Link href='tintuc-baiviet'>
                                    <div className="col-sm-6 ">

                                        <a href="tintuc-baiviet.html" className="link">CÙ LAO TÂN PHONG: TIẾNG GỌI MIỆT VƯỜN </a>
                                        <p style={{ marginBottom: '0.4rem' }}>19/06/2019</p>
                                        <hr />
                                        <p className="nd">Không mùi phố thị, giữa lòng cù lao xanh biếc, những mái nhà xinh xinh của nếp
                                          sống dung dị... Về với Tân Phong là về theo "tiếng gọi miệt vườn", về với thuở ấu thơ,
                                          nơi làng quê mộc mạc, hiền lành chân chất.
                                    </p>

                                    

                                    <a href="tintuc-baiviet.html" style={{ color: '#A53636 !important' }}>Đọc tiếp...</a>
                                </div>
                                </Link>
                            </div>
                            <hr id="g" />
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <img src="./static/img/caumay.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 ">
                                    <a href="tintuc-baiviet.html" className="link">CINQUE TERRE - “CHẠM” VÀO GIẤC MƠ CỔ TÍCH
            </a>
                                    <p style={{ marginBottom: '0.4rem' }}>19/06/2019</p>
                                    <hr />
                                    <p className="nd">Khám phá 'CINQUE TERRE' thiên đường các loài hoa....
            </p>
                                    <a href="tintuc-baiviet.html" style={{ color: '#A53636 !important' }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <hr id="g" />
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="./static/img/chauau.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 ">
                                    <a href="tintuc-baiviet.html" className="link">Du lịch Châu Âu-những địa điểm đẹp nào đáng giá?                          </a>
                                    <p style={{ marginBottom: '0.4rem' }}>19/06/2019</p>
                                    <hr />
                                    <p className="nd">Châu Âu – Vùng đất của những câu chuyện tình yêu bất hủ, nơi mà những bản tình
                                      ca lừng danh ra đời và là nơi có vẻ đẹp cổ điển đậm đà theo năm tháng.
            </p>
                                    <a href="tintuc-baiviet.html" style={{ color: '#A53636 !important' }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <hr id="g" />
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <img src="./static/img/maroc.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 ">
                                    <a href="tintuc-baiviet.html" className="link">Du lịch Maroc: Khám phá những khu phố cổ đồ sộ
            </a>
                                    <p style={{ marginBottom: '0.4rem' }}>19/06/2019</p>
                                    <hr />
                                    <p className="nd">Maroc là quốc gia Châu Phi duy nhất hiện không là thành viên của Liên Minh
                                      Châu Phi nhưng lại là thành viên của Liên đoàn Ả Rập.
            </p>
                                    <a href="tintuc-baiviet.html" style={{ color: '#A53636 !important' }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <hr id="g" />
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <img src="./static/img/tin3.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 ">
                                    <a href="#" className="link">Du lịch Pháp: Xin visa du lịch pháp có khó không?
            </a>
                                    <p style={{ marginBottom: '0.4rem' }}>19/06/2019</p>
                                    <hr />
                                    <p className="nd">Trước khi khởi hành đi tour du lịch Pháp và các nước châu Âu, vấn đề khiến mỗi
                                      người trong chúng ta ai ai cũng đau đầu nhất là visa Pháp cũng như tâm lý hoang mang khi
                                      nhiều bạn có hồ sơ đẹp mà vẫn trượt visa.
            </p>
                                    <a href="tintuc-baiviet.html" style={{ color: '#A53636 !important' }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <hr id="g" />
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <img src="./static/img/tin4.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 ">
                                    <a href="#" className="link">Top 7 những hang động đẹp nhất Vịnh Hạ Long
            </a>
                                    <p style={{ marginBottom: '0.4rem' }}>19/06/2019</p>
                                    <hr />
                                    <p className="nd">Thành phố Hạ Long – biểu tượng của ngành du lịch Việt Nam, đã từ lâu đây là
                                      điểm đến tham quan của rất nhiều những du khách yêu thích vẻ đẹp của vịnh biển.
            </p>
                                    <a href="tintuc-baiviet.html" style={{ color: '#A53636 !important' }}>Đọc tiếp...</a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-4 nd-side">
                            <h5 className="t">Đang quan tâm</h5>
                            <hr />
                            <div className="row nd-side2">
                                <div className="col-sm-6 dqt ">
                                    <img src="./static/img/tintuc2.png" alt className="img-fluid" />
                                </div>
                                <div className="col-sm-6 dqt2 p-1">
                                    <p className="nd2">Khám phá quán cà phê mà Thư và Vũ (Về nhà đi con) hẹn hò ở Tam Đảo...</p>
                                    <a href="tintuc-baiviet.html" className="link" style={{ color: '#A53636 !important', fontSize: 12 }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <div className="row nd-side2">
                                <div className="col-sm-6 dqt ">
                                    <img src="./static/img/tin4.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 dqt2 p-1">
                                    <p className="nd2">Khám phá Top 7 những hang động đẹp nhất Vịnh Hạ Long.</p>
                                    <a href="tintuc-baiviet.html" className="link" style={{ color: '#A53636 !important', fontSize: 12 }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <div className="row nd-side2">
                                <div className="col-sm-6 dqt ">
                                    <img src="./static/img/tin3.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 dqt2 p-1">
                                    <p className="nd2">Du lịch Pháp: Xin visa du lịch pháp có khó không?</p>
                                    <a href="tintuc-baiviet.html" className="link" style={{ color: '#A53636 !important', fontSize: 12 }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <div className="row nd-side2">
                                <div className="col-sm-6 dqt ">
                                    <img src="./static/img/tin2.png" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 dqt2 p-1">
                                    <p className="nd2">Du lịch Maroc: Khám phá những khu phố cổ đồ sộ.</p>
                                    <a href="tintuc-baiviet.html" className="link" style={{ color: '#A53636 !important', fontSize: 12 }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <div className="row nd-side2">
                                <div className="col-sm-6 dqt ">
                                    <img src="./static/img/caumay.jpg" className="img-fluid" />
                                </div>
                                <div className="col-sm-6 dqt2 p-1">
                                    <p className="nd2">CINQUE TERRE - “CHẠM” VÀO GIẤC MƠ CỔ TÍCH</p>
                                    <a href="#" className="link" style={{ color: '#A53636 !important', fontSize: 12 }}>Đọc tiếp...</a>
                                </div>
                            </div>
                            <h5 className="t2">Ảnh đẹp</h5>
                            <hr />
                            <div className="row ">
                                <div className="col-sm-12 nd-side3">
                                    <p className="title-img">Tây Thiên-Vĩnh Phúc</p>
                                    <hr className="hr" />
                                    <div id="carouselExampleInterval5" className="carousel slide hide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-interval={40000}>
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval={4000}>
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl3.jpg" className="card-img-top" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl1.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl2.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl4.jpg" className="card-img-top" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleInterval5" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleInterval5" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 nd-side3">
                                    <p className="title-img">Tây Đảo từ trên cao</p>
                                    <hr className="hr" />
                                    <div id="carouselExampleInterval" className="carousel slide hide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-interval={80000}>
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/bx07.png" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval={8000}>
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/bx04.jpg" className="card-img-top" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl3.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl2.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl4.jpg" className="card-img-top" alt="..." />
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
                                </div>
                                <div className="col-sm-12 nd-side3">
                                    <p className="title-img">Món ngon Vĩnh Phúc</p>
                                    <hr className="hr" />
                                    <div id="carouselExampleInterval1" className="carousel slide hide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-interval={10000}>
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/mongon3.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval={1000}>
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/mongon.jpg" className="card-img-top" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/monngon1.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/monngon2.jpg" className="img-fluid" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-interval="...">
                                                <div className="row">
                                                    <div className="col-sm-12 ks">
                                                        <img src="./static/img/tvtl4.jpg" className="card-img-top" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleInterval1" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleInterval1" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example" className="example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <Footer />
        </div>
    )
}