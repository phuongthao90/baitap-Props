import React, { Component } from 'react'

export default class CartGiay extends Component {
    renderGioHang = () => {
        let {gioHang,xoaGiay,tangGiamSoLuong}=this.props
        return gioHang.map((giay,index) => {
            return <tr key={index}>
            <td scope="row">{giay.id}</td>
            <td>{giay.name}</td>
            <td style={{ width: "100px" }}>
                <img src={giay.image} className="img-fluid" alt="..." />
            </td>
            <td>
                <button className="btn btn-info" style={{height:"36px",width:"36px",lineHeight:"18px"}} onClick={() => {
                    tangGiamSoLuong(giay,-1)
                }}>-</button>
                <span> {giay.soLuong} </span>
                <button className="btn btn-info" style={{height:"36px",width:"36px",lineHeight:"18px"}} onClick={() => {
                    tangGiamSoLuong(giay,1)
                }}>+</button>
            </td>
            <td>{giay.price.toLocaleString()}</td>
            <td>{(giay.soLuong*giay.price).toLocaleString()}</td>
            <td>
                <button onClick={() => {
                    xoaGiay(giay)
                }} className="btn btn-danger">Xóa</button>
            </td>
        </tr>
        })
    }
    render() {
        return (
            <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderGioHang()}
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
