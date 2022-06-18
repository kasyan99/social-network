import React from "react"
import styles from "./FormsControls.module.css"

export const Element = (Element: string) => {
   return ({ input, meta: { touched, error }, ...props }): React.ReactElement => {
      const hasError = touched && error
      return (
         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {hasError && <span>{error}</span>}
            <Element {...props} {...input} />
         </div>
      )
   }
}
