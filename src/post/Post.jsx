import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

const Post = () => {
    return (
        <div>
        <h4 className="text text-cenrter text-dark w-100">مدیریت پست</h4>
        <ClickCount />
        <HoverCount />
        </div>
    )
}

export default Post;