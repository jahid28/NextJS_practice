import React from 'react'

function page({params}:{params:any}) {
    console.log(params)
  return (
    <div>
      info , hi {params.info[1]}
    </div>
  )
}

export default page
