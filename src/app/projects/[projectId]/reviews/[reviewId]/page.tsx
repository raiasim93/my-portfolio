import React from 'react'

type ReviewProps ={
    params: {
        reviewId: string;
        projectId: string;
    }
}
const Reviews: React.FC<ReviewProps> = ({params}) => {
  return (
    <div> Review {params.reviewId} of product {params.projectId}</div>
  )
}

export default Reviews