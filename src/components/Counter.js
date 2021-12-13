import {useState} from 'react';
import styled from "styled-components";
import Button from './Button';
import withMessage from '../hoc/withMessage';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  flex-direction: column;
`;

function Counter({initialState,message}){
    const [state,setState] = useState(Number(initialState));
    return(<Wrapper>
        {message('Look before U Leap....!!!! XXX')}
        <h4>{state}</h4>
        <Button title={'Click Me...'} handleClick={()=>{setState(state + 1)}}/>
    </Wrapper>);
};

export default withMessage(Counter);