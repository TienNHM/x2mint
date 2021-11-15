import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { createClient } from 'pexels'
import Image from 'components/common/image/Image'
import { MODAL_ACTION_CONFIRM, MODAL_ACTION_CLOSE } from 'utils/constants'
import './BrowseLibrary.scss'

function BrowseLibrary({ show, onAction }) {
    const client = createClient(
        '563492ad6f91700001000001e3ed7b53da4e4bd99fc84afc9b38fafb'
    )
    const [link, setLink] = useState('')
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const handleLinkChange = (event) => setLink(event.target.value)

    const [photos, setPhotos] = useState(null)
    const [limit, setLimit] = useState(1)
    const queryRef = useRef('')

    const search = (query, limit_num) => {
        client.photos
            .search({ query, per_page: 20*limit_num })
            .then((result) => {
                setPhotos(result.photos)
            })
    }

    const handleOnSearchClick = () => {
        const query = queryRef.current.value.trim()
        setLimit(1)
        search(query, limit)
    }

    const handleOnLoadMoreClick = () => {
        const query = queryRef.current.value.trim()
        setLimit(limit + 1)
        search(query, limit)
    }

    const updateSelectedPhoto = (photo, index) => {
        setSelectedPhoto(photo)
        setSelectedIndex(index)
    }

    useEffect(() => {
        if (selectedPhoto) {
            setLink(selectedPhoto.src.medium)
        }
    }, [selectedPhoto])

    return (
        <Modal
            size="lg"
            show={show}
            fullscreen={true}
            onHide={() => onAction(MODAL_ACTION_CLOSE)}
            backdrop='static'
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title className="h4 text-center w-100">Chọn ảnh</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="browse-modal" >
                    <div className="top-modal">
                        <div className="search-area">
                            <div>Tìm kiếm: </div>
                            <div className="search">
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    ref={queryRef}
                                    placeholder="Nhập từ khóa tìm kiếm..."
                                    className="text-input"
                                    onKeyDown={event => event.key === 'Enter' && handleOnSearchClick()}
                                />
                                <Button variant="primary" size="sm" onClick={handleOnSearchClick}>Tìm</Button>{' '}
                            </div>
                        </div>
                        <div className="link-input-area">
                            <div>Link ảnh: </div>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Link trực tiếp đến ảnh đã chọn (JPG, JPEG, PNG, GIF, SVG...)"
                                className="text-input"
                                value={link}
                                disabled={true}
                                onChange={handleLinkChange}
                            />
                        </div>
                    </div>
                    {selectedPhoto &&
                        <div className="selected-photo">
                            <div className="section-title">Ảnh được chọn</div>
                            <img src={link} alt="Ảnh đã chọn" />
                        </div>
                    }
                    {photos &&
                        <div className="search-result">
                            <div className="section-title">Kết quả tìm kiếm</div>
                            <div className="list-result-images">
                                {photos.map((photo, index) =>
                                    <Image
                                        key={index}
                                        photo={photo}
                                        index={index}
                                        selectedIndex={selectedIndex}
                                        updateSelectedPhoto={updateSelectedPhoto}
                                    />
                                )}
                            </div>
                            <div className="load-more">
                                <Button variant="primary" size="sm" onClick={handleOnLoadMoreClick}>Xem thêm...</Button>{' '}
                            </div>
                        </div>
                    }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE, selectedPhoto)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => onAction(MODAL_ACTION_CONFIRM, selectedPhoto)}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default BrowseLibrary