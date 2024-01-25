import React from 'react'
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
  return (
    <SparklineComponent
      id={id}
      width={width}
      height={height}
      dataSource={data}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{color: currentColor, width: 2}}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{visible: ['All'], size: 2.5, fill: currentColor}}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine