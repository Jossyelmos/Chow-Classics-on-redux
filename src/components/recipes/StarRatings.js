import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Recipe = ({ recipe: { recipes} }) => {
    const { id } = useParams();

    const details = recipes.filter((recipe) => recipe.id === id);

    return (
        <Fragment>          
            <div className="App container" style={{ paddingTop: '2rem' }}>
                {details.map((recipe) => (
                    <Fragment key={recipe.id}>
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                                <Fragment key={i}>
                                    {ratingValue > recipe.rating ? (
                                        <i className="fa fa-star fa-lg text-calm"></i>
                                    ) : (
                                        <i className="fa fa-star fa-lg text-bright"></i>
                                    )}
                                </Fragment>
                            )
                        })}
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
};

Recipe.prpoTypes = {
    recipe: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    recipe: state.recipe
});

export default connect(mapStateToProps)(Recipe);