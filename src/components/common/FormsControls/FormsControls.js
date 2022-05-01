import React from "react"
import styles from "./FormsControls.module.css"

export const Element = Element => {
   return ({ input, meta, ...props }) => {
      const hasError = meta.touched && meta.error
      return (
         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {hasError && <span>{meta.error}</span>}
            <Element {...props} {...input} />
         </div>
      )
   }
}
