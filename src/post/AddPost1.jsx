import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import {AddPostService, UpdatePostService} from '../service/PostService';
import { jpAxios } from '../axios/JpAxios';

const AddPost = () => {
    const { postId } = useParams();
    // const params = useLocation();
    // console.log(params);
    const [users, setUsers] = useState([])
    const [data, setData] = useState({
        id:"",
        userId: "",
        title: "",
        body: ""
    });
    useEffect(() => {
        if (postId) {
            jpAxios.get(`/posts/${postId}`).then((res) => {
                setData(res.data)
            })
        }

        jpAxios.get(`/users`).then((res) => {
                setUsers(res.data)
            })
    }, [postId])
    const handelAddPost = (e) => {
        e.preventDefault()
        if (!postId) {
            AddPostService(data)
        } else {
            UpdatePostService(data, postId)
        }
    }
    return (
        <div className="item_content mt-5 p-4 container-fluid container">
            <h4 className="text-center text-primary">{!postId ? `افزودن پست` : `ویرایش پست`}</h4>
            <div className="row justify-content-center mt-5">
                <form onSubmit={handelAddPost} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label"> کاربر</label>
                        <select className="form-control" value={data.userId} onChange={(e) => { setData({ ...data, userId: e.target.value }) }} >
                            <option value="">کاربر مورد نظر را انتخاب کنید</option>
                            { users.map(u=>(
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>    
                    </div>
                    <div className="mb-3">
                        <label className="form-label">عنوان</label>
                        <input
                            className="form-control"
                            type="text"
                            value={data.title} onChange={(e) => { setData({ ...data, title: e.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">متن</label>
                        <textarea
                            className="form-control"
                            value={data.body} onChange={(e) => { setData({ ...data, body: e.target.value }) }} />
                    </div>
                    <div className="btn_box text-start col-12 mt-4">
                        <button type="submit" className="btn btn-primary">
                            {!postId ? `ثبت` : `ویرایش`}
                        </button>
                        <Link to="/post">
                            <button type="button" className="btn btn-danger">
                                بازگشت
                            </button>
                        </Link>
                    </div>
                </form>
                <Outlet />
            </div>

        </div>
    );
}

export default AddPost;
