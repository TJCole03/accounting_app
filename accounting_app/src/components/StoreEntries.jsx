// import React from "react"
// import {Button} from 'semantic-ui-react'
// import formJSON from './Service'

async function StoreEntries() {
    
 //make into class component
     
    return (
    <> 
        <div className='table' >
            <table>
                <thead>
                <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Service</th>
                    <th scope='col'>Gross Earnings</th>
                {/* <th scope='col'>Spending</th> */}
                </tr>
                <tr>
                    {/* <th scope="row">`${Date}`</th>  
                    <td scope="row">`${service}`</td>
                    <td scope="row">`${price}</td> */}
                {/* <td>[insert insert expenditures]</td> */}
                </tr>
                </thead>
            </table>
        </div>
        
        {/* <div>
             <Button primary onClick={() => transferValue(inputs)}>Click Child</Button>   
        </div> */}
    </>  
     )
}

export default StoreEntries

