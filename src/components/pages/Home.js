import React from 'react';
import Recipes from '../recipes/Recipes';
import Search from '../recipes/Search';

const Home = () => {
    return (
        <div className='container'>
            <div className="grid-2 my-2" style={{ marginTop: '4rem' }}>
                <div>
                    <p className='lead'>Latest Recipes </p><hr style={recipeStyle} />
                    <div className='all-center'>
                        <Recipes />
                    </div>
                </div>
                <div>
                    <Search />
                </div>
            </div>
        </div>
    )
}

const recipeStyle = {
    width: '500px',
    marginLeft: '200px',
    marginTop: '-2rem'
}

export default Home;
