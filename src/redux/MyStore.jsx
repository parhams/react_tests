import { buy_apple, buy_orange } from './fruit/fruitAction';
import { connect, useDispatch, useSelector } from 'react-redux';
import { buy_sandwich } from './food/foodAction';
import { BUY_APPLE, BUY_ORANGE } from './fruit/fruitType';
import { BUY_SANDWICH } from './food/foodTypes';

const MyStore = (/*{ apple, orange, sandwich, buy_apple, buy_orange }*/) => {
   
    const {apple, orange} = useSelector((state) => state.fruit);
    const {sandwich} = useSelector((state) => state.food);
    const dispatch = useDispatch();
    return (
        <div className="text-center mt-3">
            <h5 className="text text-center text-info">فروشگاه</h5>
            <div className="text-center mt-3">
                <span className="text text-center text-dark">سبد سیب : {apple}</span>
                <div className="text-center mt-3">
                    <button onClick={() => dispatch(buy_apple())} className="btn btn-info">خرید سیب</button>
                    {/* buy_apple */}
                </div>
                <div className="text-center mt-3">
                    <span className="text text-center text-dark">سبد پرتقال : {orange}</span>
                    <div className="text-center mt-3">
                        <button onClick={() => dispatch(buy_orange())} className="btn btn-danger">خرید پرتقال</button>
                        {/* buy_orange */}
                    </div>
                </div>
                <div className="text-center mt-3">
                    <span className="text text-center text-dark">سبد ساندویچ : {sandwich}</span>
                    <div className="text-center mt-3">
                        <button onClick={() => dispatch(buy_sandwich())} className="btn btn-secondary">خرید ساندویچ</button>
                        {/* buy_sandwich */}
                    </div>
                </div>
            </div>
        </div>
    );
}

// const stateToProps = state => {
//     return {
//         apple: state.apple,
//         orange: state.orange,
//         sandwich: state.sandwich
//     }
// }

// const dispatchToProps = dispatch => {
//     return {
//         buy_apple: () => dispatch(BUY_APPLE),
//         buy_orange: () => dispatch(BUY_ORANGE),
//         buy_sandwich: () => dispatch(BUY_SANDWICH)
//     }
// }

// export default connect(stateToProps, dispatchToProps)(MyStore);
export default MyStore;