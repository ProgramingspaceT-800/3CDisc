import styledfrom, { styled } from "styled-components";

export const ContentFilter = styled.div`
     padding: 10px 25px;
     border-radius: 5px;

     input {
        border: 2px solid black;
     }

     input:focus {
     outline: none;
     border: 2px solid red;
     box-shadow: 0 0 1px #fd0018, 0 0 15px #fd0018, 0 0 30px #fd0018;
     transition: 0.7s;
}
`;