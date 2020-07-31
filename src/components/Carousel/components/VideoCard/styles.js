import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: transform .5s ease;
  &:hover {
    transform: scale(1.03);
  }

  transition: border 0.1s ease;
  &:hover {
    border: none;
    border-radius: 10px
  }

  transition: opacity .5s;
  &:hover,
  &:focus {
    opacity: .9;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
