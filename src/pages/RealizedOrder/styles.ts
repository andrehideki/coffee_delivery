import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`;

export const LeftContainer = styled.div`
    > h1 { 
        font-size: 2rem;
        color: ${props => props.theme["yellow-dark"]};
        font-weight: bolder;
        font-family: 'Baloo 2', sans-serif !important;
    }

    > p {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
    }
`;

export const Fieldset = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    margin-top: 2.5rem;
    padding: 2.5rem;

    background: linear-gradient(to right, ${(props) => props.theme["yellow-dark"]}, ${(props) => props.theme["purple"]});

    border-top-right-radius: 1em;
    border-bottom-left-radius: 1em;
    color: ${props => props.theme["base-text"]};

    &::after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;
        border-top-right-radius: 1em;
        border-bottom-left-radius: 1em;
        border: inherit;
        background: ${props => props.theme["white"]};
    }
`;


export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    z-index: 999;

    div:nth-child(1) {
        display: flex;
        width: 2rem;
        height: 2rem;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme["purple"]};
        border-radius: 50%;

        svg {
            color: ${props => props.theme["white"]};
        }
    }
`;

export const Location = styled(Info)`
    div:nth-child(1) {
        background-color: ${props => props.theme["purple"]};
    }
`;


export const Time = styled(Info)`
    div:nth-child(1) {
        background-color: ${props => props.theme["yellow"]};
    }
`;

export const Payement = styled(Info)`
    div:nth-child(1) {
        background-color: ${props => props.theme["yellow-dark"]};
    }
`;


export const RightContainer = styled.div`
    svg {
        width: 30.75rem;
        height: 18.3rem;
    }
`;