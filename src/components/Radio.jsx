import React, { Fragment } from 'react';
import PersonnalError from './PersonnalError';
import { ErrorMessage, FastField } from 'formik';

const Radio = (props) => {
    const { name, label, options } = props;
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <FastField name={name} id={name}>
                {({field})=>{
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <input 
                            className='form-check-input me-4'
                            type='radio'
                            id={`radio${o.id}`}
                            {...field}
                            value={o.id}
                            />
                            <label htmlFor={`radio${o.id}`} className='form-check-label mx-1 ms-4' >{o.value}</label>
                        </Fragment>
                    ))
                }

                }
            </FastField>
            <ErrorMessage name={name} component={PersonnalError} />
        </div>
    );
}

export default Radio;
