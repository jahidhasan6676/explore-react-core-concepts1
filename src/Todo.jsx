export default function Todo({task}){
    
    return (
        <li>Task: {task}</li>
    )
}

// conditional rendering option-1

// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>;
//     }else{
//         return  <li>Work on: {task}</li>
//     }
// }

// conditional rendering option-2

// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finish: {task}</li>;
//     }
//         return  <li>Work on: {task}</li>
    
// }

// conditional rendering option-3

// export default function Todo({task, isDone}){
//     return (
//         <li>  {isDone? 'Complete' : 'Running'} : {task}</li>
//     )
// }

// conditional rendering option-4

// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone && 'Done'}</li>
//     )
// }

// conditional rendering option-5

// export default function Todo({task, isDone}){
//     return (
//        <li> {task} {isDone || ': do it'} </li>
//     )
// }


// conditional rendering option-6

// export default function Todo({task, isDone}){
//     let listItem;
//     if(isDone){
//         listItem =  <li>Complete: {task}</li>;
//     }else{
//         listItem =  <li>Running: {task}</li>
//     }
//     return listItem;
// }