import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe: { id, imageURL, name, rating } }) => {
    
    return (
        <div className='card all-centre'>
            <img 
                src={imageURL} 
                alt="" 
                style={{ width: '200px' }} 
            />
            <p className='py-1'>{name}</p>
            <hr className='little' />
            <p>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <Fragment key={i}>
                            {ratingValue > rating ? (
                                <i className="fa fa-star text-calm"></i>
                            ) : (
                                <i className="fa fa-star text-bright"></i>
                            )}
                        </Fragment>
                    )
                })}
              </p>
            <div>
                <i className="fa fa-clock-o">1hr 30min</i>
            </div>
            <Link to={`/recipe/${id}`} className="btn btn-dark btn-sm my-1">
                More
            </Link>
        </div>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default RecipeItem;
