import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    .inputbox{
        width: 100%;
        height: 45.5px;
        border: 1px solid #333;
        font-size: 16px;
        color: #afb0b2;
    }

    .bg-dark {
      background-color: #1f1f76!important;
  }
`;

export const Logo = styled.div`
    width: 25%;
    height: 34.5px;
    padding: 16px 0px 0px 20px;
    align-items:center;
    justify-content: center;
    text-transform: uppercase;
    background-color: #33bee3;
    color: #fff
`;

export const Search = styled.div`
    width: 40%;
    background-color: #fff;
    color: #000;
    font-size: 14px;
`;

export const Navigation = styled.div`
    width: 35%;

    
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  
      overflow: 
  hidden;
    background-color: #333;
  }
  
  li {
    
  float: left;
  }
  
  
  li a {
    display: block;
    
  color: white;
    text-align: center;
    
  padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #33bee3;
  } 
  
`;