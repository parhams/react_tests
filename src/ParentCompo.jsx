import { createRef, PureComponent } from "react";
import PureCompo from "./PureCompo";
import Fcomponent from "./Fcomponent";

class ParentCompo extends PureComponent {
    constructor() {
        super();
        this.pureCompoRef = createRef()
    }

    render() {
        return (
            <div className="from-group-text m-4 p-2">
                {/* <PureCompo value={this.pureCompoRef} /> */}
                <Fcomponent/>
            </div>
        )
    }
}

export default ParentCompo;