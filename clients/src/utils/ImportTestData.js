import React, { useState } from 'react'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import { Button, FormControl } from 'react-bootstrap'

export const ImportTestData = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetcharset=UTF-8'
    const fileExtension = '.xlsx'

    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedFileData, setSelectedFileData] = useState(null)

    const importFile = (datasource, fileName) => {
        const ws = XLSX.utils.json_to_sheet(datasource)
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
        const data = new Blob([excelBuffer], { type: fileType })
        FileSaver.saveAs(data, fileName + fileExtension)
    }

    const handleOnFileChange = async (event) => {
        if (event.target.files[0]) {
            const file = event.target.files[0]
            setSelectedFile(file)
            const data = await file.arrayBuffer()
            const workbook = XLSX.read(data)
            console.log(workbook)
            const sheetnames = workbook.SheetNames

            const info = workbook.Sheets[sheetnames[0]]
            const de1 = workbook.Sheets[sheetnames[1]]

            const infoData = XLSX.utils.sheet_to_json(info)
            const de1Data = XLSX.utils.sheet_to_json(de1)
            console.log(infoData)
            console.log(de1Data)

            setSelectedFileData(workbook)
        }
    }

    return (
        <div className="row">
            <div className="col-10">
                <FormControl type="file" onChange={handleOnFileChange}/>
            </div>
            <div className="col-2 d-flex justify-content-start align-items-center">
                <Button type="submit" variant="primary" size="sm"
                    onClick={() => importFile()}>
                    <i className="fa fa-upload"></i>
                </Button>
            </div>
        </div>
    )
}