// import formJSON from './Service'
// import index from './Service'

function StoreEntries() {
    // console.log(formJSON)
    // console.log(index)
     
    return (
    <table>
        
        <caption>
                My amazing wifes income 
        </caption>
            <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Service</th>
                <th scope='col'>Gross Earnings</th>
                {/* <th scope='col'>Spending</th> */}
            </tr>
            <tr>
                <th scope="row"> [insert date here] </th>
                <td>[insert service]</td>
                <td>[insert earnings]</td>
                {/* <td>[insert insert expenditures]</td> */}
            </tr>
    </table>
     )
}

export default StoreEntries