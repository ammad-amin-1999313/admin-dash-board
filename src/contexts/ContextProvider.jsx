import React, {useState, createContext, useContext} from 'react'

const StateContext = createContext()

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
}

export const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')

  const handleClicked = clicked => {
    setIsClicked({...initialState, [clicked]: true})
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClicked,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
