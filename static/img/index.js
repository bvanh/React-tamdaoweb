const Index = () => (
    <div>


        <html lang="en">
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" type="text/css" href="style.css" />
            {/* Bootstrap CSS */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            {/* icon */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
            {/* font */}
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
            <title>Tam Đảo-Trang chủ</title>
            <header>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="img/facebook.png" className="icon1" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="img/instagram.png" className="icon1" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="img/twitter.png" className="icon1" /></a>
                    </li>
                </ul>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img src="./img/icon-mountain.png" alt="anh logo" />
                        <p className="text-menu">Tam Đảo-Travel</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item item1">
                                <a className="nav-link text-menu li-menu" href="#" style={{ color: '#3dd6ef!important' }}>Trang Chủ<p /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-menu li-menu" href="gioithieu.html">Giới Thiệu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-menu li-menu" href="dichvu.html">Dịch Vụ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-menu li-menu" href="tintuc.html">Tin Tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-menu li-menu" href="lienhe.html">Liên Hệ</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section>
                <div className="h1">
                    <h1>Địa Điểm Nổi Bật</h1>
                </div>
                <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                <div className="section1">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 pt-3 pb-3">
                            <div className="diadiem">
                                <img src="img/thaptruyenhinh.jpg " alt="thaptruyenhinh" className="img-fluid" />
                                <div className="tendiadiem">
                                    <div className="tendiadiem1">
                                        <p className="tendiadiem1-1">Tháp truyền hình</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xemthem">
                                <a href="gioithieu.html#tth" className="text-xemthem">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-3 pb-3">
                            <div className="diadiem">
                                <img src="img/quangio.jpg " alt="quangio" className="img-fluid" />
                                <div className="tendiadiem">
                                    <div className="tendiadiem1">
                                        <p className="tendiadiem1-1">Quán Gió</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xemthem">
                                <a href="gioithieu.html#qg" className="text-xemthem">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-3 pb-3">
                            <div className="diadiem">
                                <img src="img/thacbac.jpg " alt="thacbac" className="img-fluid" />
                                <div className="tendiadiem">
                                    <div className="tendiadiem1">
                                        <p className="tendiadiem1-1">Thác Bạc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xemthem">
                                <a href="gioithieu.html" className="text-xemthem">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-3 pb-3">
                            <div className="diadiem">
                                <img src="img/thienvientruclam.jpg " alt="thienvientruclam" className="img-fluid" />
                                <div className="tendiadiem">
                                    <div className="tendiadiem1">
                                        <p className="tendiadiem1-1">Thiền Viện Trúc Lâm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xemthem">
                                <a href="gioithieu.html" className="text-xemthem">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-3 pb-3">
                            <div className="diadiem">
                                <img src="img/nhathoda.jpg " alt="nhathoda" className="img-fluid" />
                                <div className="tendiadiem">
                                    <div className="tendiadiem1">
                                        <p className="tendiadiem1-1">Nhà Thờ Đá</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xemthem">
                                <a href="gioithieu.html#ntd" className="text-xemthem">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-3 pb-3">
                            <div className="diadiem">
                                <img src="img/caumay.jpg " alt="caumay" className="img-fluid" />
                                <div className="tendiadiem">
                                    <div className="tendiadiem1">
                                        <p className="tendiadiem1-1">Studio Cầu Mây</p>
                                    </div>
                                </div>
                            </div>
                            <div className="xemthem">
                                <a href="gioithieu.html" className="text-xemthem">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
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
                                    <img src="img/tintuc1.png" alt="anhtinctuc" width="100%" height="95%" />
                                </div>
                                <div className="col-sm-8 pl-0 tintuc">
                                    <h6 className="title-tintuc">Thị trấn Tam Đảo chìm trong màn sương dịp lễ Giỗ tổ, nhiều du khách thích thú
                chụp ảnh</h6>
                                    <p className="text-tintuc">Với vị trí rất đẹp và thuận lợi, quán cà phê Gió đã được rất nhiều bạn trẻ lựa chọn
                đến uống nước và chụp ảnh check in...</p>
                                    <a href="#">Đọc Tiếp...</a>
                                </div>
                                <div className="col-sm-4 pt-2">
                                    <img src="img/tintuc2.png" alt="anhtinctuc" width="100%" height="95%" />
                                </div>
                                <div className="col-sm-8 pt-2 pl-0 tintuc">
                                    <h6 className="title-tintuc">Hoá ra quán cà phê mà Thư và Vũ (Về nhà đi con) hẹn hò ở Tam Đảo chính là nơi
                check in "sống ảo" quen thuộc của giới trẻ</h6>
                                    <p className="text-tintuc">Với vị trí rất đẹp và thuận lợi, quán cà phê Gió đã được rất nhiều bạn trẻ lựa chọn
                đến uống nước và chụp ảnh check in...</p>
                                    <a href="#">Đọc Tiếp...</a>
                                </div>
                                <div className="col-sm-4 pt-2">
                                    <img src="img/tintuc3.png" alt="anhtinctuc" width="100%" height="95%" />
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
                            <a href="tintuc.html" target="_blank" className="text-xemthem">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                        </div>
                    </div>
                </div>
                <div className="h1">
                    <h1>Khách Sạn-Tam Đảo</h1>
                </div>
                <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                <div className="section3">
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval={100000}>
                                <div className="row">
                                    <div className="col-sm-3 ks">
                                        <img src="img/ks15.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Anh Đức Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 480.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                      tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks ">
                                        <img src="img/ks16.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Ngọc Sơn Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 915.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                      tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/ks06.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Cây Thông Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 3.500.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                      tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Bách Xanh House</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 500.000đ/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                      tiết</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item " data-interval={2000000}>
                                <div className="row">
                                    <div className="col-sm-3 ks">
                                        <img src="img/ks2.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Anh Đức Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                      tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks ">
                                        <img src="img/ks3.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Ngọc Sơn Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                      tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Cây Thông Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                      tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Bách Xanh House</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a href="chitiet.html" className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
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
                        <a href="dichvu.html" className="text-xemthem" target="_blank">Xem Thêm<img src="img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                    </div>
                </div>
                <div className="h1">
                    <h1>Cảm Nhận về Tam Đảo</h1>
                </div>
                <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                <div className="section4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                            <img src="img/camnhan.jpg" className="card-img-top img-camnhan" alt="anh-camnhan" />
                            <div className="text-camnhan">
                                <p style={{ marginBottom: '0 !important' }}>“ Tam Đảo cách Hà Nội không xa, vốn là một điểm nghỉ mát lý tưởng
              khi cái nắng nóng gay gắt của mùa hè khiến ai nấy đều ngột ngạt. Mùa hè, Tam Đảo tấp nập các ...’’</p>
                            </div>
                            <div className="ten-camnhan">
                                {/* <img src="img/icon10.png"> */}
                                <p className="ten-camnhan1"><img src="img/icon10.png" />Nguyễn Văn Tùng </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                            <img src="img/camnhan1.jpg" className="card-img-top img-camnhan" alt="..." />
                            <div className="text-camnhan">
                                <p style={{ marginBottom: '0 !important' }}>“Ở Tam Đảo, cũng có nhiều lễ hội, nơi đây Phật giáo được đào tạo một
              cách hệ thống và là nền tảng để đẩy mạnh giao lưu Phật giáo với các nước bạn’’</p>
                            </div>
                            <div className="ten-camnhan">
                                {/* <img src="img/icon11.png"> */}
                                <p className="ten-camnhan1"><img src="img/icon11.png" />Nguyễn Thị Thúy Hà </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                            <img src="img/camnhan2.jpg" className="card-img-top img-camnhan " alt="..." />
                            <div className="text-camnhan">
                                <p style={{ marginBottom: '0 !important' }}>"Life before Company was very chaotic — we got a lot of phone calls,
                                  a lot of mistyped orders. So with Company, the ability to see the order directly from the customer is
              bad."</p>
                            </div>
                            <div className="ten-camnhan">
                                {/* <img src="img/icon12.png"> */}
                                <p className="ten-camnhan1"><img src="img/icon12.png" />Trịnh Kim Chi</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-3 box-camnhan">
                            <img src="img/camnhan3.jpg" className="card-img-top img-circle" alt="..." />
                            <div className="text-camnhan">
                                <p style={{ marginBottom: '0 !important' }}>"Đến Tam Đảo, những người yêu thể thao, thích mạo hiểm đừng quên
              tham gia trekking đỉnh Rùng Rình nhé. Cảm giác khi chinh phục thành công đỉnh rất kích thích đó.."</p>
                                <div className="ten-camnhan">
                                    {/* <img src="img/icon10.png"> */}
                                    <p className="ten-camnhan1"><img src="img/icon10.png" />Lê Văn Phong</p>
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
                                        <img src="img/anhthuvien1.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/anhthuvien2.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/anhthuvien3.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/anhthuvien4.jpg" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval={4000}>
                                <div className="row">
                                    <div className="col-sm-3 ks">
                                        <img src="img/anhthuvien5.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/anhthuvien6.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/anhthuvien7.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="img/anhthuvien8.jpg" className="card-img-top" alt="..." />
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
            <footer>
                <div className="row footer">
                    <div className="col-sm-4 map diachi1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237668.46215686825!2d105.60187001338616!3d21.446113474791144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134e87a32044fcb%3A0xcb6b2ad2ed13ec5a!2zVGFtIMSQ4bqjbywgVsSpbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1562607171383!5m2!1svi!2s" width="100%" height="100%" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                    <div className="col-sm-6 map diachi">
                        <p className="text-footer"><b style={{ paddingRight: '1rem' }}>Địa chỉ:</b>Thị Trấn Tam Đảo-Hợp Châu-Vĩnh Phúc</p>
                        <p className="text-footer"><b style={{ paddingRight: '1rem' }}>Website:</b>http://tamdao.vinhphuc.vn</p>
                        <p className="text-footer"><b style={{ paddingRight: '1rem' }}>Điện thoại:</b>0211.3853831</p>
                        <p className="text-footer"><b style={{ paddingRight: '1rem' }}>Fax:</b>0211.3853831</p>
                        <p className="text-footer"><b style={{ paddingRight: '1rem' }}>Email:</b>ubndtamdao@vinhphuc.vn</p>
                    </div>
                    <div className="col-sm-2 p-0 icon-media">
                        <a className="nav-link link-media" href="#"><img src="img/facebook.png" className="icon-media" /><img src="img/instagram.png" className="icon-media" /><img src="img/twitter.png" className="icon-media" /></a>
                    </div>
                </div>
            </footer>
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </html>
    </div>

);

export default Index;