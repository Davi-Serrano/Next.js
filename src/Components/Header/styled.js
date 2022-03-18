import styled from "styled-components";

export const TopHeader = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 6em;
        background: var(--blue) ;
       
        a{
                display: flex;
                align-items: center;
                
                &:hover{
                        opacity: 0.5;
                }
        }
`
