import React from 'react';
import styled from 'styled-components';
import titles from '../Data/LeftData/titles';
import Item from '../Data/LeftData/Item';
const LeftComponent = () =>{
  return (
      <Wrapper className='section'>
        {titles.map((title) => {
          return <Item key={title.id} {...title}></Item>;
        })}
      </Wrapper>
  );
};

const Wrapper = styled.section`
   background-color:#fff;
   align-items:center;
   border-right: 1px solid #ccc;
`

  export default LeftComponent;