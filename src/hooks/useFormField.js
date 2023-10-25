import { useState } from "react"

export const useFormField = (initialData) => {

    const [input, setInput] = useState(initialData)
    
      const handleInputChange = (e) => {
         setInput((prevState) => ({
         ...prevState,
         [e.target.name] : e.target.value
      }))
      }

      return {handleInputChange, input}
    
}