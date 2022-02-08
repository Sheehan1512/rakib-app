import './Modal.css';

function Modal({children, handleClose}) {
    return(
        <section className="modal-backdrop">
            <section className="modal">
                {children}
                <button onClick={handleClose}>Close Modal</button>
            </section>
        </section>
    );
}

export default Modal;