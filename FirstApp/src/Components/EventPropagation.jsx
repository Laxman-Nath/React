// export const EventPropagation=()=>{
//     const handleGrandParent=()=>{
//         console.log("Inside grandparent..........");
//     }
//     const handleParent=()=>{
//         console.log("Inside parent..........");
//     }
//     const handleChild=()=>{
//         console.log("Inside child..........");
//     }
//     return <div onClick={handleGrandParent}>
//         <div onClick={handleParent}>
//             <button onClick={handleChild}>I m child</button>
//         </div>
//     </div>
// }

export const EventPropagation=()=>{
    const handleGrandParent=()=>{
        console.log("Inside grandparent..........");
    }
    const handleParent=()=>{
        console.log("Inside parent..........");
    }
    const handleChild=()=>{
        console.log("Inside child..........");
    }
    return <section className="flex w-100 h-100">
    <div onClickCapture={handleGrandParent}>
        <div onClickCapture={handleParent}>
            <button onClickCapture={handleChild}>I m child</button>
        </div>
    </div>
    </section>
}

// Key Concepts of Event Propagation in React
// There are two main phases of event propagation:

// Capturing Phase (also called capturing phase or trickling phase)
// Bubbling Phase
// In JavaScript's traditional DOM, events propagate through both these phases:

// Capturing Phase: The event starts from the root of the document and propagates down to the target element.(secondexample)
// Bubbling Phase: The event starts from the target element and bubbles back up to the root.(firstexample)