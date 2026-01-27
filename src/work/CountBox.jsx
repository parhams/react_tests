import React, { memo } from 'react';
import PropTypes from 'prop-types';


const CountBox = (props) => {
    return (
        <div className='text text-center text-dark mt-3'>
            <span>{props.title + " : " + props.count}</span>
        </div>
    );
};

export default memo(CountBox);
