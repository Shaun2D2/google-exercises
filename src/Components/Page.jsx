import React from 'react';
import styled from 'styled-components';

const Page = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4.5rem;
    padding: 1rem;
    @media only screen and (max-width: 992px) and (min-width: 767px){
        max-width: 960px !important;
    }
    @media only screen and (max-width: 768px) and (min-width: 575px){
        max-width: 720px !important;
    }
    @media only screen and (max-width: 576px) and (min-width: 575px){
        max-width: 540px !important;
    }
    @media only screen and (min-width: 576px) {
        max-width: auto;
    }
`;

export default Page;
