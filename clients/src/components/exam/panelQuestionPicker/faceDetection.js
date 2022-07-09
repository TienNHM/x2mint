import { updateTakeTest } from "actions/api/TakeTestAPI"
import { cloneDeep } from "lodash"
import { toast } from "react-toastify"
import { TAKE_TEST_LOGS } from "utils/constants"

// const faceapi = window.faceapi
const model = process.env.PUBLIC_URL + '/scripts/models'
export const TIMEOUT = 10000

export const initWebcam = (faceapi, videoRef, setVideo) => {
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(model),
        faceapi.nets.faceLandmark68Net.loadFromUri(model),
        faceapi.nets.faceRecognitionNet.loadFromUri(model),
        faceapi.nets.faceExpressionNet.loadFromUri(model)
    ]).then(startVideo)

    function startVideo() {
        navigator.mediaDevices
            .getUserMedia({ video: {} })
            .then(stream => {
                let video = videoRef.current
                video.srcObject = stream
                video.play()
                setVideo(video)
            })
            .catch(err => {
                console.error('error:', err)
            })
    }
}

export const stopWebcam = (videoRef) => {
    if (!videoRef) {
        return
    }

    let stream = videoRef.current.srcObject
    const tracks = stream.getTracks()

    tracks.forEach(track => track.stop())
    videoRef = null
}

export default function FaceDetect(faceapi, handle, timeout = TIMEOUT) {
    // const video = document.getElementById('video')

    const {
        video,
        setVideo,
        videoRef,
        takeTest,
        submit,
        setIsSubmitted
    } = handle

    if (!video || !videoRef) {
        return
    }

    var t = 0
    var countNoFaceDetected = 0
    var isSubmited = false
    // const canvas = faceapi.createCanvas(video)
    // document.body.append(canvas)
    // const displaySize = { width: video.width, height: video.height }
    // faceapi.matchDimensions(canvas, displaySize)

    const myInterval = setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        // .withFaceLandmarks()
        // .withFaceExpressions()

        if (!detections || detections.length <= 0) {
            if (Date.now() - t > timeout) {
                console.log('No face detected!')
                t = Date.now()
                countNoFaceDetected += 1
                await faceDetectHandle()
            }
        }
        else {
            t = Date.now()
            console.log(t)
        }
        // const resizedDetections = faceapi.resizeResults(detections, displaySize)
        // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        // faceapi.draw.drawDetections(canvas, resizedDetections)
        // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    }, 1000)

    const faceDetectHandle = async () => {
        if (countNoFaceDetected <= TAKE_TEST_LOGS.MAX_NO_FACE_DETECTED) {
            toast.error(
                '💢 Không phát hiện thấy khuôn mặt. Vui lòng đảm bảo camera được bật trong điều kiện đủ ánh sáng để tiếp tục làm bài!')

            await updateTakeTest(
                cloneDeep(takeTest),
                '⚠ Không phát hiện khuôn mặt thí sinh.'
            )
        }
        else {
            toast.error('💢 Bài thi vi phạm quy chế thi!')
            await submit(takeTest._id)
            setVideo(null)
            stopWebcam(videoRef)
            setIsSubmitted(true)
            clearInterval(myInterval)
            return
        }
    }
}