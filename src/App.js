import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

// Components
import {Navbar, Sidebar, ThemeSettings, Footer} from './components'
// Pages
import {
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  ECommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
  Area,
  Bar,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from './pages'

import './App.css'

import {useStateContext} from './contexts/ContextProvider'

const App = () => {
  const {activeMenu} = useStateContext()

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Setting icon --------------------------------------- */}
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content={'Settings'} position="Top">
              <button
                type="button"
                className=" p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{backgroundColor: 'blue', borderRadius: '50%'}}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/*  SideBar ---------------------------------------------- */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar  dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-bg border-2 bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            {/* NavBar--------------------------------------------------- */}

            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* Routes----------------------------------------------------------  */}
            <div className="">
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<ECommerce />} />
                <Route path="/ecommerce" element={<ECommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps/Pages */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts/Pages   */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
