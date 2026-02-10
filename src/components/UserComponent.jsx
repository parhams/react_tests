import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/user/userActions";

const UserComponent = ()=> {

    const {loading, data, error} = useSelector(state=> state);
    const dispatch = useDispatch();

    const handelGetUsers = ()=> {
        dispatch(getUsers());
    }

    return (
        <div>
            <div className='text-center mt-5'>
                <button className='btn btn-success' onClick={handelGetUsers} >دریافت کاربران</button>
                {
                    loading ? (
                        <div className="text-center text-secondary mt-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading ...</span>

                            </div>

                        </div>
                    ) : data.length > 0 ? (
                        <div className="text-center text-dark mt-5">
                        <ul className="text-center">
                            {
                                data.map(u=>(
                                    <li className="" key={u.id}>{u.username}</li>
                                ))
                            }
                        </ul>
                        </div>
                    ) : error ? (
                        <h4 className="text-center text-danger mt-5">{error}</h4>
                    ) : (
                    <h4 className="text-center text-dark mt-5" onClick={handelGetUsers}>کاربران را دریافت کنید</h4>
                    )
                }
            </div>
        </div>
    )
}

export default UserComponent;