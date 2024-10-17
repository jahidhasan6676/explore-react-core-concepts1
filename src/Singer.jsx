 export default function Singer({singer}){
    console.log(singer);
    return (
        <div>
            <h4>Name: {singer.name} </h4>
            <p>Age: {singer.age}</p>
        </div>
    )
 }