import styled from '@emotion/styled';
import { IButtonProps } from './Button.models';

const fontSizes = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem'
};

const paddings = {
  small: '0.35rem 0.5rem',
  medium: '0.5rem 1rem',
  large: '0.75rem 1.25rem'
};

export const Button = styled.button<IButtonProps>`
  font-size: ${({ size = 'medium' }) => fontSizes[size]};
  font-weight: 400;
  color: ${({ disabled, theme }) =>
    disabled ? theme.materialColors.grey['500'] : 'black'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  background-color: ${({ color, theme, disabled }) =>
    disabled
      ? theme.materialColors.grey['400']
      : theme.materialColors[color]['200']};
  padding: ${({ size = 'medium' }) => paddings[size]};
  box-shadow: inset -4px -4px 0 0
    ${({ color, theme, disabled }) =>
      disabled
        ? theme.materialColors.grey['600']
        : theme.materialColors[color]['400']};
  line-height: 1.5;
  transition: color 200ms ease-in-out, background-color 200ms ease-in-out,
    box-shadow 200ms ease-in-out;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;

  &:hover {
    background-color: ${({ color, theme, disabled }) =>
      disabled
        ? theme.materialColors.grey['400']
        : theme.materialColors[color]['300']};
    box-shadow: inset -4px -4px 0 0
      ${({ color, theme, disabled }) =>
        disabled
          ? theme.materialColors.grey['600']
          : theme.materialColors[color]['500']};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &::before {
    top: -4px;
    left: 0;
    border-top: 4px black solid;
    border-bottom: 4px black solid;
  }

  &::after {
    top: 0;
    left: -4px;
    border-left: 4px black solid;
    border-right: 4px black solid;
  }
`;
