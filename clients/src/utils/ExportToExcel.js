import React from 'react'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import { Badge, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPES } from './constants'

export const ExportToExcel = ({ apiData, fileName, fieldsToBeRemoved=[] }) => {
    const user = useSelector((state) => state.auth.user)
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetcharset=UTF-8'
    const fileExtension = '.xlsx'

    const data = [...apiData]

    data.forEach(value => {
        fieldsToBeRemoved.map(field => {
            delete value[field]
        })
    })

    const exportToCSV = (datasource, fileName) => {
        const ws = XLSX.utils.json_to_sheet(datasource)
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
        const data = new Blob([excelBuffer], { type: fileType })
        FileSaver.saveAs(data, fileName + fileExtension)
    }

    return (
        <Button
            variant="success"
            onClick={() => exportToCSV(data, fileName)}
            className="fw-bolder"
            disabled={user && user.type !== ACCOUNT_TYPES.PRO}
        >
            <i className="fas fa-save"></i>
            <span className="ps-2">
            Export excel <Badge pill bg="warning">Pro</Badge>
            </span>
        </Button>
    )
}