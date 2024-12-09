// import { memo, useRef } from "react"

//  const Counts=()=>{
//     const renderCount=useRef(0);
//     return <div className="mt-3 font-display text-center">
//         <p>
//             Nothing changed here but I've now rendered:
//             <span className="text-red-500">{renderCount.current++} time(s)</span>
//         </p>
//     </div>
// }

// export default memo(Counts)

// React.memo is a higher-order component (HOC) in React that is used for performance optimization. It prevents a component from re-rendering unless its props change.


import { memo, useRef } from "react"

 const Counts=()=>{
    const renderCount=useRef(0);
    return <div className="mt-3 font-display text-center">
        <p>
            Nothing changed here but I've now rendered:
            <span className="text-red-500">{renderCount.current++} time(s)</span>
        </p>
    </div>
}

export default memo(Counts)