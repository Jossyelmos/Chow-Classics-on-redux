import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { getRecipes } from '../../actions/recipeActions';

const Recipes = ({ recipe: { recipes, loading }, getRecipes }) => {

    useEffect(() => {
        getRecipes();

        // eslint-disable-next-line
    }, []);

    if(loading || recipes === null) {
        return <Spinner />
    }

    return (
        <div style={userStyle}>
            
            {!loading && recipes.length === 0 ? (
                <p className='center'>No Recipes to show</p>
            ) : (
                recipes.map(recipe => <RecipeItem recipe={recipe} key={recipe.id} />)
            )}
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

Recipes.propTypes = {
    recipe: PropTypes.object.isRequired,
    getRecipes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    recipe: state.recipe
});
 
export default connect(mapStateToProps, { getRecipes })(Recipes);
