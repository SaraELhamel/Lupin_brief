import React from 'react'

export default function ProductList(props) {
    const {data} = props
    return (
        <tbody>
            <tr>
                        <td scope="row">{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                        <td>{data.image}</td>
                        <td>{data.owner}</td>
                    </tr>
        </tbody>
    )
}