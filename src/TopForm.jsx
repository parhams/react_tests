import { Fragment } from "react/jsx-runtime"

const TopForm = () => {
    return (
        <Fragment>
            <h4 className="text-center text-info text_shadow">
                به پروژه من خوش آمدید
            </h4>
            <form >
                <div className="form-group d-flex">
                    <input type="text" name="" id="" className="form-control" />
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </Fragment>
    )

}

export default TopForm;
