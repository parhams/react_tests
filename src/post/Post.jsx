import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";
import PreviousReact from "./PreviousReact";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jpAxios } from '../axios/JpAxios';
import { getPostService } from "../service/PostService.js";
import { Confirm, Alert } from '../util/Alerts.js';


const Post = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);
    const [uId, setUId] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPostService();
                setPosts(data);
                setMainPosts(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPosts();
    }, [])

    useEffect(() => {
        handelSearch()
        
    }, [uId]);

    const handelSearch = (/*e*/) => {
        // posts.filter(p => p.title.include(e.target.value))
        if (uId > 0)
            setPosts(mainPosts.filter(p => p.userId == uId))
        else
            setPosts(mainPosts)

    }
    const handelDelete = async (itemId) => {
        if (await Confirm(`آیا از حذف رکورد ${itemId} اطمینان دارید؟`)) {
            jpAxios.delete(`/posts/${itemId}`).then(res => {
                if (res.status === 200) {
                    const newPosts = posts.filter(p => p.id !== itemId)
                    setPosts(newPosts)
                    Alert("حذف با موفقیت انجام شد", "success")
                } else {
                    Alert("فرایند حذف با خطا مواجه شد", "danger")
                }
            }
            )
        } else {
            Alert("شما از حذف رکورد منصرف شدید", "info")
        }
    }
    return (
        <div className="item-content mt-5 p-4 container-fluid">
            <h4 className='text-center'>مدیریت پست ها</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="number" value={uId} className="form-control shadow" onChange={(e) => setUId(e.target.value)} placeholder="جستجو" />
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/post/add" state={"vue"}>
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>

                    </Link>
                </div>
            </div>
            {posts.length ? (<table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">آی دی کاربر</th>
                        <th scope="col">عنوان</th>
                        <th scope="col">متن</th>
                        <th scope="col" className="text-center">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(p => (
                        <tr key={p.id}>
                            <th scope="row">{p.id}</th>
                            <td style={{cursor:"pointer"}} onClick={()=> setUId(p.userId)}>{p.userId}</td>
                            <td>{p.title}</td>
                            <td>{p.body}</td>
                            <td>

                                <button className="btn btn-edit">
                                    <i className="fas fa-edit text-warning" onClick={() => navigate(`/post/add/${p.id}`)}></i>
                                </button>

                                <button className="btn btn-delete" onClick={() => handelDelete(p.id)}>
                                    <i className="fas fa-trash text-danger"></i>
                                </button>
                                <button className="btn btn-show">
                                    <i className="fas fa-info text-info" onClick={() => navigate(`/post/comments/${p.id}`)}></i>
                                </button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>) : (<h4 className="text text-center text-info">کمی صبر کنید ...</h4>)}

        </div>
    )
}
// const Post = () => {
//     return (
//         <div>
//         <h4 className="text text-cenrter text-dark w-100">مدیریت پست</h4>
//         <ClickCount />
//         <HoverCount />
//         <PreviousReact />
//         </div>
//     )
// }
export default Post;