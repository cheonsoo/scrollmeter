import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IStyledScrollMeterDiv {
  height: number | undefined,
  top: number | undefined
};
const StyledScrollMeterDiv = styled.div<IStyledScrollMeterDiv>`
  width: 100%;
  height: ${props => props.height}px;
  top: ${props => props.top}px;
  background: transparent;
  position: sticky;
  z-index: 2;
`;

interface IScrollMeter {
  leftColor?: string,
  rightColor?: string,
  direction?: string,
  duration?: number,
  height?: number,
  top?: number,
  debug?: boolean
};
const IScrollMeterDefaults: IScrollMeter = {
  leftColor: 'rgba(60, 112, 150, 0.9)',
  rightColor: 'rgba(0, 0, 0, 0)',
  direction: 'right' || 'left' || 'top' || 'bottom',
  duration: 20,
  height: 5,
  top: 0,
  debug: false
};

const ScrollMeter: React.FC<IScrollMeter> = (props) => {
  const scrollDiv = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!timer) {
        setTimer(setTimeout(function() {
          setTimer(null);
          handleScrollMeter();
        }, props.duration));
      }
    });
  }, []);

  const handleScrollMeter = () => {
    const windowHeight = window.document.body.getBoundingClientRect().height - window.screen.availHeight + 111;
    const poz = window.scrollY;
    const ratio = poz / windowHeight * 100;

    if (scrollDiv.current) {
      const color = `linear-gradient(to ${props.direction}, ${props.leftColor} ${ratio}%, ${props.rightColor} ${ratio}% ${100 - ratio}%)`;
      scrollDiv.current.style.background = color;
      if (props.debug)
        console.log(`windowHeight: ${windowHeight}, poz: ${poz}, ratio: ${ratio}, color: ${color}`);
    }
  };

  return (<StyledScrollMeterDiv ref={scrollDiv} height={props.height} top={props.top} />);
};

ScrollMeter.defaultProps = IScrollMeterDefaults;

export default ScrollMeter;
