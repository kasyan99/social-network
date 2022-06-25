import React, { ChangeEvent, useEffect, useState } from "react";
import classes from './ProfileInfo.module.css'

type PropsType = {
   status: string
   owner: boolean
   updateUserStatus: (status: string) => void
}

const ProfilStatus: React.FC<PropsType> = (props) => {
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => props.owner && setEditMode(true)
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateUserStatus(status)
   }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

   return (
      <div className={classes.status}>
         {editMode &&
            <div>
               <input autoFocus={true} onBlur={deactivateEditMode} value={status} onChange={onStatusChange} />
            </div>
         }
         {
            !editMode &&
            <div>
               <span onClick={activateEditMode}>{props.status || '---'}</span>
            </div>
         }
      </div>
   )
}

export default ProfilStatus