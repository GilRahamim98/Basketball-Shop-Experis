import React from 'react'
import BasketNavBar from './BasketNavBar'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function About() {
    return (
        <div>
            <BasketNavBar></BasketNavBar>


            <div className='about-us-div'>
                <h1>About Us</h1>

                <Card style={{ border: 'none' }}>
                    <Card.Img variant="top" src="nba_match_preview_miami_heat_vs_76ers.png" />
                    <Card.Body>
                        <Card.Text>
                            <h2>Hi there,we're Baski.</h2>
                            With our pro team we can manage to give you the best basketball items at the lowest cost you will ever see.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
        </div>
    )
}

export default About