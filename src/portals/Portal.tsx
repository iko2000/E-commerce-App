import React, {useMemo, useEffect} from 'react';
import ReactDOM from "react-dom";

interface ModalProps {
    children: JSX.Element | JSX.Element[]
}

const modalRoot = document.getElementById('modal-root') as HTMLDivElement
 
export default function Portal({children}: ModalProps) {

    const element = document.createElement('div');
   
    useEffect(() => {

    modalRoot?.appendChild(element);
    }, [])

    return  ReactDOM.createPortal(children, modalRoot)

}


