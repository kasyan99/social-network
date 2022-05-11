import React, { useState } from "react";

class ProfilStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateUserStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.target.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (
         <div>
            {
               this.state.editMode
                  ? <div>
                     <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode} />
                  </div>
                  : <div>
                     <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                  </div>
            }
         </div>
      )
   }
}

// const ProfilStatus = props => {
//    console.log(props);
//    const [editMode, setEditMode] = useState(false)
//    const [status, setStatus] = useState(props.status)

//    const activateEditMode = () => setEditMode(false)
//    const deactivateEditMode = () => {
//       setEditMode(true)
//       props.updateUserStatus(status)
//    }

//    const onStatusChange = (e) => setStatus(e.target.value)

//    return (
//       <div>
//          {editMode
//             ? <div>
//                <input autoFocus={true} onBlur={activateEditMode} value={status} onChange={onStatusChange} />
//             </div>
//             : <div>
//                <span onClick={deactivateEditMode}>{props.status || '---'}</span>
//             </div>
//          }
//       </div>
//    )
// }

export default ProfilStatus