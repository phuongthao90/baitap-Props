import React, { Component } from 'react'
import GiayProduct from './GiayProduct'

export default class GiayList extends Component {
    
    renderGiayList = () => {
        let {arrGiay,xemChiTiet,themGioHang}=this.props
        return arrGiay.map((sp,index) => {
            return <div className="col-4" key={index}>
                <GiayProduct giay={sp} xem={xemChiTiet} them={themGioHang}/>
            </div>
        })
    }
    
    render() {
        return (
            <div className="row">
                {this.renderGiayList()}
            </div>
        )
    }
}
