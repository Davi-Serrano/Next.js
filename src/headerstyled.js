import styled from "styled-components";

export const TopHeader = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1em;
        background: var(--blue) ;
       
        a{
                display: flex;
                align-items: center;
                
                &:hover{
                        transform: translateY(-3px);
                        opacity: 0.5;
                }
        }
`
