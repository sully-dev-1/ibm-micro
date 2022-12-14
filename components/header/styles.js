import styled from "styled-components";
import { darken } from 'polished';

export const HeaderContainer = styled.header`
    box-shadow: 0 9px 10px rgba(0,0,0,.14);
    position: relative;
`;

export const TopHeader = styled.header`
    background-color: ${({theme}) => theme.primary};

    .topheader__content {
        max-width: 1350px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 650px){
            flex-direction: column;
            padding: .5rem 1rem !important;
        }

        .header__contact {
            display: flex;
            flex-wrap: wrap;

            a {
                display: flex;
                align-items: center;
                padding: .5rem 0;
                margin-right: 1.5rem;
                color: ${({theme}) => theme.white};
                
                span {
                    font-family: 'Inika', serif;
                }

                svg {
                    margin-right: .5rem;
                }
            }
        }

        .header__social {
            display: flex;
            align-items: center;

            @media screen and (max-width: 500px){
                justify-content: flex-start;
                width: 100%;
                border-top: 1px solid ${({theme}) => theme.white};
                padding-top: .5rem;
                margin-top: .5rem;
            }

            a {
                font-size: 1.5rem;
                color: ${({theme}) => theme.white};
                height: 25px;
                width: 25px;
                margin-right: .5rem;

                &:last-child {
                    margin-right: 0;
                }

                svg {
                    height: 25px;
                    width: 25px;
                }
            }
        }
    }
`;

export const BottomHeader = styled.header`    
    
    .bottomheader__content {
        max-width: 1350px;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header__whatsapp {
            a {
                padding: 12px 50px;
                border-radius: 5px;
                background-color: ${({theme}) => theme.secondary};
                font-family: 'Inika', serif;
                font-size: 1.5rem;
                text-transform: uppercase;
                transition: all 150ms ease-in;
                text-align: center;
    
                &:hover {
                    box-shadow: 0 2px 5px rgba(0,0,0,.40);
                }
            }
        }


        img {
            cursor: pointer;
        }

        @media screen and (max-width: 920px){

            .header__whatsapp {
                a {
                    padding: 12px 30px;
                    font-size: 1.2rem;
                }
            }
        }

        @media screen and (max-width: 650px){
            .header__whatsapp, .header__logo {
                display: none;
            }
            justify-content: center;
        }

        @media screen and (max-width: 500px){
            flex-direction: column;

            .header__whatsapp {
                a {
                    margin-top: 2rem;
                    font-size: 1rem;
                }
            }
        }
    }
`;

export const HeaderNav = styled.nav`
    a {
        color: ${({theme}) => theme.primary};
        background-color: transparent !important;
        font-size: 1.3rem !important;
        font-family: 'Inika', serif;
        padding: 0 !important;
        border-top: 1px solid ${({theme}) => theme.primary};
        border-bottom: 1px solid ${({theme}) => theme.primary};
        border-radius: 0 !important;

        &:first-child {
            margin-right: 1rem;
        }

        &:hover {
            box-shadow: none !important;
            color: ${({ theme }) => darken(0.1, theme.primary)};
        }
    }

    @media screen and (max-width: 400px){
        a {
            font-size: 1rem !important;
        }
    }
`