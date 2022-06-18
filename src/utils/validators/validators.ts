export type FieldValidateType = (value: string) => string | undefined

export const requiredField: FieldValidateType = (value) => {

   if (value) {
      return undefined
   }

   return 'Field is required'
}

export const maxLengthCreator = (maxLength: number): FieldValidateType => {
   return (value) => {
      if (value && value.length > maxLength) {
         return `Max length is ${maxLength} symbols`
      }

      return undefined
   }
}
