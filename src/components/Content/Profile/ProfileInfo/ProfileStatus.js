import React from "react";

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

export default ProfilStatus