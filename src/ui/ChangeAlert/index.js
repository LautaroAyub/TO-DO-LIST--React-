import React from "react"
import "./index.css"
import { withStorageListener } from "./WithStorageListener"

const ChangeAlert = ({ show, toggleShow }) => {
    if (show) {
        return (
          
            <div className="change-alert-container">
                <div className="change-alert-content">
                <p>!Se detectaron cambios!</p>
                <button
                onClick={()=>toggleShow(false)}
                >
               Refrescar
                </button>

                </div>
            </div>

        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export default ChangeAlertWithStorageListener