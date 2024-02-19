import React from 'react'

import {Header} from '../components'

import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'

import {EditorData} from '../data/dummy'

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-24 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
