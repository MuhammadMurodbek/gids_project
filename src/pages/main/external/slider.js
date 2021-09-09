import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {Container} from "../../../styles/container/index.style"

const styles = {
    backgroundColor: 'transparent'
}

const Slider = () => {
    return (
        <AwesomeSlider>
            <div style={styles}>
                <Container width="60%" style={{ backgroundColor:'red', width:'60%'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est officiis quis tempore ipsum consectetur obcaecati? Et repellendus praesentium laboriosam sequi! Ipsa voluptatem, maxime voluptatibus ex perspiciatis id nisi sed.
                </Container>
            </div>
            <div style={styles}>
                
            </div>
        </AwesomeSlider>
    )
}

export default Slider
