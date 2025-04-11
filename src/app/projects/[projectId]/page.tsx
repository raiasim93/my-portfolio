import React from 'react'

type Pageprops = {
    params:{
        projectId: string;
    }
}
const page: React.FC<Pageprops> = ({params}) => {
  return (
    <div> Details of project {params.projectId} </div>
  )
}

export default page