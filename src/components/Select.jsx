import React from 'react';
import PersonnalError from './PersonnalError';
import { ErrorMessage, FastField } from 'formik';

const Select = (props) => {
    const {name, label, options} = props;
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <FastField name={name} id={name} className="form-control" as="select">
                 <option value=""></option>
                {
                    options.map(o =>(
                        <option key={o.id} value={o.id}>{o.value}</option>
                    ))
                }
            </FastField>
            <ErrorMessage name={name} component={PersonnalError} />
        </div>
    );
}

export default Select;
