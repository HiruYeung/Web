import React, { useRef, useState, useEffect } from 'react';
import './ScrollableImageContainer.css';
import IMG_11 from './images/IMG_11.jpeg';
import IMG_5628 from './images/IMG_5628.PNG';
import IMG_080 from './images/IMG_080.png';
import kkk52 from './images/kkk52.png';

const ScrollableImageContainer = () => {
    const imageContainerRef = useRef(null);
    const scrollBarRef = useRef(null);
    const thumbRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [IMG_11, IMG_5628, IMG_080, kkk52];

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - scrollBarRef.current.offsetLeft);
        setScrollLeft(imageContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollBarRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll speed
        imageContainerRef.current.scrollLeft = scrollLeft - walk;
        updateThumbPosition();
    };

    const updateThumbPosition = () => {
        const thumb = thumbRef.current;
        const container = imageContainerRef.current;
        const scrollBar = scrollBarRef.current;
        const scrollRatio = container.scrollWidth / container.clientWidth;
        const thumbWidth = scrollBar.clientWidth / scrollRatio;
        const scrollLeft = container.scrollLeft / scrollRatio;

        thumb.style.width = `${thumbWidth}px`;
        thumb.style.transform = `translateX(${scrollLeft}px)`;
    };

    useEffect(() => {
        const scrollBar = scrollBarRef.current;
        scrollBar.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            scrollBar.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isMouseDown, startX, scrollLeft]);

    useEffect(() => {
        updateThumbPosition();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 90000); // Change image every 1.5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container">
            <div className="scroll-bar" ref={scrollBarRef} onMouseDown={handleMouseDown}>
                <div className="scroll-thumb" ref={thumbRef}>
                    <div className="scroll-thumb1">Hiru's Computer Graphic Art</div>
                </div>
            </div>
            <div className="image-container" ref={imageContainerRef}>
                <div className="arrow-container" onClick={handlePrevImage}>
                    <button className="arrow-button">&lt;</button>
                </div>
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="scrollable-image" />
                <div className="arrow-container" onClick={handleNextImage}>
                    <button className="arrow-button">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default ScrollableImageContainer;