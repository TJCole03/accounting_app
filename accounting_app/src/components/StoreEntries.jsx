import React from "react"
import {Button} from 'semantic-ui-react'
// import formJSON from './Service'
// import {transferValue} from './Service'

function StoreEntries({transferValue}) {

    const inputs = 'here are our inputs'

     
    return (
    <> 
    <table>
         
        <thead>

            <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Service</th>
                <th scope='col'>Gross Earnings</th>
                {/* <th scope='col'>Spending</th> */}
            </tr>
            <tr>
                <th scope="row">[insert date here], {transferValue} </th>
                <td scope="row">[insert service], {transferValue}</td>
                <td scope="row">[insert earnings]{transferValue}</td>
                {/* <td>[insert insert expenditures]</td> */}
            </tr>
        </thead>
    </table>
        <div>
             <Button primary onClick={() => transferValue(inputs)}>Click Child</Button>   
        </div>
    </>  
     )
}

export default StoreEntries

{/* <caption>
My amazing wifes income 
</caption> */}