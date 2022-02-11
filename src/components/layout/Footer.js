import React from 'react';

const Footer = () => {
    return (
        <div  className='footer bg-dark'>
            <div className="container">
                <div className="grid-4">
                    <div>
                        <h4>About</h4>
                        <p>Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum vulputate. Pellentesque et ipsum in dui malesuada tempus.</p>
                    </div>
                    <div>
                        <h4>Archive</h4>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>June 2014</a>
                        </p>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>July 2014</a>
                        </p>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>August 2014</a>
                        </p>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>September 2014</a>
                        </p>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>November 2014</a>
                        </p>
                    </div>
                    <div>
                        <h4>Recipes</h4>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>Browse Recipes</a>
                        </p>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>Recipes Page</a>
                        </p>
                        <p>
                            <i className="fa fa-caret-right move" /> <a href='!#'>Submit Recipe</a>
                        </p>
                    </div>
                    <div>
                        <h4>Newsletter</h4>
                        <p>Sign up to receive email updates on new product announcements, gift ideas, sales and more.</p>
                        <div className='put'>
                            <input type="text" placeholder='mail@example.com' className='inp-1' />
                            <input type="submit" value="SUBSCRIBE" className='inp-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
