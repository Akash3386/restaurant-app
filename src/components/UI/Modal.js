import ReactDOM  from "react-dom"
import { Fragment } from "react"

import classes from './Modal.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop}>{props.children}</div>
}

const ModalOverlays = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement)}
    </Fragment>
};

export default Modal