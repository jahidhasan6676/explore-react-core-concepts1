 export default function Hafez({details}){
    console.log(details)
    return (
        <div>
            <h4>Name: {details.name}</h4>
            <p>Age: {details.age} </p>
            <p>Id: {details.id}</p>
        </div>
    )
 }