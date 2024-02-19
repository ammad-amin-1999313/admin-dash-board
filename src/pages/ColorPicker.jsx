import React from 'react'

import {ColorPickerComponent} from '@syncfusion/ej2-react-inputs'

import {Header} from '../components'

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-24 bg-white rounded-3xl">
      <Header category="App" title="ColorPicker" />
      <div>
        <div id="preview"></div>
        <div className="flex items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="in-pallete"
              mode="pallete"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
