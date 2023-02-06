import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({rating, review, color}) => {
    return (
      <>
        
        <span>
          <FontAwesomeIcon style={{color}}
            icon={
              rating >= 1
                ? faStar
                : rating >= 0.5
                ? faStarHalfAlt
                : `far fa-star`
            }
          />
        </span>

        <span>
          <FontAwesomeIcon style={{color}}
            icon={
              rating >= 2
                ? faStar
                : rating >= 1.5
                ? faStarHalfAlt
                : `far fa-star`
            }
          />
        </span>
        <span>
          <FontAwesomeIcon style={{color}}
            icon={
              rating >= 3
                ? faStar
                : rating >= 2.5
                ? faStarHalfAlt
                : `far fa-star`
            }
          />
        </span>
        <span>
          <FontAwesomeIcon style={{color}}
            icon={
              rating >= 4
                ? faStar
                : rating >= 3.5
                ? faStarHalfAlt
                : `far fa-star`
            }
          />
        </span>

        <span>
          <FontAwesomeIcon style={{color}}
            icon={
              rating >= 5
                ? faStar
                : rating >= 4.5
                ? faStarHalfAlt
                : `far fa-star`
            }
          />
          <strong> {review} Reviews</strong>
        </span>
        
      </>
    );
};

Rating.defaultProps={
    color: '#FF9529',
}

export default Rating;
