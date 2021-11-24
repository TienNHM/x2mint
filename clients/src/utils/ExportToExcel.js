import React from 'react'
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import { Button } from 'react-bootstrap'

export const RemoveFields = (data, field) => {
    return data.map(({ field, ...keepAttrs }) => keepAttrs)
}

export const ExportToExcel = ({ apiData, fileName }) => {
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetcharset=UTF-8'
    const fileExtension = '.xlsx'

    const exportToCSV = (apiData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(apiData)
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
        const data = new Blob([excelBuffer], { type: fileType })
        FileSaver.saveAs(data, fileName + fileExtension)
    }

    return (
        <Button
            variant="success"
            onClick={(e) => exportToCSV(apiData, fileName)}
            className="fw-bolder"
        >
            Lưu (Excel)
        </Button>
    )
}