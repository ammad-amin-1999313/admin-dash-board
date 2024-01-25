import React from 'react'
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Search,
  Page,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids'

import {employeesData, employeesGrid} from '../data/dummy'
import {Header} from '../components'

const Employees = () => {
  const toolbarOptions = ['Search']
  const editing = {allowDeleting: true, allowEditing: true}

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title={'Employees'} category={'page'} />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        width={'auto'}
        allowPaging
        allowSorting
        pageSettings={{pageCount: 5}}
        toolbar={toolbarOptions}
        editSettings={editing}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
