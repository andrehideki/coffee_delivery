import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${props => props.theme["base-card"]};
    width: 19rem;
    padding: 1.25rem;
    border-radius: 8px;
    border-top-left-radius: 10%;
    border-bottom-right-radius: 10%;

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        img {
            margin-top: -2.5rem;
            width: 7.5rem;
            height: 7.5rem;
        }

        span {
            margin-top: .5rem;
            background: ${props => props.theme["yellow-light"]};
            color: ${props => props.theme["yellow-dark"]};
            font-size: 0.6rem;
            font-weight: bold;
            border-radius: 8px;
            padding: 4px;
        }

        h1 {
            font-size: 1.25rem;
            color: ${props => props.theme["base-subtitle"]};
        }
    }

    p {
        margin-top: .5rem;
        text-align: center;
        line-height: 1.3;
        font-size: 0.87rem;
        width: 13.5rem;
        color: ${props => props.theme["base-label"]};
    }


    footer {
        width: 13.5rem;
        margin-top: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;


        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .25rem;
        }

        > div > button {
            display: flex;
            justify-content: center;
            align-items: center;

            background: ${props => props.theme["purple-dark"]};
            color: ${props => props.theme["white"]};
            width: 2.375rem;
            height: 2.375rem;

            border: none;
            border-radius: 8px;

            cursor: pointer;

            svg {
                height: 1.375rem;
                width: 1.375rem;
            }

            &:hover {
                background: ${props => props.theme["purple"]};
            }
        }
    }
`; 

export const Value = styled.div`
    display: flex;
    align-items: center;
    gap: .25rem;

    span {
        color: ${props => props.theme["base-text"]};
        font-size: 0.875rem;
    }

    span ~ span {
        color: ${props => props.theme["base-text"]};
        font-size: 1.5rem;
        font-weight: bolder;
        font-family: 'Baloo 2', sans-serif !important;
    }
`;


export const Counter = styled.div`
    background: ${props => props.theme["base-button"]};
    height: 2.375rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 0.75rem;

    button {
        background: transparent;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        color: ${props => props.theme["purple"]};

        &:hover {
            color: ${props => props.theme["purple-dark"]};
        }
    }
`;