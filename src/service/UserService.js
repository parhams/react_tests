import { jpAxios } from '../axios/JpAxios';
import swal from "sweetalert";
export const AddUserService = async(data)=> {
                await jpAxios.post('/users', data).then(res => {
                console.log(res)
                swal({
                    text: `کاربر ${res.data.name} اضافه شد`,
                    icon: "success"
                })
            })
}
export const UpdateUserService = async(data, userId)=> {
                await jpAxios.put(`/users/${userId}`, data).then(res => {
                console.log(res)
                swal({
                    text: `کاربر ${res.data.name} ویرایش شد`,
                    icon: "success"
                })
            })
}
