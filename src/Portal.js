import { createPortal } from 'react-dom';
export const Portal = () => {
    return createPortal(
        <div className="modal_base">
            <div className="modal_box">
                ریکت پرتال
            </div>
        </div>, document.getElementById('portal-root')
    )
}
export default Portal;