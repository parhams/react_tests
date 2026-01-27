import { memo } from "react"

const Title = (props) => {
    return (
        <div>
            <h3 className="text text-center text-info">{props.title}</h3>
        </div>
    )
}

export default memo(Title);