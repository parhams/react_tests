import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import { jpAxios } from '../axios/JpAxios';


const User = () => {
    const navigate = useNavigate();

    // let promise = new Promise((resolve, reject)=> {
    //     console.log(1);
    //     setTimeout(()=>{
    //         console.log(2);
    //         resolve(true)
    //     }, 1000)

    // })
    // promise.then(res=>{
    //     console.log(res + " : " + 3);
    // }).catch(err=> {
    //     console.log(err)
    // })

    const func = () => {
        return new Promise((resolve, reject) => {
            console.log(1);
            setTimeout(() => {
                console.log(2);
                resolve(true)
            }, 1000)
        })
    }

    const test = async () => {
        const res = await func();
        if (res)
            console.log(3);
    }

    test()

    const [users, setUsers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);

    useEffect(() => {
        jpAxios.get('/users').then(res => {
            console.log(res)
            setUsers(res.data)
            setMainUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const handelSearch = (e) => {
        console.log(e.target.value)
        users.filter(u => u.name.include(e.target.value))
    }
    const handelDelete = (itemId) => {
        swal({
            title: "حذف رکورد!",
            text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
            icon: "warning",
            buttons: true,
            dangermode: true
        }).then(
            (willDelete) => {
                if (willDelete) {
                    jpAxios.delete(`/users/${itemId}`).then(res => {
                        if (res.status === 200) {
                            const newUsers = users.filter(u => u.id !== itemId)
                            setUsers(newUsers)
                            swal("حذف با موفقیت انجام شد", { icon: "success", buttons: "متوجه شدم" });
                        } else {
                            swal("فرایند حذف با خطا مواجه شد", { icon: "danger", buttons: "متوجه شدم" });
                        }
                    }
                    )
                } else {
                    swal("شما از حذف رکورد منصرف شدید");
                }
            }
        );
    }
    return (
        <div className="item-content mt-5 p-4 container-fluid">
            <h4 className='text-center'>مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" onChange={handelSearch} placeholder="جستجو" />
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/user/add" state={"vue"}>
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>

                    </Link>
                </div>
            </div>
            {users.length ? (<table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">نام</th>
                        <th scope="col">نام کاربری</th>
                        <th scope="col">ایمیل</th>
                        <th scope="col" className="text-center">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <th scope="row">{u.id}</th>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>

                                <button className="btn btn-edit">
                                    <i className="fas fa-edit text-warning" onClick={() => navigate(`/user/add/${u.id}`,
                                        {
                                            state: {
                                                x: "react",
                                                y: "angular"
                                            }
                                        }
                                    )}></i>
                                </button>

                                <button className="btn btn-delete" onClick={() => handelDelete(u.id)}>
                                    <i className="fas fa-trash text-danger"></i>
                                </button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>) : (<h4>کمی صبر کنید ...</h4>)}

        </div>
    )
}

export default User;