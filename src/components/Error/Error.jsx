import React from 'react'
import './error.css';
function Error() {
    document.title=`Wasifati: Error`;
    return (
        <div className='error'>
            <div className="alert alert-danger" role="alert">
                Oops ,There is a problem. Please reload the page or try again later or cheak the link:(
            </div>
        </div>
    )
}

export default Error