import React from 'react'
import { object, string, func, element, oneOfType } from 'prop-types'
import PapaParse from 'papaparse'



{/* 
                delimiter?: string; // default: ","
    newline?: string; // default: "\r\n"
    quoteChar?: string; // default: '"'
    header?: boolean; // default: false
    trimHeaders?: boolean; // default: false
    dynamicTyping?:
        | boolean
        | { [headerName: string]: boolean; [columnNumber: number]: boolean }
        | ((field: string | number) => boolean); // default: false
    preview?: number; // default: 0
    encoding?: string; // default: ""
    worker?: boolean; // default: false
    comments?: boolean | string; // default: false
    download?: boolean; // default: false
    skipEmptyLines?: boolean | 'greedy'; // default: false
    fastMode?: boolean; // default: undefined
    withCredentials?: boolean; // default: undefined */}
    <form>
    <label>
            delimiter:
            <input type="text" name="name" />
        </label>
        <label>
            quoteChar:
            <input type="text" name="name" />
        </label>
        <label>
            delimiter:
            <input type="text" name="name" />
        </label>
        <label>
            text encoding:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>

    
const CSVReader = ({
    accept = '.csv, text/csv',
    cssClass = 'csv-reader-input',
    cssInputClass = 'csv-input',
    fileEncoding = 'UTF-8',
    inputId = null,
    inputStyle = {},
    label,
    subLabel,
    onError,
    onFileLoaded,
    parserOptions = {},
  }) => {
    const handleChangeFile = e => {
        let reader = new FileReader()
        if (e.target.files.length > 0) {
          const filename = e.target.files[0].name
    
          reader.onload = event => {
            const csvData = PapaParse.parse(
              event.target.result,
              Object.assign(parserOptions, {
                error: onError,
                encoding: fileEncoding,
              }),
            )
            onFileLoaded(csvData.data, filename)
          }
    
          reader.readAsText(e.target.files[0], fileEncoding)
        }
      }
    
      return (
        <div className={cssClass}>
          {label && <label htmlFor={inputId}>{label}</label>}
          {subLabel && <label htmlFor={inputId}>{subLabel}</label>}
          <input
            className={cssInputClass}
            type="file"
            id={inputId}
            style={inputStyle}
            accept={accept}
            onChange={event => handleChangeFile(event)}
          />
        </div>
      )
    }
    
    CSVReader.propTypes = {
      accept: string,
      cssClass: string,
      cssInputClass: string,
      fileEncoding: string,
      inputId: string,
      inputStyle: object,
      label: oneOfType([string, element]),
      onError: func,
      onFileLoaded: func.isRequired,
      parserOptions: object,
    }
    
    export default CSVReader