import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';
import Link from 'next/link'
export default function Chitiet() {
    return (
        <div>
            <Head>
                <link href="static/style/style-chitiet.css" rel="stylesheet" />
                <title>Tamdaoweb-Chi tiết</title>
            </Head>
            <Menu />
            <section>
                <div className="section1">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a >Khách Sạn</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Chi tiết</li>
                        </ol>
                    </nav>
                    <div className="row carousel1">
                        <div className="col-sm-12">
                            <a rel="group" className="fancybox" data-fancybox="mygallery" href="./static/img/bx01.png"><img src="./static/img/bx01.png" className="img-fluid" style={{ width: '100%' }} /></a>
                        </div>
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner carousel3">
                                <div className="carousel-item active" data-interval={200000}>
                                    <div className="row">
                                        <div className="col-sm-2 ks">
                                            <a rel="group" className="fancybox" data-fancybox="mygallery" href="./static/img/ks4.jpg"><img src="./static/img/ks4.jpg" className="card-img-top" alt="..." /></a>
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <a rel="group" className="fancybox" data-fancybox="mygallery" href="./static/img/bx04.jpg"><img src="./static/img/bx04.jpg" className="card-img-top" alt="..." /></a>
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <a rel="group" className="fancybox" data-fancybox="mygallery" href="./static/img/bx05.jpg"><img src="./static/img/bx05.jpg" className="card-img-top" alt="..." /></a>
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/bx06.png" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/bx07.png" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/bx08.png" className="card-img-top" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-interval={40000}>
                                    <div className="row">
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/anhthuvien5.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/anhthuvien6.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/anhthuvien7.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/anhthuvien8.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/anhthuvien3.jpg" className="card-img-top" alt="..." />
                                        </div>
                                        <div className="col-sm-2 ks">
                                            <img src="./static/img/anhthuvien3.jpg" className="card-img-top" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" role="button" >
                                <span className="carousel-control-prev-icon" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" role="button" >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleInterval10" className="carousel slide carousel2" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval={200000}>
                            <div className="row">
                                <div className="col-sm-12 p-0 ks">
                                    <a rel="group" className="fancybox" href="./static/img/ks4.jpg"><img src="./static/img/ks4.jpg" className="card-img-top" alt="..." /></a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval={40000}>
                            <div className="row">
                                <div className="col-sm-12 p-0 ks">
                                    <a rel="group" className="fancybox" href="./static/img/bx04.jpg"><img src="./static/img/bx04.jpg" className="card-img-top" alt="..." /></a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval>
                            <div className="row">
                                <div className="col-sm-12 p-0 ks">
                                    <a rel="group" className="fancybox" href="./static/img/bx05.jpg"><img src="./static/img/bx05.jpg" className="card-img-top" alt="..." /></a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval>
                            <div className="row">
                                <div className="col-sm-12 p-0 ks">
                                    <a rel="group" className="fancybox" href="./static/img/bx06.png"><img src="./static/img/bx06.png" className="card-img-top" alt="..." /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev prev2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next prev2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="ten-ks">
                    <div className="btn1">căn hộ</div>
                    <h3 className="h3">Bách Xanh House</h3><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                </div>
                <div className="row tienich p-0">
                    <div className="col-sm-8">
                        <div className="vitri">
                            <img src="./static/img/pin-round.png" style={{ paddingRight: '1rem' }} /><b style={{ paddingRight: '.5rem', fontSize: '1.3rem !important' }}>Vị Trí:</b>
                            <div className="noidung vitri1">
                                <p style={{ margin: 0 }}>Khu 2 - thị trấn Tam Đảo - Tam Đảo - Vĩnh Phúc, Tam Ðảo, Việt Nam
            <a target="blank" href="https://www.google.com/maps/place/Tam+%C4%90%E1%BA%A3o,+V%C4%A9nh+Ph%C3%BAc,+Vi%E1%BB%87t+Nam/@21.4550606,105.4473747,11z/data=!3m1!4b1!4m5!3m4!1s0x3134e87a32044fcb:0xcb6b2ad2ed13ec5a!8m2!3d21.4747064!4d105.5708865" style={{ fontSize: '.8rem', color: 'red' }}>Xem bản đồ</a></p>
                            </div>
                        </div>
                        <div className="tienich1" style={{ paddingTop: '1rem' }}>
                            <div className="vitri vt1">
                                <img src="./static/img/eye.png" style={{ paddingRight: '1rem' }} /><b style={{ paddingRight: '.5rem', fontSize: '1.3rem !important' }}>Giới Thiệu:</b>
                            </div>
                            <div className="noidung">
                                <p style={{ margin: 0 }}>Bách Xanh House - căn villa 2 tầng nằm lưng chừng núi, ngay trên trục đường chính
                                  cách trung tâm thị trấn Tam Đảo 2km và cách khu nghỉ dưỡng Belvedere Resort 300m. Bách Xanh House có
                                  không gian rộng rãi với khoảng sân lớn cho trẻ nhỏ thỏa thích vui đùa, phòng khách có không gian thoáng
                                  đãng với view nhìn ra những dãy núi trùng điệp và thành phố nhỏ xinh, lung linh ánh đèn. Các tiện ích đi
                                  kèm của homestay cũng rất phong phú như sân BBQ rộng rãi, thoáng mát, có săn bếp nướng và than hoa luôn
                                  sẵn sàng phục vụ quý khách (tất cả đều free), phòng bếp có đầy đủ vật dụng và các loại gia vị như một
                                  gia đình. Bên cạnh đó các bạn cũng có thể đem theo đồ ăn để có thể tự chế biến hoặc sử dụng set ăn có
                                  sẵn trong Menu của nhà nhé! Ngoài ra Nhà còn có khu sinh hoạt chung cho khách yêu vô cùng thoải mái...
          </p>
                                <p style={{ paddingTop: '1rem', margin: 0 }}>Cách Bách Xanh House 100m là khu chụp ảnh Cầu Mây với rất nhiều cảnh
                                  sắc thiên nhiên phong phú. Tại nơi đây, du khách có thể hòa mình vào thiên nhiên hoang dã với hoa lá cỏ
                                  cây và cùng với những màn sương mù mờ ảo như cuốn lấy bước chân du khách khiến ai nấy đều có cảm giác
            như đang lạc mình giữa chốn bồng lai tiên cảnh. </p>
                            </div>
                        </div>
                        <div className="row tienich3" style={{ paddingTop: '1rem' }}>
                            <img src="./static/img/eye.png" style={{ paddingRight: '1rem' }} /><b style={{ paddingRight: '.5rem', fontSize: '1.3rem' }}>Tiện
          Ích:</b>
                        </div>
                        <div className="row tienich2">
                            <div className=" row noidung2">
                                <div className="col-sm-4 p-0">
                                    <p className="tienich-nd"><i className="fas fa-parking" style={{ paddingRight: '.5rem' }} />Chỗ đậu xe
            </p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Nhà để xe
            </p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Chỗ đậu xe
            </p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Bãi đậu xe
              an toàn</p>
                                </div>
                                <div className="col-sm-4 p-0">
                                    <p className="tienich-nd tienich-nd2"><i className="fas fa-glass-cheers" style={{ paddingRight: '.5rem' }} />Tiện
              ích trong nhà</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Tivi 4k</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Wifi tốc độ
              cao</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Truyền hình
              cáp</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Phòng cách
              âm</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Két an toàn
            </p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Karaoke</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Điều hòa
              nhiệt độ</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Sân
              thượng/hiên</p>
                                </div>
                                <div className="col-sm-4 p-0">
                                    <p className="tienich-nd tienich-nd2"><i className="far fa-sun" style={{ paddingRight: '.5rem' }} />Ngoài trời và
              Tầm nhìn</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Hướng nhìn
              ra phố yên tĩnh</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Nhìn ra địa
              danh nổi tiếng</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Nhìn ra núi
            </p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Nhìn ra
              vườn</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Tầm nhìn ra
              khung cảnh</p>
                                </div>
                                <div className="col-sm-4 p-0 " id="noidung-an">
                                    <p className="tienich-nd tienich-nd2"><i className="far fa-sun" style={{ paddingRight: '.5rem' }} />Ngoài trời và
              Tầm nhìn</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Hướng nhìn
              ra phố yên tĩnh</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Nhìn ra địa
              danh nổi tiếng</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Nhìn ra núi
            </p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Nhìn ra
              vườn</p>
                                    <p style={{ fontSize: 14 }}><i className="far fa-check-circle" style={{ paddingRight: '.5rem' }} />Tầm nhìn ra
              khung cảnh</p>
                                </div>
                            </div>
                        </div>
                        <hr id="z" />
                        <button id="btn" onclick="anNoidung2()">Thêm tiện ích <i className="far fa-hand-point-down" style={{ paddingLeft: '.5rem' }} /></button>
                    </div>
                    <div className="col-sm-4">
                        <h5>Lịch trống phòng</h5>
                        <p style={{ opacity: '.7' }}>(Trong 1 tháng, giá có thể tăng vào dịp lễ.)</p>
                        <iframe src="https://calendar.google.com/calendar/embed?height=250&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FHo_Chi_Minh&src=YnYuYW5oMTk0QGdtYWlsLmNvbQ&src=dmkudmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%230B8043&showTitle=0&showNav=1&showTz=0&showCalendars=0&showTabs=1&showPrint=0" style={{ border: 'solid 1px #777' }} width="100%" height={250} frameBorder={0} scrolling="no" />
                        <div className="row form">
                            <form action="xacnhan.html" method="get">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput" style={{ fontSize: '1.2rem !important', marginBottom: '1rem' }}>Giá:<b style={{ fontSize: '1.5rem !important', color: '#e5e81c' }}>500.000/1đêm</b></label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" name="Họ và Tên" placeholder="Họ và Tên" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="formGroupExampleInput2" name="Số điện thoại" placeholder="Số điện thoại" required />
                                </div>
                                <div className="form-main">
                                    <div className="ui calendar form-date" id="date2">
                                        <div className="ui input left icon">
                                            <i className="calendar icon" />
                                            <input type="text" placeholder="Ngày nhận" name="Ngày nhận phòng" />
                                        </div>
                                    </div>
                                    <div className="ui calendar form-date date1" id="date">
                                        <div className="ui input left icon">
                                            <i className="calendar icon" />
                                            <input type="text" placeholder="Ngày trả" name="Ngày trả phòng" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <select className="custom-select" id="inlineFormCustomSelect" name="Số lượng khách">
                                        <option selected>Số lượng khách</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={3}>4</option>
                                        <option value={3}>4</option>
                                        <option value={3}>5</option>
                                        <option value={3}>6</option>
                                    </select>
                                </div>
                                <div className="btn-dk">
                                    <Link href='xacnhan'>
                                        <input type="submit" defaultValue="Đặt ngay" className="btn btn-primary" />
                                    </Link>
                                    <p className="form-btn">Gọi ngay 012345678 để được hỗ trợ 24/7</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="h1">
                    <h1>Một Số Khách Sạn Lân Cận</h1>
                </div>
                <hr style={{ width: '15rem', borderTop: '1px solid black', paddingBottom: '1rem' }} />
                <div className="section3">
                    <div id="carouselExampleInterval1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval={100000}>
                                <div className="row">
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks15.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Anh Đức Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 480.000đ/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks ">
                                        <img src="./static/img/ks16.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Ngọc Sơn Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 915.000đ/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks06.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Cây Thông Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 3.500.000đ/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Bách Xanh House</a>
                                        <div className="gia-ks">
                                            <p className="gia">Từ 500.000đ/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
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
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks ">
                                        <img src="./static/img/ks3.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Ngọc Sơn Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Cây Thông Hotel</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 ks">
                                        <img src="./static/img/ks4.jpg" className="card-img-top" alt="..." />
                                        <a href="#" className="card-title">Bách Xanh House</a>
                                        <div className="gia-ks">
                                            <p className="gia">Giá từ 1000d/1 đêm</p><a  className="btn-chitiet chitiet"><button className="btn-chitiet">Chi
                    tiết</button></a>
                                        </div>
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
                    <div className="xemthem">
                        <a href="khachsan.html" className="text-xemthem" target="_blank">Xem Thêm<img src="./static/img/arrow.png" style={{ paddingLeft: 5, paddingBottom: 5 }} /></a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}