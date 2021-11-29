import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    TelegramShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from 'react-share'

import './Share.scss'

export function ShareFacebook({ url, title = '', hashtags = [] }) {
    const tags = hashtags.map(tag => '#' + tag).join(' ')
    return (
        <FacebookShareButton
            url={url}
            quote={title}
            hashtag={tags}
            className="Demo__some-network__share-button"
        >
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
        </FacebookShareButton>
    )
}

export function ShareMessenger({ url }) {
    return (
        <FacebookMessengerShareButton
            url={url}
            appId={process.env.REACT_APP_FB_APP_ID}
            className="Demo__some-network__share-button"
        >
            <img src="https://img.icons8.com/fluency/48/000000/facebook-messenger--v2.png" />
        </FacebookMessengerShareButton>
    )
}

export function ShareTwitter({ url, title = '', hashtags = [] }) {
    return (
        <TwitterShareButton
            url={url}
            title={title}
            hashtags={hashtags}
            className="Demo__some-network__share-button"
        >
            <img src="https://img.icons8.com/fluency/48/000000/twitter.png" />
        </TwitterShareButton>
    )
}

export function ShareTelegram({ url, title = '', content = '' }) {
    return (
        <TelegramShareButton
            url={url}
            title={title}
            caption={content}
            className="Demo__some-network__share-button"
        >
            <img src="https://img.icons8.com/fluency/48/000000/telegram-app.png" />
        </TelegramShareButton>
    )
}

export function ShareLinkedin({ url, title = '', content = '', source = '' }) {
    return (
        <LinkedinShareButton
            url={url}
            title={title}
            summary={content}
            source={source}
            className="Demo__some-network__share-button"
        >
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
        </LinkedinShareButton>
    )
}

export function ShareEmail({ url, title = '', content = '' }) {
    return (
        <EmailShareButton
            url={url}
            subject={title}
            body={content}
            className="Demo__some-network__share-button"
        >
            <img src="https://img.icons8.com/fluency/48/000000/edit-message.png" />
        </EmailShareButton>
    )
}

export default function Share({ isShow, handleIsShow, shareContent }) {
    const { url, title, content, hashtags, source } = shareContent
    return (
        <Modal
            show={isShow === true}
            centered
            backdrop='static'
            keyboard={false}
            onHide={() => handleIsShow(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Chia sẻ</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <ShareFacebook url={url} title={title} hashtags={hashtags} />
                <ShareMessenger url={url} />
                <ShareTwitter url={url} title={title} hashtags={hashtags} />
                <ShareTelegram url={url} title={title} content={content} />
                <ShareLinkedin url={url} title={title} content={content} source={source} />
                <ShareEmail url={url} title={title} content={content} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleIsShow(false)}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    )
}