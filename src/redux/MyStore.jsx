import React from 'react';
import { BUY_APPLE, BUY_ORANGE } from './fruit/fruitType';
import { buy_apple, buy_orange } from './fruit/FruitAction';

const MyStore = (/*{ apple, orange, buy_apple, buy_orange }*/) => {
    const [apple, orange] = useSelector((state) => state.fruit);
    const [sandwich] = useSelector((state) => state.sandwich);
    const dispatch = useDispatch();
    return (
        <div className="text-center mt-3">
            <h5 className="text text-center text-info">فروشگاه</h5>
            <div className="text-center mt-3">
                <span className="text text-center text-dark">سبد سیب : {apple}</span>
                <div className="text-center mt-3">
                    <button onClick={/*buy_apple*/ ()=> dispatch(buyApple())} className="btn btn-info">خرید سیب</button>
                </div>
                <div className="text-center mt-3">
                    <span className="text text-center text-dark">سبد پرتقال : {orange}</span>
                    <div className="text-center mt-3">
                        <button onClick={/*buy_orange*/() => dispatch(buyOrange())} className="btn btn-danger">خرید پرتقال</button>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <span className="text text-center text-dark">سبد ساندویچ : {sandwich}</span>
                    <div className="text-center mt-3">
                        <button onClick={/*buy_sandwich*/() => dispatch(buySandwich())} className="btn btn-danger">خرید ساندویچ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// const stateToProps = state => {
//     return {
//         apple: state.apple,
//         orange: state.orange
//     }
// }

// const dispatchToProps = dispatch => {
//     return {
//         buy_apple: () => dispatch(BUY_APPLE),
//         buy_orange: () => dispatch(BUY_ORANGE)
//     }
// }

// export default connect(stateToProps, dispatchToProps)(MyStore);
export default MyStore;