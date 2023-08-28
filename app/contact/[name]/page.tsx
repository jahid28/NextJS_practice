import React from 'react'

export default function page({params}:{params:any}) {
    console.log(params)
  return (
    <div>
      hi {params.name}
    </div>
  )
}





// 'use client'
// import { FC } from "react";
// import { useSearchParams } from "next/navigation";

// interface pageProp{
//     params:{name:string}
// }
// const page:FC<pageProp>=({params})=>{
//     return <div>
//         <h1>hi {params.name} </h1>
//     </div>
// }
// export default page
