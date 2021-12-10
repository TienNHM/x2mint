import React from 'react'
import { Card } from 'react-bootstrap'
import './AccountRegister.scss'

export default function AccountRegister() {
    return (
        <div className="account-register d-flex">
            <Card
                bg="warning" text="light"
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card
                bg="success" text="light"
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card
                bg="primary" text="light"
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card
                bg="danger" text="light"
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}