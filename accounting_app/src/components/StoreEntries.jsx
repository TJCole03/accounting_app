// import formJSON from './Service'
// import index from './Service'

function StoreEntries() {

     
    return (
    <table>
        <thead>
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
                <th scope="row">[insert date here] </th>
                <td scope="row">[insert service]</td>
                <td scope="row">[insert earnings]</td>
                {/* <td>[insert insert expenditures]</td> */}
                </tr>
        </thead>
    </table>
     )
}

export default StoreEntries