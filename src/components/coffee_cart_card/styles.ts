import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.25rem;

    padding: 1.5rem 0;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    
    img {
        width: 4rem;
        height: 4rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        
        > span {
            color: ${props => props.theme["base-subtitle"]};
        }

        > div {
            display: flex;
            gap: 1rem;


            button {
                cursor: pointer;
                border: none;
                background: ${props => props.theme["base-button"]};
                height: 2.375rem;
                display: flex;
                gap: .5rem;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                padding: 0.75rem;
                font-size: 0.75rem;
                color: ${props => props.theme["base-text"]};
                font-weight: normal;

                svg {
                    color: ${props => props.theme["purple"]};
                }
            }
        }
    }
`;

export const Value = styled.div`
    text-align: right;
    display: flex;
    gap: .25rem;
    height: 100%;

    span {
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;
        font-weight: bolder;
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