import React, { useState } from 'react'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import { Button, FormControl } from 'react-bootstrap'
import { QUESTION_TYPE, TEST_DATA } from 'utils/constants'
import { createTest, updateQuestionsInTest } from 'actions/api/TestAPI'
import { createQuestion, updateQuestion } from 'actions/api/QuestionAPI'
import { createAnswer } from 'actions/api/AnswerAPI'
import { useSelector } from 'react-redux'
import { updateTestsInContest } from 'actions/api/ContestAPI'
import { cloneDeep } from 'lodash'

export const ImportTestData = ({ contest, setContest, setData }) => {
    const user = useSelector((state) => state.auth.user)
    // const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetcharset=UTF-8'
    // const fileExtension = '.xlsx'

    const [selectedFile, setSelectedFile] = useState(null)
    const [selectedFileData, setSelectedFileData] = useState(null)
    const [testInfo, setTestInfo] = useState(null)
    const [testData, setTestData] = useState(null)

    const importFile = async () => {
        const testId = await importTestData()
        const data = await importQuestions(testId)

        // Update lại contest
        const testsList = [...contest.tests]
        const testIDs = testsList.map(x => x._id)
        testIDs.push(data.id)
        const updateContestResponse = await updateTestsInContest(contest.id, testIDs)
        console.log(updateContestResponse)
        setContest(cloneDeep(updateContestResponse.contest))
        setData(cloneDeep(updateContestResponse.contest.tests))
    }

    const importTestData = async () => {
        const start_time = testInfo[TEST_DATA.BASIC_INFO.START_DATE] + 'T'
            + testInfo[TEST_DATA.BASIC_INFO.START_TIME] + ':00.000Z'
        const end_time = testInfo[TEST_DATA.BASIC_INFO.END_DATE] + 'T'
            + testInfo[TEST_DATA.BASIC_INFO.END_TIME] + ':00.000Z'

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
        return newTestResponse.test.id
    }

    const importQuestions = async (testId) => {
        let questionsList = []
        for (var question of testData) {
            // Create new question
            const quiz = {
                content: question[TEST_DATA.QUESTION.CONTENT],
                correctAnswers: question[TEST_DATA.QUESTION.CORRECT_ANSWERS].split(', '),
                embededMedia: question[TEST_DATA.QUESTION.EMBEDED_MEDIA],
                type: QUESTION_TYPE.MULTICHOICE
            }
            const questionResponse = await createQuestion(quiz, testId)

            // Add question to questions List in test
            questionsList.push(questionResponse.question.id)

            // Create newQuestion to update question
            const newQuestion = {
                ...questionResponse.question,
                _id: questionResponse.question.id
            }
            delete newQuestion.id

            // Add answersList to question
            const answersList = await importAllAnswers(newQuestion._id, question)
            await updateQuestion(
                {
                    ...newQuestion,
                    answers: answersList
                }
            )
        }

        // Add questionsList to test
        const updateTestResponse = await updateQuestionsInTest(testId, questionsList)
        return updateTestResponse.test
    }

    const importAllAnswers = async (questionId, question) => {
        const answersList = []
        if (question[TEST_DATA.QUESTION.A]) {
            const answerA = await importAnswer(questionId, question, TEST_DATA.QUESTION.A)
            answersList.push(answerA)
        }
        if (question[TEST_DATA.QUESTION.B]) {
            const answerB = await importAnswer(questionId, question, TEST_DATA.QUESTION.B)
            answersList.push(answerB)
        }
        if (question[TEST_DATA.QUESTION.C]) {
            const answerC = await importAnswer(questionId, question, TEST_DATA.QUESTION.C)
            answersList.push(answerC)
        }
        if (question[TEST_DATA.QUESTION.D]) {
            const answerD = await importAnswer(questionId, question, TEST_DATA.QUESTION.D)
            answersList.push(answerD)
        }
        return answersList
    }

    const importAnswer = async (questionId, question, ans) => {
        if (ans) {
            const answer = {
                name: ans,
                content: question[ans]
            }
            const data = await createAnswer(answer, questionId)
            console.log(data)
            return data.answer.id
        }
    }

    const handleOnFileChange = async (event) => {
        if (event.target.files[0]) {
            const file = event.target.files[0]
            setSelectedFile(file)
            const data = await file.arrayBuffer()
            const workbook = XLSX.read(data)

            const sheetnames = workbook.SheetNames

            const _info = workbook.Sheets[sheetnames[0]]
            const _test = workbook.Sheets[sheetnames[1]]

            const info_data = XLSX.utils.sheet_to_json(_info)
            const test_data = XLSX.utils.sheet_to_json(_test)
            setTestInfo(info_data[0])
            setTestData(test_data)
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