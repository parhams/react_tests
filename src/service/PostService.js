import { jpAxios } from '../axios/JpAxios';
import swal from "sweetalert";

export const showComments = async(postId) => {
    const res = await jpAxios.get(`/posts/${postId}/comments`);
    return res.data;
}
export const getPostService = async()=> {
    const res = await jpAxios.get('/posts');
    return res.data;
}

export const AddPostService = async(data)=> {
                await jpAxios.post('/posts', data).then(res => {
                console.log(res)
                swal({
                    text: `پست ${res.data.title} اضافه شد`,
                    icon: "success"
                })
            })
}
export const UpdatePostService = async(data, postId)=> {
                await jpAxios.put(`/posts/${postId}`, data).then(res => {
                console.log(res)
                swal({
                    text: `پست ${res.data.id} ویرایش شد`,
                    icon: "success"
                })
            })
}
