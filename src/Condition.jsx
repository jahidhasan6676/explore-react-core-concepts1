export default function Condition ({work}){
   return (
    <li> Practice Task: {work}</li>
   )
}


// conditional rendering-1;

// export default function Condition ({work, isPractice}){
//     if(isPractice) {
//       return <li> Complete: {work}</li>
//     }else{
//         return <li> Running: {work}</li>
//     }
//  }

// conditional rendering-2;

// export default function Condition ({work, isPractice}){
//     if(isPractice) {
//       return <li> Complete: {work}</li>
//     }
//         return <li> Running: {work}</li>
    
//  }

//  // conditional rendering-3;

// export default function Condition ({work, isPractice}){
//     return (
//         <li> {isPractice? 'ready' : 'not ready'} : {work} </li>
//     )
//  }


// // conditional rendering-4;

// export default function Condition ({work, isPractice}){
//     return (
//         <li> {work} {isPractice && ': Complete'}  </li>
//     )
//  }


// conditional rendering-5;

// export default function Condition ({work, isPractice}){
//     return (
//         <li> {work} {isPractice || ': Running'}  </li>
//     )
//  }


// conditional rendering-6;

// export default function Condition ({work, isPractice}){
//     let practice;
//     if(isPractice){
//        practice = <li> Finished:  {work} </li>
//     }else{
//         practice = <li> Running:  {work} </li>
//     }
//     return practice;
//  }
