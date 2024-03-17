/* eslint-disable react/jsx-key */
import { useState } from "react";
import ServiceField from "./ServiceField";
import jsonData from "./data.json"
 
function TableData() {
    const [transactionData, setTransactionData] = useState(jsonData)

    const tableRows = transactionData.map((info) => {
        return (
        <tr>
            <td> {info.id} </td>
            <td> {info.date} </td>
            <td> {info.service} </td>
            <td> {info.price} </td>
        </tr>
    )
    })
    
    const addRows = (data) => {
        const transactions = transactionData.length 
        data.id = transactions + 1 
        const updatedTransData = [...transactionData]
        updatedTransData.push(data)
        setTransactionData(updatedTransData)
    }

    

    return (
        <div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{ tableRows }</tbody>
            </table>
            <ServiceField func={addRows} />
        </div>

    )
}

export default TableData
