import React from 'react';
import Select from 'react-select';
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';

export const RenderSelectInput = ({input, options, name, id, value}) => (
    <Select 
         {...input}
         id={id} 
         name={name} 
         options={options}
         value={value}
         onChange={(value) => input.onChange(value)}
         onBlur={(value) => input.onBlur(value)}
    />
)


export const RenderMultiSelectInput = ({input, data, valueField, textField}) => (
    <Multiselect {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={data}
        valueField={valueField}
        textField={textField}
    />
)

export const renderSelectList = ({ input, data }) =>
  <SelectList {...input}
    onBlur={() => input.onBlur()}
    data={data} />