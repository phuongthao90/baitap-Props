import React, { Component } from 'react'

export default class ModalGiay extends Component {
    render() {
        let { giayDetail } = this.props
        return (
            <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">{giayDetail.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-8">
                                    <img src={giayDetail.image} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-4">
                                    <h6>Name: {giayDetail.name} <br />
                                        Alias: {giayDetail.alias} <br />
                                        Price: {giayDetail.price} <br />
                                        Quantity: {giayDetail.quantity} <br />
                                        Description: {giayDetail.description}
                                    </h6>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
