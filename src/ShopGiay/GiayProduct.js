import React, { Component } from 'react'

export default class GiayProduct extends Component {
    render() {
        let {giay,xem,them} = this.props
        return (
                <div className="card">
                    <img src={giay.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{giay.name}</h5>
                        <p className="card-text">{giay.price}</p>
                        <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1" onClick={() => {
                            xem(giay)
                        }}>Xem Chi Tiết</a>
                        <a href="#" className="btn btn-danger ml-2" data-toggle="modal" data-target="#exampleModal2" onClick={() => {
                            them(giay)
                        }}>Thêm vào giỏ</a>
                    </div>
                </div>
        )
    }
}
