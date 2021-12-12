import {useState} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  flex-direction: column;
`;

export default function Counter({initialState}){
    const [state,setState] = useState(Number(initialState));
    return(<Wrapper>
        <h4>{state}</h4>
        <button onClick={()=>{setState(state + 1)}}>Click Me</button>
    </Wrapper>);
};