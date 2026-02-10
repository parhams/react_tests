import React, { useState } from 'react';
import PersianDate from './PersianDate';
import { useDispatch, useSelector } from 'react-redux';
import { sendWeatherRequest } from '../redux/weather/Weatheraction';

const Weather = () => {
    const {loading, data, error} = useSelector(state=>state);
    const dispatch = useDispatch();
    const [backMode, setBackMode] = useState('usual');
    const [query, setQuery] = useState('')

    const handelGetWeather = e=>{
        e.preventDefault()
        dispatch(sendWeatherRequest())
        setQuery('')

    }

    return (
        <>
            <div className={`app pt-5 container-fluid back_${backMode}`}>
                <div className='row justify-content-center py-3 pt-4'>
                    <div className='col-10 col-md-6 col-lg-4 col-xl-3'>
                        <form>
                            <input type='text' className='input_underline_glass w-100 text_color placeholder_color' placeholder={'نام شهر یا کشور'} />
                        </form>
                    </div>
                </div>
                <div className='row justify-content-center py-3 pt-4'>
                    <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                        <h3 className='text-center text_color'>
                            <PersianDate />
                        </h3>
                    </div>
                </div>
                <div className='row justify-content-center py-3 pt-4'>
                    <div className='col-11 col-md-8 col-lg-4 col-xl-3'>
                        <h1 className='text-center fa-3x lathin_text text_color'>cloudy</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;
