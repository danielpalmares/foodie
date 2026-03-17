import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  padding-bottom: 8rem;
  max-width: 60rem;
  animation: 0.4s ${fadeIn} ease-out;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SearchBar = styled.form`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;

  input {
    flex: 1;
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.primary};
    background: ${props => props.theme.colors.absolute};
    border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
    border-radius: ${props => props.theme.border.radius};
    padding: 1.2rem 1.5rem;
    outline: none;

    &::placeholder {
      color: ${props => props.theme.fontColors.tertiary};
    }

    &:focus {
      border-color: ${props => props.theme.colors.primary};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 1.5rem;
    background: ${props => props.theme.colors.primary};
    border: none;
    border-radius: ${props => props.theme.border.radius};
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;

    &:active {
      transform: scale(0.95);
    }
  }
`;

export const TabBar = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  margin-bottom: 0.5rem;
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.isActive ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.fontColors.tertiary};
  font-family: 'Nunito', sans-serif;
  font-size: ${props => props.theme.fontSizes.regular};
  font-weight: ${props => props.isActive ? 700 : 400};
  padding: 1rem 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  span {
    font-size: ${props => props.theme.fontSizes.small};
    background: ${props => props.theme.border.color};
    border-radius: 10rem;
    padding: 0.2rem 0.7rem;
  }
`;

export const RequestBadge = styled.span`
  background: ${props => props.theme.colors.primary} !important;
  color: #fff !important;
  font-size: ${props => props.theme.fontSizes.tiny} !important;
  border-radius: 10rem;
  padding: 0.2rem 0.6rem;
  font-weight: 700;
`;

export const FriendCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: ${props => props.theme.colors.absolute};
  border-radius: ${props => props.theme.border.radius};
  padding: 1.5rem;
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FriendAvatar = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const FriendInfo = styled.div`
  flex: 1;
  min-width: 0;

  strong {
    display: block;
    font-size: ${props => props.theme.fontSizes.regular};
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: block;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
    margin-top: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border: none;
    border-radius: ${props => props.theme.border.radius};
    cursor: pointer;
    transition: all 0.2s;

    &:active {
      transform: scale(0.9);
    }

    &.accept {
      background: ${props => props.theme.colors.primary};
      color: #fff;
    }

    &.reject {
      background: ${props => props.theme.colors.red};
      color: #fff;
    }

    &.remove {
      background: ${props => props.theme.border.color};
      color: ${props => props.theme.fontColors.tertiary};
    }

    &.profile {
      background: ${props => props.theme.colors.tertiary};
      color: #fff;
    }
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: ${props => props.theme.fontColors.tertiary};
  font-size: ${props => props.theme.fontSizes.regular};
  padding: 3rem 0;
`;
