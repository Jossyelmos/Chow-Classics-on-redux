import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from '../../actions/recipeActions';
import PropTypes from 'prop-types'

const Search = ({ searchRecipes }) => {
    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            console.log('Please enter something');
        } else {
            searchRecipes(text);
            setText('');
        }
    };

    return (
        <div>
            <form style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name='text' 
                    placeholder='Search Recipes...'
                    value={text}
                    onChange={onChange}
                    style={{ width: '200px' }}
                />
                <i className="fa fa-search search-icon" onClick={onSubmit} />
            </form>
        </div>
    );

};

Search.propTypes = {
    searchRecipes: PropTypes.func.isRequired,
}

export default connect(null, {searchRecipes})(Search);
