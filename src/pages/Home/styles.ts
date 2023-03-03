import styled from "styled-components";

export const IntroContainer = styled.section`
    padding-top: 5rem;
    display: flex;
    width: 100%;
    height: 34rem;
    p {
        margin-top: 1rem;
        color: ${props => props.theme["base-text"]};
        font-size: 1.25rem;
    }

    & div {
        width: 100%;
    }

`;

export const Backgound = styled.img`
    margin-top: 2rem;
    opacity: 0.7;
    position: absolute;
    width: 100vw;
    left: 0;
    right: 0;
    object-fit: cover;
    height: 32rem;
`;

export const Title = styled.h1`
    font-family: "baloo 2";
    color: ${props => props.theme["base-title"]};
    font-size: 3rem;
    font-weight: 800;

    line-height: 130%;
`;


export const InfoContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: auto auto;
    color: ${props => props.theme["base-text"]};
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
        width: 1rem;
        height: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
    }
`;


export const InfoShopping = styled(Info)`
    div {
        background-color: ${props => props.theme["yellow-dark"]};
    }
    svg {
        color: ${props => props.theme["white"]};
    }
`;

export const InfoPackage = styled(Info)`
    div {
        background-color: ${props => props.theme["base-text"]};
    }
    svg {
        color: ${props => props.theme["white"]};
    }
`;

export const InfoTimer = styled(Info)`
    margin-top: 1.2rem;
    div {
        background-color: ${props => props.theme["yellow"]};
    }
    svg {
        color: ${props => props.theme["white"]};
    }
`;

export const InfoCoffee  = styled(Info)`
    margin-top: 1.2rem;
    div {
        background-color: ${props => props.theme["purple"]};
    }
    svg {
        color: ${props => props.theme["white"]};
    }
`;

export const CoffeeList = styled.section`
    h1 {
        font-size: 2rem;
        font-family: "baloo 2";
        color: ${props => props.theme["base-title"]};
    }

    > div {
        margin-top: 2rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(4, 1fr);
    }
`;