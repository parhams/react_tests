import React from 'react';
import PersonnalError from './PersonnalError';
import { ErrorMessage, FastField } from 'formik';

const Input = (props) => {
    const { name, type, label } = props;
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <FastField type={type} name={name} id={name} className="form-control" />
            <ErrorMessage name={name} component={PersonnalError} />
        </div>
    );
}

export default Input;
