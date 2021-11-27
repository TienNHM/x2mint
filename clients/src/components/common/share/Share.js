import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    TelegramShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from 'react-share'

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    TelegramIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share'

export function ShareFacebook(url, quote = '', hashtag = '') {
    return (
        <FacebookShareButton
            url={url}
            quote={quote}
            hashtag={hashtag}
            className="Demo__some-network__share-button"
        >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
    )
}

export function ShareMessenger(url) {
    return (
        <FacebookMessengerShareButton
            url={url}
            appId={process.env.REACT_APP_FB_APP_ID}
            className="Demo__some-network__share-button"
        >
            <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
    )
}

export function ShareTwitter(url, title, hashtags = []) {
    return (
        <TwitterShareButton
            url={url}
            title={title}
            hashtags={hashtags}
            className="Demo__some-network__share-button"
        >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
    )
}

export function ShareTelegram(url, title, caption = '', tags = []) {
    return (
        <TelegramShareButton
            url={url}
            title={title}
            caption={caption}
            tags={tags}
            className="Demo__some-network__share-button"
        >
            <TelegramIcon size={32} round />
        </TelegramShareButton>
    )
}

export function ShareLinkedin(url, title = '', summary = '', source = '') {
    return (
        <LinkedinShareButton
            url={url}
            title={title}
            summary={summary}
            source={source}
            className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    )
}

export function ShareEmail(url, subject, body) {
    return (
        <EmailShareButton
            url={url}
            subject={subject}
            body={body}
            className="Demo__some-network__share-button"
        >
            <EmailIcon size={32} round />
        </EmailShareButton>
    )
}