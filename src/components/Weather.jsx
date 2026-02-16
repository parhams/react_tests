import React, { useEffect, useState } from 'react';
import PersianDate from './PersianDate';
import { useDispatch, useSelector } from 'react-redux';
import { sendWeatherRequest } from '../redux/weather/WeatherAction';

const Weather = () => {
    const { loading, data, error } = useSelector(state => state);
    
    const rawTemp = data?.main?.temp;

    const temp = rawTemp < 0
        ? `منفی ${Math.abs(rawTemp)}`
        : rawTemp;

    
    const description = data?.weather?.[0]?.description;


    const backMode =
        rawTemp < 12 ? "cold" :
            rawTemp < 30 ? "usual" :
                "warm";

    const dispatch = useDispatch();

    const [query, setQuery] = useState('')

    const handelGetWeather = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        dispatch(sendWeatherRequest(query));
    }

return (
    <>
        <div className={`app pt-5 container-fluid back_${backMode}`} dir='rtl'>
            <div className='row justify-content-center py-3 pt-4'>
                <div className='col-10 col-md-6 col-lg-4 col-xl-3'>
                    <form onSubmit={handelGetWeather}>
                        <input
                            type='text'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='input_underline_glass w-100 text_color placeholder_color'
                            placeholder={'نام شهر یا کشور'}
                        />

                    </form>
                </div>
                <div className="row justify-content-center py-3 pt-4">
                    <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                        <h3 className="text-center text_color">
                            <PersianDate />
                        </h3>
                    </div>
                </div>
            </div>

            {
                loading ? (
                    <div className="text-center text-secondary mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading ...</span>

                        </div>
                    </div>
                ) : data.main ? (
                    <>
                        <div className="row justify-content-center py-3 pt-4">
                            <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                                <h1 className="text-center fa-3x lathin_text text_color">{data.name}</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center py-3 pt-4">
                            <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                                <h1 className="text-center fa-3x lathin_text text_color">{description}</h1>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center py-3 pt-4">
                            <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                                <div className={`text-center temp-box ${backMode}`}>
                                    <h3 className="text-center fa-2x text_color text-first">
                                        {temp}°   سانتی گراد 
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </>
                ) : error ? (
                    <h4 className="text-center text-danger mt-5">{error}</h4>
                ) : (
                    <h4 className="text-center text-dark mt-5">شهر مورد نظر را انتخاب کنید</h4>
                )
            }




        </div>
    </>
);
}

export default Weather;
