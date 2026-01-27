import { useEffect, useReducer, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import {AddPostService, UpdatePostService} from '../service/PostService';
import { jpAxios } from '../axios/JpAxios';

const AddPost = () => {
    const { postId } = useParams();
    
    const init = {
        postData : {
        id:"",
        userId: "",
        title: "",
        body: ""
        },
        users: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "changeUser":
                return {...state, users: action.payload}
            case "isUpdate":
                return {...state, postData: action.payload}
            case "setInputValue":
                return {...state, postData : {
                    ...state.postData,
                    [action.propName] : action.propValue
                }}
            default:
                return state
        }
    }

    const setInputValues = (e, propName) => {
        dispatch({
            type: "setInputValue",
            propName: propName,
            propValue : e.target.value
        })
    }
    const [data, dispatch] = useReducer(reducer, init)
    useEffect(() => {
        if (postId) {
            jpAxios.get(`/posts/${postId}`).then((res) => {

        dispatch({
            type: "isUpdate",
            payload : res.data
        })
            })
        }

        jpAxios.get(`/users`).then((res) => {
        dispatch({
            type: "changeUser",
            payload : res.data
        })
            })
    }, [postId])
    const handelAddPost = (e) => {
        e.preventDefault()
        if (!postId) {
            AddPostService(data.postData)
        } else {
            UpdatePostService(data.postdata, postId)
        }
    }
    return (
        <div className="item_content mt-5 p-4 container-fluid container">
            <h4 className="text-center text-primary">{!postId ? `افزودن پست` : `ویرایش پست`}</h4>
            <div className="row justify-content-center mt-5">
                <form onSubmit={handelAddPost} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label"> کاربر</label>
                        <select className="form-control" value={data.postData.userId} onChange={(e) => { setInputValues(e, "userId") }} >
                            <option value="">کاربر مورد نظر را انتخاب کنید</option>
                            { data.users.map(u=>(
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>    
                    </div>
                    <div className="mb-3">
                        <label className="form-label">عنوان</label>
                        <input
                            className="form-control"
                            type="text"
                            value={data.postData.title} onChange={(e) => { setInputValues(e, "title") }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">متن</label>
                        <textarea
                            className="form-control"
                            value={data.postData.body} onChange={(e) => { setInputValues(e, "body") }} />
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
