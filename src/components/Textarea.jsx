import React from 'react';
import PersonnalError from './PersonnalError';
import { ErrorMessage, FastField } from 'formik';

const Textarea = (props) => {
    const {name, label} = props;
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <FastField name={name} id={name} className="form-control" as="textarea"/>
            <ErrorMessage name={name} component={PersonnalError} />
        </div>
    );
}

export default Textarea;
