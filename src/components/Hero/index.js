import React from 'react';
import '../Card'
import Card from '../Card';
import Logo from '../Logo'
import Navbar from '../Navbar'

const Hero = props => {
    return (
        <Card className = 'hero'>
            <Logo />
            <Navbar />
        </Card>
    )
}

export default Hero