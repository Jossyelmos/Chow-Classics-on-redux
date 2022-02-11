import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { setCurrent } from '../../actions/recipeActions';
import { Link } from 'react-router-dom';
import StarRatings from './StarRatings';
import PropTypes from 'prop-types'

const Recipe = ({ recipe: { recipes, loading }, setCurrent }) => {
    const { id } = useParams();

    const details = recipes.filter((recipe) => recipe.id === id);

    if (loading) {
        return <Spinner />
    };

    return (
        <Fragment>          
            <div className="App container" style={{ paddingTop: '5rem' }}>
                <Link to='/' className='btn btn-light my-1'>
                    Back to Recipes
                </Link>
                
                {details.map((recipe) => (
                    <div key={recipe.id}>
                        <div className= 'grid-2 my-3'>
                            <img 
                                src={recipe.imageURL} 
                                alt=""
                                style={{ width: '500px', height: '500px' }}
                                className= 'round-img' 
                            />
                            <div className= 'main-sub'>
                                <h1>{recipe.name}</h1>
                                <p style={{ fontSize: '15px' }}>Published on <span className='text-success' style={{ fontSize: '20px' }}>September 27, 2021</span> in Johannesburg</p>
                                <div className="recipe-div-1">
                                    <ul>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-facebook br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-google-plus br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-twitter br-c" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <i className="fa fa-linkedin br-c" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    <a href="#edit-recipe-modal" onClick={() => setCurrent(recipe)}>
                                        <button className="btn btn-dark btn-sm">EDIT RECIPE</button>
                                    </a>
                                    <button className="btn btn-danger btn-sm">DELETE RECIPE</button>
                                </p>
                                <a href="#add-recipe-modal">
                                    <button className="btn btn-primary btn-block">ADD RECIPE</button>
                                </a>
                                <StarRatings />
                            </div>
                        </div>
                        <p className='recipe-p'>
                            Lorem ipsum dolor sit amet, consectetur a dipisicing elit. Ea ratione optio nulla illum, eius do lor maiores nulla illum, sitiamet, consectetur a dipis icing eit amet, conse ulla illum, eius do lor maiores nulla illum, Lorem ipsum dolor sit a et, coinsectetur a dip onsectetur a dipis icing elit. Eaisicing elit. Ea ratione o ptio nulla illum, eius lla illum, Loremo lor sit amet, consectetur a dipis icing eit amet, conse ulla illum, eius do lor maiores nulla illum, Lorem ipsum dolor s it am et, consecetur a dip onsectetur a dipis icing elit. Eaisicing nulla illum, eius lla illum, Lorem ipsum dolor sit.

    Ea ratione o ptio nulla illum, eius lla illum, Loremo lor sit amet, consectetur a dipis icing eit amet, conse ulla illum, us do lor maiores nulla illum, Lorem ipsum dolor s it am et, consect etur a dip onsectetur a dipis icing elit. Eaisicing nulla illum, eius lla illum, Lorem ipsum dolor sit.

                        </p>
                        <div>
                            <a href={recipe.originalURL} className='btn btn-dark btn-block my-1 text-center'>
                                Get Recipe Details
                            </a>
                        </div>
                        <div className='r-last-div'>
                            <h1>Ingredients</h1>
                            {recipe.ingredients.map((ingredient, index) => (
                                <p key={index} className='recipe-p2'>
                                    <i className="fa fa-check text-success" style={{ marginRight: '1rem' }} /> {`${ingredient.quantity} ${ingredient.name}`}
                                </p>
                            ))}
                        </div>
                        <div className='r-last-div'>
                            <h1>Instructions</h1>
                            {recipe.steps.map((step, index) => (
                                <p key={index} className='recipe-p2'>
                                    <i className="fa fa-circle text-success" style={{ marginRight: '1rem', fontSize: '0.6rem' }} /> {step}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    recipe: state.recipe
});

export default connect(mapStateToProps, {setCurrent})(Recipe);