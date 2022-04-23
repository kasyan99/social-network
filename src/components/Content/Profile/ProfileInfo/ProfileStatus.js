import React from "react";

class ProfilStatus extends React.Component {
   state = {
      editMode: false
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   deactivateEditMode = () => {
      console.log('dfd');
      this.setState({
         editMode: false
      })
   }

   render() {
      return (
         <div>
            {
               this.state.editMode
                  ? <div>
                     <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode} />
                  </div>
                  : <div>
                     <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                  </div>
            }
         </div>
      )
   }
}

export default ProfilStatus