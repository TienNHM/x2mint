import React, { useState } from 'react'
import XLSX from 'xlsx'
import { Button, FormControl, Modal } from 'react-bootstrap'
import { QUESTION_TYPE, TEST_DATA } from 'utils/constants'
import { createTest, updateQuestionsInTest } from 'actions/api/TestAPI'
import { createQuestion, updateQuestion } from 'actions/api/QuestionAPI'
import { createAnswer } from 'actions/api/AnswerAPI'
import { useSelector } from 'react-redux'
import { updateTestsInContest } from 'actions/api/ContestAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

export const ImportTestData = ({ contest, isShow, onCloseAction }) => {
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()

    const [testInfo, setTestInfo] = useState(null)
    const [testData, setTestData] = useState(null)
    const [loading, setLoading] = useState(false)

    const importFile = async () => {
        if (testInfo && testData) {
            setLoading(true)
            toast.success('⏳ Đang tải đề thi lên, vui lòng chờ đợi trong ít phút!')
            const testId = await importTestData()
            const data = await importQuestions(testId)

            // Update lại contest
            const testsList = [...contest.tests]
            const testIDs = testsList.map(x => x._id)
            testIDs.push(data.id)
            await updateTestsInContest(contest.id, testIDs)
            setLoading(false)
            onCloseAction()
            navigate(`/test/${testId}`)
            toast.success('🎉 Đã hoàn tất tải lên!')
        }
        else {
            toast.error('💢 Vui lòng chọn file tải lên!')
        }
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
            return data.answer.id
        }
    }

    const handleOnFileChange = async (event) => {
        if (event.target.files[0]) {
            const file = event.target.files[0]
            const data = await file.arrayBuffer()
            const workbook = XLSX.read(data)

            const sheetnames = workbook.SheetNames

            const _info = workbook.Sheets[sheetnames[0]]
            const _test = workbook.Sheets[sheetnames[1]]

            const info_data = XLSX.utils.sheet_to_json(_info)
            const test_data = XLSX.utils.sheet_to_json(_test)
            setTestInfo(info_data[0])
            setTestData(test_data)
        }
    }

    return (
        <Modal
            show={isShow}
            onHide={() => onCloseAction()}
            backdrop='static'
            centered
            keyboard={false}>

            <Modal.Header closeButton className="d-flex justify-content-center">
                <Modal.Title className="h5 fw-bolder">Import đề thi</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="row p-3">
                    <FormControl type="file" onChange={handleOnFileChange} />
                </div>

                {loading &&
                    <div
                        className='sweet-loading d-flex justify-content-center align-items-center'
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 10000
                        }}>
                        <HashLoader color={'#7ED321'} loading={loading} />
                    </div>
                }
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary"
                    onClick={() => onCloseAction()}>
                    Đóng
                </Button>

                <a className="btn btn-success"
                    href={process.env.PUBLIC_URL + '/assets/samples/sample_test.xlsx'}
                    download>
                    <i className="fa fa-file mx-1"></i>
                    Mẫu đề thi
                </a>

                <Button variant="primary"
                    onClick={() => importFile()}>
                    <i className="fa fa-upload mx-1"></i>
                    Tải lên
                </Button>
            </Modal.Footer>
        </Modal>
    )
}