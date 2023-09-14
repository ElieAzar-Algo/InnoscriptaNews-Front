import styled from 'styled-components';

export const Container = styled.div`

    mmax-width: 470px;
    margin: 0 auto; /* Center horizontally */
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    min-height: 100vh; /* Make the container take up the full viewport height */
    padding: 16px;

    a {
    color: inherit;
    text-decoration: none;
    }
`

export const Title = styled.div`
    
        fill-opacity: 0.5;
        font-size: 100px;
        font-family: cursive;
        font-style: oblique;
        font-kerning: initial;
        color: black;
        opacity: 0.5;

        @media only screen and (max-width: 768px) {
            font-size: 35px;

          }
`


