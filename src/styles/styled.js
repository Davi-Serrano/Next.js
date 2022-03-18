import styled from "styled-components";

export const Center = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        
        background: var(--blue);
        border: 3px solid var(--gray-500);
        border-radius: 16px;
        
        width: 400px;
        height: 400px;
        
        margin: auto;
        margin-top: 3em;
        padding-left: 1em;
`

export const Title = styled.div`
        display: flex;
        justify-content: center;
                
        width: 100%;
`

export const Label = styled.div`         

        width: 100%;

        :last-child{
                margin-top: -70px;
        }
`
