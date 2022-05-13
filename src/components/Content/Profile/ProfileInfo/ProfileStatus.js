import React, { useEffect, useState } from "react";


const ProfilStatus = props => {
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => setEditMode(true)
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateUserStatus(status)
   }

   const onStatusChange = (e) => setStatus(e.currentTarget.value)

   return (
      <div>
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