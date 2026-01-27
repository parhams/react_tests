import React, { useCallback, useMemo, useState } from 'react';
import Title from './Title';
import CountBox from './CountBox';
import CountButton from './CountButton';

const Parent = () => {
    const [title, setTitle] = useState("این صفحه تستی است");
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    

    const handelSetCount = useCallback(()=>{
        setCount(count +1);
    }, [count]);

    const handelSetCount2 = useCallback(()=>{
        console.log(count2);
        setCount2(count2 +1);
    }, [count2]);

    const isEven = useMemo(() => {
        return count % 2 === 0;
    }, [count])

    return (
        <div>
            <Title title={title}/>
            <div className='text-center mt-3'>
            <h3 className='text text-center text-danger'>{isEven ? "زوج" : "فرد"}</h3>
            </div>
            <CountBox title="مجموعه1" count={count} />
            <CountButton title="مجموعه1"  handelClick={handelSetCount}/>

            <CountBox title="مجموعه2" count={count2} />
            <CountButton title="مجموعه2"  handelClick={handelSetCount2}/>
        </div>
    );
}

export default Parent;
