import Link from 'next/link';
// import Rating from 'rating'
import data from '../components/data';
import FilterRating from '../components/filter/filterrating';
import FilterPrice from '../components/filter/filterprice'

function Rating(props) {
    let rater = [];
    for (let i = 0; i < props.value; i++) {
        rater.push(<i key={i} className="fa fa-star"></i>)
    }
    return rater;
}
class Danhsachhotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: data.items,
            search: data.search
        }
    }
    filterRate(e) {
        if (e.target.checked) {
            const newItems = this.state.items.filter((item) => {
                return item.danhgia >= e.target.name
            })
            this.setState({
                items: newItems
            });
        } else {
            this.setState({
                items: data.items
            });
        }
    }
    filterPrice(e) {
        if (e.target.checked) {
            const newItems = this.state.items.filter((item) => {
                return item.gia >= e.target.name
            })
            this.setState({
                items: newItems
            });
        } else {
            this.setState({
                items: data.items
            });
        }

    }
    setSearch(e){
       this.setState({
           search:e.target.value
       })
    }
    render() {
        const danhsach = this.state.items.filter((fil)=>
          fil.ten.toLowerCase().split(' ').join('').indexOf(this.state.search.toLowerCase().split(' ').join('')) !== -1
        );
        const printDanhsach = danhsach.map((item, index) =>
            <Link href='/chitiet' key={index} >
                <div className="col-sm-4 col-lg-3 pt-1 pb-3 productItem">
                    <a className="card-title" key={index}>
                        <img src={item.src} className="card-img-top" alt="..." style={{ paddingBottom: '.5rem' }} />
                        <i className="fa fa-flag-o icon-ks" /><b className="ten-ks">{item.ten}</b>
                        <p className="item-ks"><i className="fas fa-search-location icon-ks" />{item.vitri}</p>
                        <p className="item-ks gia"><i className="	far fa-kiss-wink-heart icon-ks" />Từ {item.gia.toLocaleString()} đ/ 1đêm</p>
                        <p className="item-ks"><i className="	fab fa-angellist icon-ks" />Đánh giá:
                 <Rating
                                value={item.danhgia}
                            />
                        </p>
                    </a>
                </div>
            </Link>
        );
        return (
            <div className="row">
                {/* form-web */}
                <div className=" test">
                    <div className="card">
                        <article className="card-group-item">
                            <div className="card-header">
                                <h6 className="title" style={{ margin: 0, fontSize: 18 }}><b>Chọn lọc theo:</b></h6>
                            </div>
                            <div className="filter-content">
                                <div className="card-body">
                                    <p className="ten-luachon">Xếp Hạng Đánh Giá</p>
                                    <FilterRating
                                        filterRate={this.filterRate.bind(this)}
                                    />
                                    <hr />
                                    <p className="ten-luachon">Mức Giá</p>
                                    <FilterPrice
                                        filterPrice={this.filterPrice.bind(this)}
                                    />
                                    <hr />
                                    <p className="ten-luachon">Loại chỗ ở</p>
                                    <form>
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="nhanghi" />
                                            <span className="form-check-label">
                                                Nhà nghỉ
        </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="resort" />
                                            <span className="form-check-label">
                                                Resort </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="canho" />
                                            <span className="form-check-label">
                                                Căn hộ </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="bietthu" />
                                            <span className="form-check-label">
                                                Biệt thự </span>
                                        </label> {/* form-check.// */}
                                    </form>
                                    <hr />
                                    <p className="ten-luachon">Tiện nghi</p>
                                    <form>
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Hệ thống cách âm
        </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Phòng tắm riêng </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Tầm nhìn ra khung cảnh </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Ban công </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Tivi 4k</span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Dịch vụ phòng </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Nhà hàng </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Phục vụ đồ ăn </span>
                                        </label> {/* form-check.// */}
                                        <label className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <span className="form-check-label">
                                                Thang máy </span>
                                        </label> {/* form-check.// */}
                                        <hr id="hr" />
                                        <a id="btn-hide" onclick="anNoidung()">Thêm tiện ích <i className="far fa-hand-point-down" style={{ paddingLeft: '.5rem' }} /></a>
                                        <div id="noidung-an">
                                            <label className="form-check ">
                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                <span className="form-check-label">
                                                    Phòng thể dục </span>
                                            </label> {/* form-check.// */}
                                            <label className="form-check ">
                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                <span className="form-check-label">
                                                    Trung tâm Spa </span>
                                            </label> {/* form-check.// */}
                                        </div>
                                    </form>
                                </div> {/* card-body.// */}
                            </div>
                        </article>
                    </div>
                </div>
                {/* formmobile */}
                <div className=" test2">
                    <div className="row">
                        <p className="sx2">Sắp xếp theo</p>
                        <div className="col-sm-8 loc1">
                            <div className="dropdown list-mobile loc">
                                <button className="btn1 loc2 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bộ lọc</button>
                                <div className="dropdown-menu list-mobile2" aria-labelledby="dropdownMenuButton">
                                    <div className=" test3">
                                        <div className="card test4">
                                            <article className="card-group-item">
                                                <div className="filter-content">
                                                    <div className="card-body">
                                                        <p className="ten-luachon">Xếp Hạng Đánh Giá</p>
                                                        <form>
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                                <span className="form-check-label">
                                                                    1 sao
                  </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue={2} />
                                                                <span className="form-check-label">
                                                                    2 sao
                  </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue={3} />
                                                                <span className="form-check-label">
                                                                    3 sao
                  </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue={4} />
                                                                <span className="form-check-label">
                                                                    4 sao
                  </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue={5} />
                                                                <span className="form-check-label">
                                                                    5 sao
                  </span>
                                                            </label> {/* form-check.// */}
                                                        </form>
                                                        <hr />
                                                        <p className="ten-luachon">Mức Giá</p>
                                                        <form>
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="0-5" />
                                                                <span className="form-check-label">
                                                                    Dưới 500.000đ
                  </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="5-10" />
                                                                <span className="form-check-label">
                                                                    Từ 500.000đ-1.000.000đ </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="10-20" />
                                                                <span className="form-check-label">
                                                                    Từ 1.000.000đ-2.000.000đ </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="20-50" />
                                                                <span className="form-check-label">
                                                                    Từ 2.000.000đ-5.000.000đ </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue={50} />
                                                                <span className="form-check-label">
                                                                    Trên 5.000.000đ </span>
                                                            </label> {/* form-check.// */}
                                                        </form>
                                                        <hr />
                                                        <p className="ten-luachon">Loại chỗ ở</p>
                                                        <form>
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="nhanghi" />
                                                                <span className="form-check-label">
                                                                    Nhà nghỉ
                  </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="resort" />
                                                                <span className="form-check-label">
                                                                    Resort </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="canho" />
                                                                <span className="form-check-label">
                                                                    Căn hộ </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue="bietthu" />
                                                                <span className="form-check-label">
                                                                    Biệt thự </span>
                                                            </label> {/* form-check.// */}
                                                        </form>
                                                        <hr />
                                                        <p className="ten-luachon">Tiện nghi</p>
                                                        <form>
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Hệ thống cách âm
                  </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Phòng tắm riêng </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Tầm nhìn ra khung cảnh </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Ban công </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Tivi 4k</span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Dịch vụ phòng </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Nhà hàng </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Phục vụ đồ ăn </span>
                                                            </label> {/* form-check.// */}
                                                            <label className="form-check">
                                                                <input className="form-check-input" type="checkbox" defaultValue />
                                                                <span className="form-check-label">
                                                                    Thang máy </span>
                                                            </label> {/* form-check.// */}
                                                        </form>
                                                    </div> {/* card-body.// */}
                                                </div>
                                            </article></div>
                                    </div>
                                </div>
                            </div>
                            <p className="sx">Sắp xếp theo </p><div className="dropdown loc2 ">
                                <button className=" btn1 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Giá Phòng
  </button>
                                <div className="dropdown-menu gia12" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Giá tăng dần</button>
                                    <button className="dropdown-item" type="button">Giá giảm dần</button>
                                </div>
                            </div>
                            <div className="dropdown loc2">
                                <button className=" btn1 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Đánh Giá
  </button>
                                <div className="dropdown-menu gia12" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button" onclick="sortDanhgia()">Đánh giá cao nhất</button>
                                    <button className="dropdown-item" type="button" onclick="sortDanhgiaThap()">Đánh giá thấp nhất</button>
                                </div>
                            </div>
                            <p />
                        </div>
                        <div className="col-sm-4" type="search">
                            <input type="text"
                                className="example"
                                onChange={this.setSearch.bind(this)}
                                id="myFilter"
                                placeholder="Nhập tên khách sạn..."
                                style={{ fontFamily: 'Arial, FontAwesome' }}
                                name="search" />
                        </div>
                    </div>
                    <div className="row products " style={{ paddingTop: '1rem' }} id="products1">
                        {printDanhsach}
                    </div>

                </div>
            </div>
        )
    }
}
export default Danhsachhotel;