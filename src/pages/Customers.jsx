import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Selection,
} from '@syncfusion/ej2-react-grids'

import {customersGrid, customersData} from '../data/dummy'
import {Header} from '../components'

const Customers = () => {
  const selectionsettings = {persistSelection: true}
  const toolbarOptions = ['Delete']
  const editing = {allowDeleting: true, allowEditing: true}

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category={'Page'} title={'Customers'} />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        pageSettings={{pageCount: '5'}}
        allowPaging
        width={'auto'}
        editSettings={editing}
        toolbar={toolbarOptions}
        allowSorting
        selectionSettings={selectionsettings}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers
