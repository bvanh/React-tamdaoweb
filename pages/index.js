import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';
import Slideshow from '../components/carousel'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Head>
                    <link href="static/style/style-index.css" rel="stylesheet" />
                    <link href="static/style/style-menu.css" rel="stylesheet" />
                    <title>Tamdaoweb-Trang chủ</title>
                </Head>
                <Menu />
                <section>
                    <div className="h1">
                        <h1>Địa Điểm Nổi Bật</h1>
                    </div>
                    <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                    <div className="section1">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 pt-3 pb-3">
                                <div className="diadiem">
                                    <img src="./static/img/thaptruyenhinh.jpg " alt="thaptruyenhinh" className="img-fluid" />
                                    <div className="tendiadiem">
                                        <div className="tendiadiem1">
                                            <p className="tendiadiem1-1">Tháp truyền hình</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xemthem">
                                    <a href="gioithieu.html#tth" className="text-xemthem">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pt-3 pb-3">
                                <div className="diadiem">
                                    <img src="static/img/quangio.jpg " alt="quangio" className="img-fluid" />
                                    <div className="tendiadiem">
                                        <div className="tendiadiem1">
                                            <p className="tendiadiem1-1">Quán Gió</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xemthem">
                                    <a href="gioithieu.html#qg" className="text-xemthem">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pt-3 pb-3">
                                <div className="diadiem">
                                    <img src="static/img/thacbac.jpg " alt="thacbac" className="img-fluid" />
                                    <div className="tendiadiem">
                                        <div className="tendiadiem1">
                                            <p className="tendiadiem1-1">Thác Bạc</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xemthem">
                                    <a href="gioithieu.html" className="text-xemthem">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pt-3 pb-3">
                                <div className="diadiem">
                                    <img src="static/img/thienvientruclam.jpg " alt="thienvientruclam" className="img-fluid" />
                                    <div className="tendiadiem">
                                        <div className="tendiadiem1">
                                            <p className="tendiadiem1-1">Thiền Viện Trúc Lâm</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xemthem">
                                    <a href="gioithieu.html" className="text-xemthem">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pt-3 pb-3">
                                <div className="diadiem">
                                    <img src="static/img/nhathoda.jpg " alt="nhathoda" className="img-fluid" />
                                    <div className="tendiadiem">
                                        <div className="tendiadiem1">
                                            <p className="tendiadiem1-1">Nhà Thờ Đá</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xemthem">
                                    <a href="gioithieu.html#ntd" className="text-xemthem">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pt-3 pb-3">
                                <div className="diadiem">
                                    <img src="static/img/caumay.jpg " alt="caumay" className="img-fluid" />
                                    <div className="tendiadiem">
                                        <div className="tendiadiem1">
                                            <p className="tendiadiem1-1">Studio Cầu Mây</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xemthem">
                                    <a href="gioithieu.html" className="text-xemthem">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h1">
                        <h1>Tin Tức-Phượt</h1>
                    </div>
                    <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                    <div className="section2">
                        <div className="row">
                            <div className="col-lg-5 pl-4 pr-4 pt-2 pb-2">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GAeBmeYnOIQ" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            <div className="col-lg-7 pl-4 pr-4 pt-2 pb-2">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img src="static/img/tintuc1.png" alt="anhtinctuc" width="100%" height="95%" />
                                    </div>
                                    <div className="col-sm-8 pl-0 tintuc">
                                        <h6 className="title-tintuc">Thị trấn Tam Đảo chìm trong màn sương dịp lễ Giỗ tổ, nhiều du khách thích thú
                chụp ảnh</h6>
                                        <p className="text-tintuc">Với vị trí rất đẹp và thuận lợi, quán cà phê Gió đã được rất nhiều bạn trẻ lựa chọn
                đến uống nước và chụp ảnh check in...</p>
                                        <a href="#">Đọc Tiếp...</a>
                                    </div>
                                    <div className="col-sm-4 pt-2">
                                        <img src="static/img/tintuc2.png" alt="anhtinctuc" width="100%" height="95%" />
                                    </div>
                                    <div className="col-sm-8 pt-2 pl-0 tintuc">
                                        <h6 className="title-tintuc">Hoá ra quán cà phê mà Thư và Vũ (Về nhà đi con) hẹn hò ở Tam Đảo chính là nơi
                check in "sống ảo" quen thuộc của giới trẻ</h6>
                                        <p className="text-tintuc">Với vị trí rất đẹp và thuận lợi, quán cà phê Gió đã được rất nhiều bạn trẻ lựa chọn
                đến uống nước và chụp ảnh check in...</p>
                                        <a href="#">Đọc Tiếp...</a>
                                    </div>
                                    <div className="col-sm-4 pt-2">
                                        <img src="static/img/tintuc3.png" alt="anhtinctuc" width="100%" height="95%" />
                                    </div>
                                    <div className="col-sm-8 pt-2 pl-0 tintuc">
                                        <h6 className="title-tintuc">Kinh nghiệm phượt Tam Đảo</h6>
                                        <p className="text-tintuc">Phượt Tam Đảo gần đây đã trở thành một từ khoá hot trong danh sách tìm kiếm và thực
                                          hiện của các bạn trẻ bởi lẽ chuyến đi vừa dễ thực hiện, chi phí không cao mà khung cảnh nơi đây lại còn
                cực kì tuyệt vời.</p>
                                        <a href="#">Đọc Tiếp...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="xemthem">
                                <a href="tintuc.html" target="_blank" className="text-xemthem">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="h1">
                        <h1>Khách Sạn-Tam Đảo</h1>
                    </div>
                    <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                    <div className="section3">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <Slideshow />
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
                            <a href="dichvu.html" className="text-xemthem" target="_blank">Xem Thêm<img src="static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                        </div>
                    </div>
                    <div className="h1">
                        <h1>Cảm Nhận về Tam Đảo</h1>
                    </div>
                    <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                    <div className="section4">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                                <img src="static/img/camnhan.jpg" className="card-img-top img-camnhan" alt="anh-camnhan" />
                                <div className="text-camnhan">
                                    <p style={{ marginBottom: '0 !important' }}>“ Tam Đảo cách Hà Nội không xa, vốn là một điểm nghỉ mát lý tưởng
              khi cái nắng nóng gay gắt của mùa hè khiến ai nấy đều ngột ngạt. Mùa hè, Tam Đảo tấp nập các ...’’</p>
                                </div>
                                <div className="ten-camnhan">
                                    {/* <img src="static/img/icon10.png"> */}
                                    <p className="ten-camnhan1"><img src="static/img/icon10.png" />Nguyễn Văn Tùng </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                                <img src="static/img/camnhan1.jpg" className="card-img-top img-camnhan" alt="..." />
                                <div className="text-camnhan">
                                    <p style={{ marginBottom: '0 !important' }}>“Ở Tam Đảo, cũng có nhiều lễ hội, nơi đây Phật giáo được đào tạo một
              cách hệ thống và là nền tảng để đẩy mạnh giao lưu Phật giáo với các nước bạn’’</p>
                                </div>
                                <div className="ten-camnhan">
                                    {/* <img src="static/img/icon11.png"> */}
                                    <p className="ten-camnhan1"><img src="static/img/icon11.png" />Nguyễn Thị Thúy Hà </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                                <img src="static/img/camnhan2.jpg" className="card-img-top img-camnhan " alt="..." />
                                <div className="text-camnhan">
                                    <p style={{ marginBottom: '0 !important' }}>"Life before Company was very chaotic — we got a lot of phone calls,
                                      a lot of mistyped orders. So with Company, the ability to see the order directly from the customer is
              bad."</p>
                                </div>
                                <div className="ten-camnhan">
                                    {/* <img src="static/img/icon12.png"> */}
                                    <p className="ten-camnhan1"><img src="static/img/icon12.png" />Trịnh Kim Chi</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                                <img src="static/img/camnhan3.jpg" className="card-img-top img-circle" alt="..." />
                                <div className="text-camnhan">
                                    <p style={{ marginBottom: '0 !important' }}>"Đến Tam Đảo, những người yêu thể thao, thích mạo hiểm đừng quên
              tham gia trekking đỉnh Rùng Rình nhé. Cảm giác khi chinh phục thành công đỉnh rất kích thích đó.."</p>
                                    <div className="ten-camnhan">
                                        {/* <img src="static/img/icon10.png"> */}
                                        <p className="ten-camnhan1"><img src="static/img/icon10.png" />Lê Văn Phong</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h1">
                        <h1>Thư Viện Ảnh</h1>
                    </div>
                    <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                    <div className="section5">
                        <div id="carouselExampleInterval1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval={20000}>
                                    <div className="row">
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien1.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien2.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien3.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien4.jpg" className="card-img-top" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-interval={4000}>
                                    <div className="row">
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien5.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien6.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien7.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-3 ks">
                                            <img src="static/img/anhthuvien8.jpg" className="card-img-top" alt="..." />
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
                </section>
                <Footer />
            </div>

        )
    }
}
export default Index;