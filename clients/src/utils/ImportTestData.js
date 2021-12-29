import React, { useState } from 'react'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import { Button, FormControl } from 'react-bootstrap'
import { TEST_DATA } from 'utils/constants'
import { createTest } from 'actions/api/TestAPI'
import { useSelector } from 'react-redux'

export const ImportTestData = () => {
    const user = useSelector((state) => state.auth.user)
    // const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetcharset=UTF-8'
    // const fileExtension = '.xlsx'

    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedFileData, setSelectedFileData] = useState(null)
    const [testInfo, setTestInfo] = useState(null)
    const [testData, setTestData] = useState(null)

    const importFile = () => {
        importTestData()
        importQuestions()
    }

    const importTestData = async () => {
        const start_time = testInfo[TEST_DATA.BASIC_INFO.START_DATE] + 'T'
            + testInfo[TEST_DATA.BASIC_INFO.START_TIME] + ':00.000Z'
        const end_time = testInfo[TEST_DATA.BASIC_INFO.END_DATE] + 'T'
            + testInfo[TEST_DATA.BASIC_INFO.END_TIME] + ':00.000Z'

        console.log(start_time, end_time)
        const test = {
            name: testInfo[TEST_DATA.BASIC_INFO.NAME],
            description: testInfo[TEST_DATA.BASIC_INFO.DESCRIPTION],
            pin: testInfo[TEST_DATA.BASIC_INFO.PIN],
            startTime: start_time,
            endTime: end_time,
            maxPoints: testInfo[TEST_DATA.BASIC_INFO.MAX_POINTS],
            creatorId: user.id
        }

        const newTestResponse = await createTest(test)
        console.log(newTestResponse)
    }

    const importQuestions = async () => {
        for (var question of testData) {
            console.log(question)
        }
    }

    const handleOnFileChange = async (event) => {
        if (event.target.files[0]) {
            const file = event.target.files[0]
            setSelectedFile(file)
            const data = await file.arrayBuffer()
            const workbook = XLSX.read(data)
            console.log(workbook)
            const sheetnames = workbook.SheetNames

            const _info = workbook.Sheets[sheetnames[0]]
            const _test = workbook.Sheets[sheetnames[1]]

            const info_data = XLSX.utils.sheet_to_json(_info)
            const test_data = XLSX.utils.sheet_to_json(_test)
            setTestInfo(info_data[0])
            setTestData(test_data)

            console.log(info_data)
            console.log(info_data[0]['Mô tả'])
            console.log(test_data)

            setSelectedFileData(workbook)
        }
    }

    return (
        <div className="row">
            <div className="col-10">
                <FormControl type="file" onChange={handleOnFileChange} />
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