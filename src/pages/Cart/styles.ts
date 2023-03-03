import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2.5rem;
    form {
        display: flex;
        gap: 2rem;
    }
`;

export const OrderForm = styled.div`
    width: 60%;
    h2 {
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }

    > div {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;

        div {
            width: 100%;
        }

        input {
            font-size: 0.875rem;
            padding: .75rem;
            color: ${(props) => props.theme["base-text"]};
            border: 1px solid ${(props) => props.theme["base-button"]};

            &::after {
                content: "Optional";
                position: absolute;
                top: 0;
                font-size: 14px;
                color: #aaa;
                right: 5px;
            }            

        }

        input:focus {
            outline: none;
            border: 1px solid ${(props) => props.theme["yellow-dark"]};
        }

        section {
            padding: 2.5rem;
            border-radius: 8px;
            background: ${(props) => props.theme["base-card"]};

            > div:nth-child(1) {
                display: flex;
                align-items: center;
                gap: .5rem;


                svg {
                    color: ${(props) => props.theme["yellow-dark"]};
                    height: 1.375rem;
                    width: 1.375rem;
                }

                h3 {
                    font-size: 1rem;
                    color: ${(props) => props.theme["base-subtitle"]};
                    font-weight: normal;
                }
            }
            

            p {
                color: ${(props) => props.theme["base-text"]};
                font-size: 0.875rem;
                margin-left:  1.875rem;
            }
        }

        div > div:nth-child(1) input {
            margin-top: 1rem;
            width: calc(35% - 1rem);
        }

        div > div:nth-child(2) input {
            margin-top: 1rem;
            width: 100%;
        }

        div > div:nth-child(3) {
            input:nth-child(1) {
                width: calc(35% - 1rem);
                margin-right: 1rem;
            }

            div:nth-child(2) {
                
                position: relative;
                display: inline-block;
                width: 65%;
                
                input {
                   
                    width: 100%;
                }

                input:focus ~ span, input:not(:placeholder-shown) ~ span {
                    display: none;
                }

                span {
                    font-style: italic;
                    color: ${(props) => props.theme["base-label"]};
                    position: absolute;
                    top: 50%;
                    right: 5%;
                }
            }
        }

        div > div:nth-child(4) {
            margin-top: 1rem;

            input:nth-child(1) {
                width: calc(35% - 1rem);
                margin-right: 1rem;
            }
            
            input:nth-child(2) {
                width: calc(45% - 1rem);
                margin-right: 1rem;
            }
            input:nth-child(3) {
                
                width: 20%;
            }
        }

        section:nth-child(2) {       
            margin-top: 0.75rem;     

            h3 {
                display: flex;
                align-items: center;
                gap: .5rem;

                font-size: 1rem;
                color: ${(props) => props.theme["base-subtitle"]};
                font-weight: normal;

                svg {
                    color: ${(props) => props.theme["purple"]};
                    height: 1.375rem;
                    width: 1.375rem;
                }

                margin-bottom: 2px;
            }

            div {
                display: flex;
                justify-content: space-between;
                margin-top: 2rem;
            }
        }
    }
   
`;

export const CartList = styled.div`
    width: 40%;
    h2 {
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-subtitle"]};
    }

    main {
        margin-top: 1rem;
        padding: 2.5rem;
        border-top-right-radius: 10%;
        border-bottom-right-radius: 10%;
        background: ${(props) => props.theme["base-card"]};
    }

    footer {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1.5rem;

        div {
            display: flex;
            justify-content: space-between;
            color: ${props => props.theme["base-text"]}
        }

        div:nth-child(3) {
            font-size: 1.25rem;
            color: ${props => props.theme["base-subtitle"]};
            font-weight: bold;
        }
    }

   
`;

export const ConfirmButton = styled.button`
    margin-top: 0.75rem;
    border: none;
    border-radius: 5px;
    padding: .75rem;
    color: ${props => props.theme["white"]};
    background: ${props => props.theme["yellow"]};
`;

export const PaymentButton = styled.label`
    display: flex;
    gap: .75rem;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    border-radius: 8px;
    width: calc(33% - .75rem);

    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    cursor: pointer;

    &.active {
        background: ${(props) => props.theme["purple-light"]};
        border: 2px solid ${(props) => props.theme["purple"]};

        svg {
            color: ${(props) => props.theme["purple"]};
        }
    }

    &:not(.active):hover {
        background: ${(props) => props.theme["base-hover"]};
    }

    svg {
        height: 1.25rem;
        width: 1.25rem;
        color: ${(props) => props.theme["purple"]}
    }
`;