import React, {useState, useRef, useEffect} from 'react';
import "./Home.css";
import styled, {css} from "styled-components/macro";
import {IoArrowForward, IoArrowBack} from "react-icons/io5";

const HeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow:hidden;
`;

const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;
const HeroSlide = styled.div`
z-index:5;
width:100%;
height:100%;
`;
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out 0.25s;
    -webkit-transition: transform 0.5s ease-in-out 0.25s;
    -moz-transition: transform 0.5s ease-in-out 0.25s;
    -ms-transition: transform 0.5s ease-in-out 0.25s;
    -o-transition: transform 0.5s ease-in-out 0.25s;
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);

    &:before{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow:hidden;
        opacity:0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%,rgba(0,0,0,0.6) 100%)
    }
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
const Hero = ({slides}) => {
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
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current &&(
                                <HeroSlider>
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
                                </HeroSlider>
                            )}
                            
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={PrevSlide}/>
                    <NextArrow  onClick={NextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero;