import React from 'react';
import styled from 'styled-components'

interface Props {
  outlined?: boolean;
}

export const Button = styled.button<Props>`
background: ${props => props.outlined ? 'transparent' : 'var(--twitter)' };
color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)' };
border: ${props => props.outlined ? '1px solid vaR(--twitter)' : 'none'};


padding: 16px;
border-radius: 25px;

font-weight: bold;
font-size: 15px;
cursor: pointer;
outline: 0;

&:hover{
  background: ${props => props.outlined 
  ? 'var(--twitter-dark-hover)' 
  : 'var(--twitter-light-hover)'};
}
`