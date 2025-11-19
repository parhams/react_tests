import { useEffect, useRef, useState, memo } from "react"

let counter = 0
const Fcomponent = () => {
    const [name, setName] = useState("");
    const myInput = useRef();

    const handelChangeName = () => {
        setName(myInput.current.value)
    }

    useEffect(() => {
        myInput.current.focus();
    }, [])

    return (
        <div className="form-group-text text-center mt-4 p-3">
            <h4 className="text text-center text-dark">حدس کلمه</h4>
            <input type="text" ref={myInput} class="form-control"

                placeholder="" autoComplete="off" />
            <button className="btn btn-warning my-3" onClick={handelChangeName}>ثبت</button>
            <button className="btn btn-secondary my-3 mx-2"
                onClick={() => { myInput.current.value = "" }}>مخفی</button>
            <br />
            <span className="text text-centertext-success">{++counter}</span>
        </div>
    )
}
export default memo(Fcomponent);