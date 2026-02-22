import React from 'react';
import PersonnalError from './PersonnalError';
import { ErrorMessage, Field } from 'formik';

const Checkbox = ({ name, label, options }) => {
    return (
        <div className="mb-3">
            
            <div className="d-flex align-items-center justify-content-first gap-3">

                {/* label اصلی */}
                <label className="mb-0">
                    {label}
                </label>

                {/* checkbox group */}
                <div>
                    {options.map(o => (
                        <div
                            key={o.id}
                            className="form-check form-check-reverse form-check-inline"
                        >
                            <Field
                                type="checkbox"
                                name={name}
                                value={o.id}
                                className="form-check-input"
                                id={`checkbox${o.id}`}
                            />
                            <label
                                htmlFor={`checkbox${o.id}`}
                                className="form-check-label"
                            >
                                {o.value}
                            </label>
                        </div>
                    ))}
                </div>

            </div>

            <ErrorMessage name={name} component={PersonnalError} />
        </div>
    );
};

export default Checkbox;