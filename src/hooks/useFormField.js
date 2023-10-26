import { useState } from "react"

export const useFormField = (initialData) => {

    const [input, setInput] = useState(initialData)
    
      const handleInputChange = (e) => {
         setInput((prevState) => ({
         ...prevState,
         [e.target.name] : e.target.value
      }))
      }

      const formReset = () => {
         setInput(initialData)
      }

      return {handleInputChange, input, formReset}
    
}