import axios from 'axios';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Router from 'next/router'
import Link from 'next/link';

export default class Stock extends Component {

    constructor(props) {
        super(props);
    }

    handleDelete(e) {
        const productId = e.target.id;
        axios.delete(`${process.env.NEXT_PUBLIC_GET_STOCK}/${productId}`)
            .then(() => {
                Router.reload("/stock");
            });
    }


    render() {
        return (
            <table className="table table-hover table-bordered border-dark bg-light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.props.products.length > 0 ? (
                            this.props.products.map(e => (
                                <tr key={uuidv4()}>
                                    <td>
                                        {e.name}
                                    </td>
                                    <td>
                                        {e.brand}
                                    </td>
                                    <td>
                                        {e.model}
                                    </td>
                                    <td>
                                        {e.quantity}
                                    </td>
                                    <td>
                                        <Link href={`/products/${e._id}`}>
                                            <a className="btn btn-modify" style={{ marginRight: "5px" }}>Modify</a>
                                        </Link>
                                        <a className="btn btn-remove" id={e._id} onClick={this.handleDelete}>Delete</a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <></>
                        )
                    }

                </tbody>
            </table>
        )
    }
}