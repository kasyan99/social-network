import React from "react";
import preloader from '../../assets/img/loader.svg'

const Preloader = () => {
   return (
      <div className='loader'>
         <img src={preloader} alt="loading" />
      </div>
   )
}

export default Preloader