import jMoment from 'moment-jalali';
import React, { useEffect, useState } from 'react';

const PersianDate = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const weekDays = [
        'یکشنبه',
        'دوشنبه',
        'سه‌شنبه',
        'چهارشنبه',
        'پنجشنبه',
        'جمعه',
        'شنبه'
    ];

    const monthNames = [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
    ];
    
    useEffect(()=> {

        const updateDate = ()=> {
            let m = jMoment();
            console.log("jday = " + m.day())

            let finalDate =
                `${weekDays[m.day()]} ${m.jDate()} ${monthNames[m.jMonth()]} ${m.jYear()}`;

            setDate(finalDate);
            setTime(m.format('HH:mm'));
        }

        updateDate();

        const interval = setInterval(updateDate,1000);

        return ()=> clearInterval(interval);

    },[])

    return (
        <>
           <span className='mb-3 d_block text-center'>{date}</span>         
           <span className='mb-3 d_block text-center'>{time}</span>         
        </>
    );
}

export default PersianDate;
