
// const handleSubmit = (e) => {
//     // prevents browser from reloading data
//         e.preventDefault();
//     // read form data
//         const form = e.target; 
//         const formData = new FormData(form)

//     // you can pass formData as fetch body directly: 
//         // fetch('/', { method: form.method, body: formData })
        
//     // OR you can work with it as a plain object
//         const formJSON = Object.fromEntries(formData.entries())
//         dateIndex.push(formJSON)
//         priceIndex.push(formJSON)
//         serviceIndex.push(formJSON)
//         console.log(formJSON, 'formJSON')
//         console.log({Date},dateIndex)
//         console.log({service},serviceIndex)
//         console.log({price},priceIndex)
//         console.log({price},priceIndex[1])
//         transferValue()
//         // console.log(index)
//         // console.log('formJson', [formJSON])
     

//     }

//     const transferValue = (formJSON) => {
//         // setInputs("This is data from Parent Component to the Child Component.");
//         if (dateIndex && serviceIndex && priceIndex) {
//             dateArr.push(dateIndex[1])
//             serviceArr.push(serviceIndex[1])
//             priceArr.push(priceIndex[1])
//             console.log(dateArr, serviceArr, priceArr)
//         } else {
//             console.log('still closer because you know this doesnt work')
//         }
//         setDate(formJSON);
//         setService(formJSON);
//         setPrice(formJSON);
//         clearState()
//     }

//     // const transferValue = () => {
//     //     // e.preventDefault();
//     //     const val = {
//     //         Date,
//     //         service,
//     //         price,
//     //     };
//     //     handleSubmit(val);
//     //     clearState();
//     // };
 
//     const clearState = () => {
//         setDate('')
//         setService('');
//         setPrice(0);
//     };

//     export default getJSON