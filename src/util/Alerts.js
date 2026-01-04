import swal from 'sweetalert'
export const Confirm = async(message) => {
    return swal({
        title: "حذف رکورد!",
        text: message,
        icon: "warning",
        buttons: true,
        dangermode: true
    })
}
export const Alert = (message, icon) => {
    return swal({
        text: message,
        icon: icon,
        buttons: "متوجه شدم",
    })
}
