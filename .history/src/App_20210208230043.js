import React from 'react';
import styled from 'styled-components'
import LeftComponent from './Components/LeftComponent'
import RightComponent from './Components/RightComponent'

function App() {
  return (
    <div className="App">
       <Wrapper>
       <LeftComponent className="left_portion"/>
       <RightComponent className="right_portion" />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
width: 100%;
height:100%;
display: grid;
grid-template-columns: 1fr 3fr;
@media only screen and (min-width: 600px) {
        .left_portion {
          width: 25%;
        }
        .right_portion {
          width: 75%;
        }
      }
@media only screen and (min-width: 768px) {
        .left_portion {
          width: 30%;
        }
        .right_portion {
          width: 70%;
        }
      }
@media only screen and (min-width: 1120px) {
        .left_portion {
          width: 50%;
        }
        .right_portion {
          width: 50%;
        }
      }
`;
export default App;
