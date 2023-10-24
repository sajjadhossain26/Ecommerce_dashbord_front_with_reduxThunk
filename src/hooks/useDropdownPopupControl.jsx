import React, { useEffect, useRef, useState } from 'react'

const useDropdownPopupControl = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null)


    // toogle menu
    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutSide = (e) => {
        if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide)
        }
    }, [])
  return {isOpen, toogleMenu, dropDownRef}
}

export default useDropdownPopupControl
