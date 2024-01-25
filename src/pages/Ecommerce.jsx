import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {Stacked, Pie, Button, SparkLine} from '../components'
import {earningData, SparklineAreaData} from '../data/dummy'
import {useStateContext} from '../contexts/ContextProvider'

const Ecommerce = () => {
  const {currentColor} = useStateContext()

  return (
    <div className="mt-12">
      {/* -------------------Earnings------------ */}

      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,488.78</p>
            </div>
            <button
              type="button"
              style={{backgroundColor: currentColor}}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              title={'Download'}
              bgColor={currentColor}
              color={'white'}
              borderRadius={'10px'}
            />
          </div>
        </div>
        {/* ----------- */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map(item => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{color: item.iconColor, backgroundColor: item.iconBg}}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ------------Revenue Updates------------ */}

      <div className="flex gap-10 flex-wrap  justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 m-3 rounded-2xl md:w-780 ">
          {/* ------------Revenue Updates    Expense    Budget------------ */}

          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 8 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
                    ></path>
                  </svg>
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 8 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
                    ></path>
                  </svg>
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Charts sparkline & */}

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-sm">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-10">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5 ">
                <SparkLine
                  currentColor={currentColor}
                  id="stack chart"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  title={'Download Report'}
                  color={'white'}
                  bgColor={currentColor}
                  borderRadius={10}
                />
              </div>
            </div>
            <div className="mt-8">
              <Stacked width="320px" height="320px" />
            </div>
          </div>
          {/* -- */}
        </div>
      </div>
      {/* --------------------Last--- */}
    </div>
  )
}

export default Ecommerce
