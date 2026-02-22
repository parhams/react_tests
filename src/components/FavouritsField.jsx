import { ErrorMessage, Field } from 'formik';
import React from 'react';
import PersonnalError from './PersonnalError';


const FavouritsField = (props) => {
    const { form, push, remove } = props;
    const { favourits } = form.values;
    console.log(props)
    return (
        <>
        <i className='fas fa-plus text-success mx-3 pointer' onClick={()=>push('')}></i>
        <label htmlFor="favourits" className="form-label">علاقه مندی ها</label>
        {favourits.map((f,i)=>(
            <div key={i} className='position-relative'>
                <Field type="text" className="form-control" name={`favourits[${i}]`}/>
                {
                    favourits.length > 1 ? (<i className='fas fa-minus-circle text-danger mx-3 pointer delete_icon' onClick={()=>remove(i)}></i>)
                    : null
                }
                <ErrorMessage name={`favourits[${i}]`} component={PersonnalError}/>
            </div>
        ))
        
        }
        </>
    );
}

export default FavouritsField;
