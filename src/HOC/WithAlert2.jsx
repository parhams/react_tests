import swal from 'sweetalert';
const WithAlert2 = (props) => {

            const Confirm = (message) => {
            return swal({
                title: "حذف رکورد!",
                text: message,
                icon: "warning",
                buttons: true,
                dangermode: true
            })
        }
        const Alert = (message, icon) => {
            return swal({
                text: message,
                icon: icon,
                buttons: "متوجه شدم",
            })
        }
        return (
            <>
            {props.children(Confirm, Alert)}
            </>
        )

}
export default WithAlert2;