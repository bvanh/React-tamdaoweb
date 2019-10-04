import React, { Component } from 'react';
import datahotel from './data';
import Link from 'next/link'


export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: datahotel.items,
            translatevalue: 0,
        }

    }
    nextCarousel(newTranslatevalue) {
        if (newTranslatevalue < 400) {
            newTranslatevalue += 100;
        }
        if (newTranslatevalue >= 400) {
            newTranslatevalue = 0
        }
        this.setState({
            translatevalue: newTranslatevalue
        });
    }
    prevCarousel(newTranslatevalue) {
        if (newTranslatevalue <= 300 && newTranslatevalue > 0) {
            newTranslatevalue -= 100;
        }
        this.setState({
            translatevalue: newTranslatevalue,
        })

    }
    componentDidMount() {
        let newTranslatevalue = this.state.translatevalue;
        setInterval(() => {
            if (newTranslatevalue < 400) {
                newTranslatevalue += 25;
            }
            if (newTranslatevalue >= 400) {
                newTranslatevalue = 0
            }
            this.setState({
                translatevalue: newTranslatevalue,
            })


        }, 1000);
    }
    render() {
        const list = this.state.items;
        const newTranslatevalue = this.state.translatevalue;
        const printlist2 = list.map((item, index) =>
            <div className="col-sm-3 ks" key={index}>
                <img src={item.src} className="card-img-top" alt={item.ten} />
                <a href="#" className="card-title">{item.ten}</a>
                <div className="gia-ks">
                    <p className="gia">Từ {item.gia.toLocaleString()}đ</p>
                    <Link href='/chitiet'>
                        <a className="btn-chitiet chitiet">
                            <button className="btn-chitiet">Chi tiết</button>
                        </a>
                    </Link>
                </div>
            </div>
        );
        return (
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className='carousel-demo' style={{ transform: `translateX(-${newTranslatevalue}%)` }}>
                    {printlist2}
                </div>
                <a className="carousel-control-prev" role="button" onClick={() => this.prevCarousel(newTranslatevalue)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" role="button" onClick={() => this.nextCarousel(newTranslatevalue)}>
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )

    }
}
