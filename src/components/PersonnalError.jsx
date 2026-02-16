import React from 'react';

const PersonnalError = ({children}) => {
    return (
        <div>
            <small className="text-center d-block text-danger">{children}</small>
        </div>
    );
}

export default PersonnalError;
