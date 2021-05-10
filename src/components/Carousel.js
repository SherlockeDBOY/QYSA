import React, {useState, useRef, useEffect} from 'react';
import "./Home.css";
import "./Carousel.css";
import {IoArrowForward, IoArrowBack} from "react-icons/io5";
import styled, {css} from "styled-components/macro";

const HeroSection = styled.section`
    background:#f7d0d5;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow:hidden;
`;


const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit:cover;
    filter: grayscale(0.4);
`;

const HeroContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    z-index:10;
    padding:2rem 0;

    h1{
        height:25%;
        width:80%;
        color:#fff;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        font-size: clamp(36px, 8vw, 60px);
        text-shadow: 2px 5px 8px var(--bg-color);
        text-transform: capitalize;
        font-weight: 900;
        margin: 40px 0;
    }
    `;

const arrowButtons = css`
width:45px;
height: 45px;
cursor:pointer;
color:#fff;
// font-size:18px;
background:#0004a0;
padding:10px 15px !important;
border-radius:40px;
margin-right:1rem;
margin-left:1rem;
user-select:none;
transition: all 0.3s ease-in-out 200ms;
&:hover{
    background:#2978b5;
    transform:scale(1.1);
}
`;

const ContentBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px) {
    flex-direction: column;
}

a{
    margin: 12.5px 10px;
}
`;


const SliderButtons = styled.div`
position:absolute;
width:100%;
height:100%;
top: 50%;
display:flex;
justify-content:space-between;
align-items:center;
transform: translateY(-50%);
-webkit-transform: translateY(-50%);
-moz-transform: translateY(-50%);
-ms-transform: translateY(-50%);
-o-transform: translateY(-50%);
z-index:6;
@media screen and (max-width: 550px) {
    top: 90%;
    justify-content:center;
}
`;
const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons};
`;
const NextArrow = styled(IoArrowForward)`
    ${arrowButtons};
`;

const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const len = slides.length;
    const timeOut = useRef(null);

    useEffect(() => {
        const NextSlide= () => {
            setCurrent(current => (current === len - 1? 0 : current + 1))
        }

        timeOut.current = setTimeout(NextSlide, 5000);

        return function () {
            if (timeOut.current) {
                clearTimeout(timeOut.current);
            }
        }
    }, [current, len])

    const NextSlide = () => {
        if (timeOut.current) {
            clearTimeout(timeOut.current);
        }
        setCurrent(current === len - 1 ? 0 : current + 1);
        // console.log(current);
    }
    const PrevSlide = () => {
        if (timeOut.current) {
            clearTimeout(timeOut.current);
        }
        setCurrent(current === 0 ? len - 1 : current - 1);
        // console.log(current);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <HeroSection>
            <div className="slider">
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide current' : 'slide'} key={index}>
                            {index === current &&(
                                <>
                                <HeroImage src={slide.image}/>
                                <HeroContent>
                                    <h1>
                                        {slide.title}
                                    </h1>
                                    <ContentBtn>
                                        <a href="/"  className="button outline">Explore more</a>
                                        <a href="/"  className="button filled">All Projects</a>
                                    </ContentBtn>
                                </HeroContent>
                                </>
                            )}
                        </div>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={PrevSlide}/>
                    <NextArrow  onClick={NextSlide}/>
                </SliderButtons>
            </div>
        </HeroSection>
    )
}

export default Carousel
