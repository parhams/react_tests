import React, { memo } from 'react';
import PropTypes from 'prop-types';


const CountButton = (props) => {
    return (
        <div className='text-center mt-3'>
            <button className='btn btn-info' onClick={props.handelClick}>{`افزایش  ${props.title}`}</button>
        </div>
    );
};

export default memo(CountButton);
