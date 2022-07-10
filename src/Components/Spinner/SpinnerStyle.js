import styled from "styled-components";

export const SpinnerStyle = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid rgb(175 172 172 / 30%);
  border-radius: 50%;
  border-top-color: #fa7400;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

