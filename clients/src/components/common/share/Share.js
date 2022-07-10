import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    TelegramShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from 'react-share'
import { toast } from 'react-toastify'

import './Share.scss'

export function CopyToClipboard({ url }) {
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url)
        toast.success('🔗 Đã copy thành công!')
    }

    return (
        <Button
            variant='outline-secondary'
            style={{ borderRadius: '50%' }}
            onClick={() => handleCopyToClipboard(url)}>
            <i className="fas fa-clipboard"></i>
        </Button>
    )
}

export function ShareFacebook({ url, title = '', hashtags = [] }) {
    const tags = hashtags.length > 0 ? hashtags.map(tag => '#' + tag).join(' ') : ''
    return (
        <FacebookShareButton
            url={url}
            quote={title}
            hashtag={tags}
        >
            <img src="https://img.icons8.com/fluency/42/000000/facebook-new.png" />
        </FacebookShareButton>
    )
}

export function ShareMessenger({ url }) {
    return (
        <FacebookMessengerShareButton
            url={url}
            appId={process.env.REACT_APP_FB_APP_ID}
        >
            <img src="https://img.icons8.com/fluency/42/000000/facebook-messenger--v2.png" />
        </FacebookMessengerShareButton>
    )
}

export function ShareTwitter({ url, title = '', hashtags = [] }) {
    return (
        <TwitterShareButton
            url={url}
            title={title}
            hashtags={hashtags}
        >
            <img src="https://img.icons8.com/fluency/42/000000/twitter.png" />
        </TwitterShareButton>
    )
}

export function ShareTelegram({ url, title = '', content = '' }) {
    return (
        <TelegramShareButton
            url={url}
            title={title}
            caption={content}
        >
            <img src="https://img.icons8.com/fluency/42/000000/telegram-app.png" />
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
        >
            <img src="https://img.icons8.com/fluency/42/000000/linkedin.png" />
        </LinkedinShareButton>
    )
}

export function ShareEmail({ url, title = '', content = '' }) {
    return (
        <EmailShareButton
            url={url}
            subject={title}
            body={content}
        >
            <img src="https://img.icons8.com/color/42/000000/gmail-new.png" />
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
            size='sm'
            onHide={() => handleIsShow(false)}
        >
            <Modal.Header closeButton className="d-flex justify-content-center">
                <Modal.Title>Chia sẻ</Modal.Title>
            </Modal.Header>
            <Modal.Body className="share-content text-center">
                <CopyToClipboard url={url} />
                <ShareFacebook url={url} title={title} hashtags={hashtags} />
                <ShareMessenger url={url} />
                <ShareTwitter url={url} title={title} hashtags={hashtags} />
                <ShareTelegram url={url} title={title} content={content} />
                <ShareLinkedin url={url} title={title} content={content} source={source} />
                <ShareEmail url={url} title={title} content={content} />
            </Modal.Body>
        </Modal>
    )
}