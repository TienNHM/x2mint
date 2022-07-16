import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Form, Tabs, Tab, Image, Badge } from 'react-bootstrap'
import { createClient } from 'pexels'
import MyImage from 'components/common/myImage/MyImage'
import { MODAL_ACTION, MAX, ACCOUNT_TYPES } from 'utils/constants'
import './BrowseLibrary.scss'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player'

function BrowseLibrary({ show, onAction, isInsertQuestion }) {
    const user = useSelector((state) => state.auth.user)
    const client = createClient(process.env.REACT_APP_PEXELS_ID)
    const [link, setLink] = useState('')
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [photos, setPhotos] = useState(null)
    const [limit, setLimit] = useState(1)
    const [isHidden, setIsHidden] = useState(true)
    const [isUploaded, setIsUploaded] = useState(false)

    const queryRef = useRef('nature')

    //#region Handle functions

    //#region Upload image
    const [imgData, setImgData] = useState(null)
    const [imgFile, setImageFile] = useState(null)

    const handleOnImageChange = e => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setImgData(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
            setIsUploaded(false)
        }
    }

    const uploadImage = async () => {
        const url = process.env.REACT_APP_CLOUDINARY_API

        const formData = new FormData()
        formData.append('file', imgFile)
        formData.append('upload_preset', 'x2mint_upload')
        toast.warning('⏳ Vui lòng chờ quá trình upload ảnh hoàn tất!')

        const data = await fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return data
            })

        onAction(MODAL_ACTION.CONFIRM, data.secure_url)
        setIsUploaded(true)
    }
    //#endregion

    const search = (query, limit_num) => {
        const numPhotos = MAX.PHOTOS_PER_PAGE * limit_num
        client.photos
            .search({ query, per_page: numPhotos })
            .then((result) => {
                setPhotos(result.photos)
                if (numPhotos >= MAX.PHOTOS_IN_RESULTS) {
                    setIsHidden(true)
                    setLimit(1)
                }
                else setIsHidden(false)
            })
    }

    const handleOnSearchClick = () => {
        const query = queryRef.current.value.trim()
        if (query.length <= 0) {
            toast.warning('💢 Vui lòng nhập từ khóa tìm kiếm!')
        }
        else {
            setLimit(1)
            search(query, limit)
        }
    }

    const handleOnLoadMoreClick = () => {
        const query = queryRef.current.value.trim()
        setLimit(limit + 1)
        search(query, limit + 1)
    }

    const handleLinkChange = (event) => {
        setLink(event.target.value)
    }

    const updateSelectedPhoto = (photo, index) => {
        setSelectedPhoto(photo)
        setSelectedIndex(index)
    }
    //#endregion

    useEffect(() => {
        if (selectedPhoto) {
            setLink(selectedPhoto.src.medium)
        }
    }, [selectedPhoto])

    const RenderEmbedVideo = () => {
        if (isInsertQuestion) {
            return (
                <Tab eventKey="embed-video"
                    title={<span>Embed video <Badge bg="warning" pill>Pro</Badge></span>}
                    disabled={user && user.type !== ACCOUNT_TYPES.PRO}>
                    <div className="browse-modal" >
                        <div className="top-modal">
                            <div className="link-input-area d-flex justify-content-center">
                                <Form.Control
                                    size="sm" type="text"
                                    placeholder="Link video (YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion và Kaltura)"
                                    className="text-input w-75"
                                    value={link}
                                    onChange={(e) => handleLinkChange(e)}
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                {link.length > 0 && ReactPlayer.canPlay(link) && <>
                                    <ReactPlayer url={link} />
                                </>}
                            </div>
                        </div>
                    </div>
                </Tab>
            )
        }
        else {
            return <></>
        }
    }

    return (
        <Modal
            size="lg"
            show={show}
            fullscreen={true}
            onHide={() => onAction(MODAL_ACTION.CLOSE)}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton className="d-flex justify-content-center">
                <Modal.Title className="h4 text-center w-100">Chọn ảnh</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Tabs defaultActiveKey="image-link"
                    id="browse-library"
                    className="mb-3">

                    <Tab eventKey="image-link" title="Link ảnh">
                        <div className="browse-modal" >
                            <div className="top-modal">
                                <div className="link-input-area d-flex justify-content-center">
                                    <Form.Control
                                        size="sm" type="text"
                                        placeholder="Link trực tiếp đến ảnh đã chọn (JPG, JPEG, PNG, GIF, SVG...)"
                                        className="text-input w-75"
                                        value={link}
                                        onChange={(e) => handleLinkChange(e)}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    {link.length > 0 &&
                                        <Image src={link} style={{ height: '60vh' }}
                                            className="mt-3"
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="image-resources" title="Ảnh resources">
                        <div className="browse-modal" >
                            <div className="top-modal">
                                <div className="search-area">
                                    <div className="search d-flex justify-content-center">
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            ref={queryRef}
                                            placeholder="Nhập từ khóa tìm kiếm..."
                                            className="text-input w-75"
                                            onKeyDown={event => event.key === 'Enter' && handleOnSearchClick()}
                                        />
                                        <Button
                                            variant="primary" size="sm"
                                            onClick={handleOnSearchClick}
                                        >
                                            <i className="fa fa-search me-2"></i>
                                            <span className="fw-bolder">Tìm</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {photos &&
                                <div className="search-result">
                                    <div className="section-title">Kết quả tìm kiếm</div>
                                    <div className="list-result-images">
                                        {photos.map((photo, index) =>
                                            <MyImage
                                                key={index}
                                                photo={photo}
                                                index={index}
                                                selectedIndex={selectedIndex}
                                                updateSelectedPhoto={updateSelectedPhoto}
                                            />
                                        )}
                                    </div>
                                    <div className="load-more">
                                        <Button variant="primary" size="sm"
                                            hidden={isHidden}
                                            onClick={handleOnLoadMoreClick}>
                                            Xem thêm...
                                        </Button>
                                    </div>
                                </div>
                            }
                        </div>
                    </Tab>

                    <Tab eventKey="image-upload"
                        title={<span>Upload ảnh <Badge bg="warning" pill>Pro</Badge></span>}
                        disabled={user && user.type !== ACCOUNT_TYPES.PRO}>
                        <div className="browse-modal" >
                            <div className="top-modal">
                                <div className="link-input-area d-flex justify-content-center">
                                    <Form.Control
                                        size="sm" type="file"
                                        accept=".jpg,.jpeg,.png"
                                        className="text-input w-75"
                                        onChange={handleOnImageChange}
                                    />
                                    <Button
                                        variant="primary" size="sm"
                                        onClick={() => uploadImage()}
                                    >
                                        <i className="fa fa-upload me-2"></i>
                                        <span className="fw-bolder">Tải lên</span>
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-center">
                                    {imgData &&
                                        <div className="d-flex flex-column">
                                            {!isUploaded &&
                                                <div className="text-danger text-center">
                                                    Vui lòng upload ảnh!
                                                </div>
                                            }
                                            <Image src={imgData} style={{ height: '58vh' }}
                                                className="my-1"
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </Tab>

                    {RenderEmbedVideo()}
                </Tabs>

            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="secondary"
                    onClick={() => onAction(MODAL_ACTION.CLOSE, link)}>
                    Đóng
                </Button>

                <Button variant="primary"
                    onClick={() => onAction(MODAL_ACTION.CONFIRM, link)}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BrowseLibrary