import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Rating({ rating }) {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {
        rating % 1 !== 0 && (
          <FontAwesomeIcon icon="star-half-alt" />
        )
      }
    </div>
  )
}