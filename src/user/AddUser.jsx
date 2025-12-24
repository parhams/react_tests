import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import {AddUserService, UpdateUserService} from '../service/UserService';
import { jpAxios } from '../axios/JpAxios';

const AddUser = () => {
    const { userId } = useParams();
    // const params = useLocation();
    // console.log(params);
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            city: "",
            street: "",
            suite: "",
            zipcode: ""
        }
    });
    useEffect(() => {
        if (userId) {
            jpAxios.get(`/users/${userId}`).then((res) => {
                setData(
                    {
                        name: res.data.name,
                        username: res.data.username,
                        email: res.data.email,
                        address: {
                            city: res.data.address.city,
                            street: res.data.address.street,
                            suite: res.data.address.suite,
                            zipcode: res.data.address.zipcode
                        }
                    }
                )
            })
        }
    }, [])
    const handelAddUser = (e) => {
        e.preventDefault()
        if (!userId) {
            AddUserService(data)
        } else {
            UpdateUserService(data, userId)
        }
    }
    return (
        <div className="item_content mt-5 p-4 container-fluid container">
            <h4 className="text-center text-primary">{!userId ? `افزودن کاربر` : `ویرایش کاربر`}</h4>
            <div className="row justify-content-center mt-5">
                <form onSubmit={handelAddUser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">نام و نام حانوادگی</label>
                        <input
                            className="form-control"
                            type="text" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">نام کاربری</label>
                        <input
                            className="form-control"
                            type="text"
                            value={data.username} onChange={(e) => { setData({ ...data, username: e.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ایمیل</label>
                        <input
                            className="form-control"
                            type="text"
                            value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label">آدرس</label>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-6">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="شهر"
                                value={data.address.city} onChange={(e) => { setData({ ...data, address: { ...data.address, city: e.target.value } }) }} />
                        </div>
                        <div className="col-6">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="خیابان"
                                value={data.address.street} onChange={(e) => { setData({ ...data, address: { ...data.address, street: e.target.value } }) }} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-6">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="ادامه آدرس"
                                value={data.address.suite} onChange={(e) => { setData({ ...data, address: { ...data.address, suite: e.target.value } }) }} />
                        </div>
                        <div className="col-6">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="کد پستی"
                                value={data.address.zipcode} onChange={(e) => { setData({ ...data, address: { ...data.address, zipcode: e.target.value } }) }} />
                        </div>
                    </div>

                    <div className="btn_box text-start col-12 mt-4">
                        <button type="submit" className="btn btn-primary">
                            {!userId ? `ثبت` : `ویرایش`}
                        </button>
                        <Link to="/">
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

export default AddUser;
