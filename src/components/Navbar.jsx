/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification2Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.'
import {useStateContext} from '../contexts/ContextProvider'

// Common Component for Navbar
const NavButton = ({title, customFunc, color, dotColor, icon}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      style={{color}}
      onClick={customFunc}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{background: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClicked,
    screenSize,
    setScreenSize,
  } = useStateContext()

  // Handle Active menu
  const handleActiveMenu = () => setActiveMenu(!activeMenu)

  // Use Effect
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // use Effect for Screen Size
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  console.log(isClicked)
  console.log(screenSize)

  // Component Return
  return (
    <div className="relative flex justify-between p-3 md:mx-6">
      <NavButton
        title="Menu"
        icon={<AiOutlineMenu />}
        color={'blue'}
        customFunc={handleActiveMenu}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          icon={<FiShoppingCart />}
          color={'blue'}
          customFunc={() => handleClicked('cart')}
        />
        <NavButton
          title="Chat"
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
          color={'blue'}
          customFunc={() => handleClicked('chat')}
        />
        <NavButton
          title="Notification"
          icon={<RiNotification2Line />}
          dotColor="rgb(254, 201, 15)"
          color={'blue'}
          customFunc={() => handleClicked('notification')}
        />
        <TooltipComponent
          content={'Profile'}
          position="BottomCenter"
          onClick={() => handleClicked('userProfile')}
        >
          <div className="flex gap-2 items-center hover:bg-light-gray p-1 cursor-pointer rounded-lg">
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  )
}

export default Navbar
