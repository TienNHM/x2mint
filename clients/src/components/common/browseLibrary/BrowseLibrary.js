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
    const handleLinkChange = (event) => setLink(event.target.value)

    const [photos, setPhotos] = useState(null)
    const queryRef = useRef('')

    const handleOnSearchClick = () => {
        const query = queryRef.current.value.trim()
        client.photos
            .search({ query, per_page: 20 })
            .then((result) => {
                setPhotos(result.photos)
                console.log(result)
            })
    }

    useEffect(() => {
        if (selectedPhoto) {
            setLink(selectedPhoto.src.original)
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
                            <h6 className="seleted-photo-title">Ảnh được chọn</h6>
                            <img src={link} alt="Ảnh đã chọn" />
                        </div>
                    }
                    {photos &&
                        <div className="search-result">
                            <h6>Kết quả tìm kiếm</h6>
                            <div className="list-result-images">
                                {photos.map((photo, index) =>
                                    <Image
                                        key={index}
                                        photo={photo}
                                        updateSelectedPhoto={setSelectedPhoto}
                                    />
                                )}
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