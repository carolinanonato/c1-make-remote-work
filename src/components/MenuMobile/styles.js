import styled from 'styled-components'
import { css } from 'styled-components';


export const Container = styled.section`
position: absolute;
width 60%;
height: 100%;
top:0;
bottom: 0;
right: 0;

z-index: 5;
display: flex;
align-items: center;
justify-content: center;
background: black;
color: white;
opacity: 0;
pointer-events: none;

transition: .5s;


> svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
}

nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
   
}


li {
    list-style-type: none;
}



.feature-items {
    margin-left: 30px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem

}

.company-items {
    margin-left: 30px;
    margin-top: 30px;
    display: flex;
   
    flex-direction: column;
    gap: 1rem
}

.other-items {
    margin-right: 40px;
}

.nav-register {
    padding: 10px 50px;
    margin-left: 50px;
}

.login-mobile {
    margin-top: 30px;
}

${({ isVisible }) => isVisible && css`
  opacity: 1;  
  pointer-events: auto;
  
`}

`;