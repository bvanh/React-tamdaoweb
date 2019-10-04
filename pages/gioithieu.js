import Menu from '../components/menu';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Gioithieu() {
    return (
        <div>
            <Head>
                <link href="static/style/style-gioithieu.css" rel="stylesheet" />
                <link href="static/style/style-menu.css" rel="stylesheet" />
                <title>Tamdaoweb-Giới thiệu</title>
            </Head>
            <Menu />
            <section>
                <div className="section1">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Giới Thiệu</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="menu">
                                <p><a href="#c1">1.Giới Thiệu về Tam Đảo</a></p>
                                <p><a href="#c2">2.Tới Tam Đảo bằng cách nào</a></p>
                                <p style={{ marginBottom: '0 !important' }}><a href="#c3">3.Ăn-Chơi Tam Đảo</a></p>
                            </div>
                            <div className="gt">
                                <p><b>Tam Đảo với khí hậu thoáng mát, phong cảnh hữu tình từ lâu đã là một địa điểm du lịch được
                                    không ít người ưa thích và lựa chọn cho kì nghỉ của mình. Giờ hãy cùng “giắt túi” cho
              mình những kinh nghiệm du lịch Tam Đảo mới nhất qua bài viết sau nhé! </b></p>
                            </div>
                            <div className="noidung">
                                <h4 id="c1">1.Về Tam Đảo</h4>
                                <p>Tam Đảo nằm cách thành phố Hà Nội khoảng 80km, nơi đây được người Pháp phát hiện và tiến hành
                                  cải tạo từ những năm cuối thế kỷ XIX. Hàng loạt những công trình như: biệt thự, sàn nhảy, bể
                                  bơi, sân chơi, khách sạn ở Tam Đảo cùng nhà hàng sầm uất được xây dựng lên, nhưng trải qua
            bao thăng trầm lịch sử cũng không còn lại bao nhiêu.</p>
                                <img src="./static/img/thuvien1.jpg" className="img-fluid" />
                                <p style={{ paddingTop: '.5rem' }}>Thị trấn Tam Đảo có diện tích hơn 214ha, gồm 2 thôn, trong đó, đa
                                  phần những địa điểm du lịch nổi tiếng đều nằm ở thôn 1. Khu du lịch Tam Đảo được bao bọc bởi
                                  những cánh rừng nguyên sinh nên có khí hậu mát mẻ, kết hợp với cảnh sắc thiên nhiên vừa thơ
            mộng, vừa huyền ảo đem lại cho du khách nhiều cung bậc cảm xúc.</p>
                                <p>Thời tiết ở Tam Đảo đem đến cho du khách nhiều trải nghiệm độc đáo như những cơn gió xuân khe
                                  khẽ thổi lúc buổi sớm, trưa đến kéo theo những tia nắng ấm của mùa hạ, buổi chiều đến phảng
                                  phất những cơn gió heo may gọi mùa thu về và khi màn đêm chợt buông xuống mang theo chút giá
                                  lạnh của ngày đông. Vì vậy lựa chọn một khách sạn ở Tam Đảo để nghỉ ngơi, thư giãn là điều
            du khách chắc chắn không thể bỏ qua.</p>
                                <h4 id="c2">2.Tới Tam Đảo bằng cách nào?</h4>
                                <p>Để di chuyển tới Tam Đảo, các bạn có thể lựa chọn nhiều loại hình phương tiện khác nhau:</p>
                                <p style={{ marginBottom: '.5rem !important', paddingLeft: '1rem' }}> *Với ô tô riêng và xe máy: Các
                                  bạn đi theo hướng Cầu Thăng Long hướng Bắc Thăng Long Nội bài -&gt; đi khoảng 25 km đến đoạn
                                  giao giữa quốc lộ 2 và đường AH 4 với đường Bắc Thăng Long Nội Bài -&gt; Các bạn rẽ trái để đi
                                  đường quốc lộ 2 khoảng 200m -&gt; rẽ tiếp đường quốc lộ Hà Nội – Lào Cai khoảng 25 km -&gt; đến
                                  chỗ vòng xuyến huyện Tam Dương, tỉnh Vĩnh Phúc, các bạn đi theo hướng đường quốc lộ 2B
            khoảng 20 km nữa là đến khu trung tâm của Tam Đảo</p>
                                <p style={{ marginBottom: '.5rem !important', paddingLeft: '1rem' }}> *Với xe buýt: Các bạn lựa chọn xe
                                  58 (điểm trung chuyển Long Biên) hoặc xe 07 (điểm trung chuyển Cầu Giấy) tới Mê Linh Plaza.
                                  Sau đó các bạn bắt tiếp xe 01 tới bến xe Vĩnh Yên. Sau đó các bạn bắt tuyến xe 07 từ Vĩnh
                                  Yên tới Tây Thiên. Trên đường đi, các bạn nhớ nhờ anh phụ xe dừng ở điểm đỗ gần Tam Đảo nhất
          </p>
                                <p style={{ marginBottom: '.5rem !important', paddingLeft: '1rem' }}> * Với xe khách: Các bạn có thể
                                  bắt xe ở bến xe Mỹ Đình đi chuyến Hà Nội – Vĩnh Yên, Hà Nội – Yên Bái, Hà Nội – Việt Trì, xe
                                  sẽ chạy đến thành phố Vĩnh Yên. Từ Vĩnh Yên, các bạn bắt taxi hoặc xe ôm để lên tới Tam Đảo.
          </p>
                                <img src="./static/img/camnhan4.jpg" className="img-fluid" />
                                <h4 style={{ margin: 0, paddingTop: '1rem' }} id="c3">3.Ăn Chơi Tam Đảo</h4>
                                <h6 style={{ marginTop: '.5rem' }}>3.1 Những địa điểm đẹp</h6>
                                <h6><i className="fas fa-signal" style={{ paddingRight: '0.5rem' }} /><b id="tth">Tháp truyền hình</b></h6>
                                <p>Cao 93 m trên đỉnh Thiên Nhị với độ cao 1.375 m. Ðường đi lên tuy vất vả nhưng lãng mạn, nên
                                  thơ. Dọc đường lên là hoa phong lan, hoa cúc quỳ và các loài hoa dại không tên khác nở đầy
                                  lối đi, tỏa hương thơm lạ, mầu sắc rực rỡ… Lên tới đỉnh, phóng tầm mắt ra bốn phía là mênh
            mông trời, đất, gió, mây…</p>
                                <img src="./static/img/thaptruyenhinh2.jpg" className="img-fluid" />
                                <p style={{ paddingTop: '.5rem' }}>Để chinh phục tòa tháp bạn cần leo hết 1.394 bậc thang đá, đường
                                  đi tuy vất vả nhưng khi chứng kiến cảnh sắc đẹp nên thơ, nên họa ở nơi đây sẽ khiến bạn quên
                                  hết đi mệt mỏi. Dọc đường đi là vô vàn loài hoa khoe sắc thắm, ong bướm bay thành từng đàn…
                                  Đặc biệt là khung cảnh tháp truyền hình ẩn hiện trong màn sương huyền ảo sẽ khiến các bạn
            thích mê cho mà xem. Nhớ chuẩn bị máy ảnh để “tác nghiệp” nhé.</p>
                                <h6><i className="fas fa-building" style={{ paddingRight: '0.5rem' }} /><b id="qg">Quán Gió</b></h6>
                                <p>Đây là quán cafe vô cùng độc đáo mà đến Tam Đảo các bạn nhất định phải ghé thăm một lần. Sở
                                  dĩ được gọi là quán Gió bởi nơi đây được xây dựng nằm nhô ra trên những vách núi cheo leo và
                                  không có mái che, nhưng ngồi tuyệt không có cảm giác nắng nóng khó chịu do những cơn gió dịu
            mát từ phía dưới núi thổi lên.</p>
                                <img src="./static/img/quangio1.jpg" className="img-fluid" />
                                <p style={{ paddingTop: '.5rem' }}>Đến với nơi đây bạn sẽ được trải nghiệm cảm giác kích thích như
                                  được lơ lửng giữa trời mây vô cùng thú vị. Lưu ý rằng bạn nên đến sớm nếu muốn có view đẹp
            vì quán không có nhiều chỗ ngồi.</p>
                                <img src="./static/img/quangiohoanghon.jpg" className="img-fluid" />
                                <p style={{ paddingTop: '.5rem' }}>Hoàng hôn trên Tam đảo!</p>
                                <h6><i className="fas fa-synagogue" style={{ paddingRight: '0.5rem' }} /><b id="ntd">Nhà thờ đá</b></h6>
                                <p>Nhà thờ đá cổ Tam Đảo được xây dựng từ năm 1906 ngay đường lên núi Thiên Nhị. Ban đầu đây chỉ
                                  là mô hình nhà sàn lợp lá được người Pháp dựng lên. Mãi đến năm 1937 nhà thờ mới được xây
            dựng kiên cố lại bằng đá theo lối kiến trúc Gothic điển hình.</p>
                                <img src="./static/img/nhathoda3.jpg" className="img-fluid" />
                                <p style={{ paddingTop: '.5rem' }}>Đây là một trong số những công trình kiến trúc cổ ở Tam Đảo còn
                                  tồn tại sau sự tàn phá của chiến tranh. Nhà thờ cổ sẽ là điểm đến khá thú vị trong hành
                                  trình khám phá Tam Đảo của bạn, khách sạn gần nhà thờ đá cổ Tam Đảo là lựa chọn tuyệt vời
                                  cho bạn không chỉ ngắm nhìn được toàn cảnh Tam Đảo huyền bí, mộng mơ mà còn có thể sáng tạo
                                  rất nhiều bức hình đẹp. Bật mí với các bạn, đây cũng chính là một trong những địa điểm chụp
            ảnh cưới, ảnh nghệ thuật được mọi người rất yêu thích đó.</p>
                                <img src="./static/img/nhathoda5.jpg" className="img-fluid" />
                                <p style={{ paddingTop: '.5rem' }}>Cùng đi và check-in nào!</p>
                                <hr id="hr" />
                                <button id="btn-hide" onclick="anNoidung()">Xem thêm<i className="far fa-hand-point-down" style={{ paddingLeft: '.5rem' }} /></button>
                                <div id="noidung-an">
                                    <h6><i className="fas fa-water" style={{ paddingRight: '0.5rem' }} /><b>Thác Bạc</b></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 img-side">
                            <h5 className="tieude-thuvien">Thư Viện Ảnh</h5>
                            <p style={{ paddingTop: '2rem !important', margin: 0 }}><b>Nhà Thờ Đá</b></p>
                            <hr className="hr" />
                            <div id="carouselExampleInterval" className="carousel slide show" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={20000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/nhathoda6.png" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/anhthuvien2.jpg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/nhathoda7.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={5000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/anhthuvien5.jpg" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/anhthuvien6.jpg" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/anhthuvien7.jpg" className="card-img-top" alt="..." />
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
                            <div id="carouselExampleInterval9" className="carousel slide hide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={40000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/nhathoda6.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={4000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/nhathoda7.jpg" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/anhthuvien2.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/anhthuvien5.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/anhthuvien6.jpg" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval9" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval9" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <p style={{ paddingTop: '5rem !important', margin: 0 }}><b>Quán Gió</b></p>
                            <hr className="hr" />
                            <div id="carouselExampleInterval1" className="carousel slide show" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={40000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/quangio3.jpg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/quangio4.jpg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/quangio5.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={4000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/anhthuvien5.jpg" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/quangio6.png" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/anhthuvien7.jpg" className="card-img-top" alt="..." />
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
                            <div id="carouselExampleInterval8" className="carousel slide hide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={40000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/quangio3.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={4000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/quangio4.jpg" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/quangio5.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/anhthuvien5.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/anhthuvien7.jpg" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval8" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval8" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <p style={{ paddingTop: '5rem !important', margin: 0 }}><b>Tháp Truyền Hình</b></p>
                            <hr className="hr" />
                            <div id="carouselExampleInterval2" className="carousel slide show" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={50000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tth1.jpg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tth1.png" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tth2.png" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={5000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tth3.png" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/quangio6.png" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/anhthuvien7.jpg" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval2" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval2" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div id="carouselExampleInterval7" className="carousel slide hide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={40000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/tth1.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={4000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/tth1.png" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/tth2.png" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/tth3.png" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/tth3.png" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval7" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval7" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <p style={{ paddingTop: '5rem !important', margin: 0 }}><b>Thác Bạc</b></p>
                            <hr className="hr" />
                            <div id="carouselExampleInterval3" className="carousel slide show" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={40000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/thacbac.png" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/thacbac1.jpg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/thacbac2.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={4000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/thacbac2.png" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/thacbac1.jpg" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/thacbac2.jpg" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval3" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval3" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div id="carouselExampleInterval6" className="carousel slide hide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={40000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/thacbac.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={4000}>
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/thacbac.png" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/thacbac1.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/thacbac2.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="...">
                                        <div className="row">
                                            <div className="col-sm-12 ks">
                                                <img src="./static/img/thacbac2.png" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval6" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval6" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <p style={{ paddingTop: '5rem !important', margin: 0 }}><b>Thiền Viện Trúc Lâm</b></p>
                            <hr className="hr" />
                            <div id="carouselExampleInterval4" className="carousel slide show" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval={40000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tvtl.jpg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tvtl1.jpg" className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tvtl2.jpg" className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval={4000}>
                                        <div className="row">
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tvtl3.jpg" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/quangio6.png" className="card-img-top" alt="..." />
                                            </div>
                                            <div className="col-sm-4 ks">
                                                <img src="./static/img/tvtl4.jpg" className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval4" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval4" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
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
                            <h5 className="tieude-thuvien" style={{ marginTop: '3rem' }}>Video</h5>
                            <iframe width="100%" height src="https://www.youtube.com/embed/D6H6mYRaEqY" frameBorder={0} autoPlay={1} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            <iframe width="100%" height src="https://www.youtube.com/embed/GAeBmeYnOIQ" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

