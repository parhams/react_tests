import { createRef } from "react";
import ParentCompo from "./ParentCompo";

class PureCompo extends ParentCompo {

    constructor() {
        super()
        this.state = {
            name: "salam"
        }
        this.myInput = createRef()
        this.counter = 0;
    }

    handelChangeName = ()=> {
        this.setState({
            name: this.myInput.current.value
    })
    }



    render() {
        return (
            <div className="form-group-text text-center mt-4 p-3">
                <h4 className="text text-center text-dark">حدس کلمه</h4>
                <input type="text" ref={this.myInput} class="form-control" 
                
                placeholder="" autoComplete="off"/>
                <button className="btn btn-warning my-3" onClick={this.handelChangeName}>ثبت</button>
                <button className="btn btn-secondary my-3 mx-2" 
                onClick={() => {this.myInput.current.value = ""}}>مخفی</button>
                <br/>
                <span className="text text-centertext-success">{this.counter++}</span>
            </div>
        )
    }
}

export default PureCompo;
