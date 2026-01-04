import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jpAxios } from "../axios/JpAxios";

const Comments = () => {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        if (postId) {
            jpAxios.get(`/posts/${postId}/comments`).then((res) => {
                setComments(res.data)
            })
        }
    }, [])
    return (
        <div className="item_content mt-5 p-4 container-fluid container">
            <h4 className="text-center text-primary">کامنت</h4>
            <div className="row justify-content-center mt-5">
                {comments.length ? (
                    <table className="table bg-light shadow">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">نام</th>
                                <th scope="col">ایمیل</th>
                                <th scope="col" className="text-center">متن</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map(c => (
                                <tr key={c.id}>
                                    <th scope="row">{c.id}</th>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.body}</td>
                                </tr>))
                            }
                        </tbody>
                    </table>) : (<h4>کمی صبر کنید ...</h4>)}
            </div>
        </div>
    )
}
export default Comments;