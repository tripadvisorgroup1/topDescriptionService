import React from 'react'
import styled from 'styled-components';

const Dot = styled.span`
      padding: 2px;
      margin-right: 5px;
      cursor: pointer;
      z-index: 0;
      border-radius: 50%;
      background: ${props => props.active ? 'black' : 'white'};
      &:hover{
          z-index: 6;
      }
`;

const DotsStyle = styled.div`
      position: absolute;
      bottom: 25px;
      width: 100%;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        z-index: 6;
    }
`;

const Dots = ({slides, activeIndex}) => {
    return (
        <DotsStyle>
            {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
            ))}
        </DotsStyle>
    )
}


export default Dots;