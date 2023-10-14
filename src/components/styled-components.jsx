import styled from 'styled-components'

export const WrapperDiv = styled.div`
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  box-shadow: 5px 4px 10px #485461;
  background-image: linear-gradient(315deg, #8f99a5 49%, #55687e 74%);
`

export const InputResult = styled.div`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #435769f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  box-sizing: border-box;
`
export const ButtonBoxDiv = styled.div`
    width: 100%;
    height: calc(100% - 110px);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 10px;

`


export const SubmitButton = styled.button`
  background-color: ${(props) => props.bgColor ?? '#28289f'};
  transition: background-color .25s ease-in;
  border-radius: 0.5rem;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.bgHoverColor ?? '#3838b5'};
    transition: background-color .25s ease-in;
  }

  &:disabled {
    background-color: #eee;
    color: #666;
    cursor: not-allowed;
  }
`