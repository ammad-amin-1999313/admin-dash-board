import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import {useStateContext} from '../contexts/ContextProvider'

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize} = useStateContext()

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white bg-[#03C7D9]  text-md m-2'
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={'/'}
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 ml-3 mt-4 text-xl tracking-tight font-extrabold dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content={'Menu'} position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
                className="text-xl p-3 mt-4 rounded-full hover:bg-light-gray block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map(item => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map(data => (
                  <NavLink
                    key={data.name}
                    to={`/${data.name}`}
                    onClick={handleCloseSideBar}
                    className={({isActive}) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {data.icon}
                    <span className="capitalize">{data.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
