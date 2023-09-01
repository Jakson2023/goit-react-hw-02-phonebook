import styled from 'styled-components';
import { Form } from 'formik';
export const InputForm = styled.div`
  margin-left: 20px;
  padding: 20px;
  border: 2px solid green;
  margin-top: 30px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonAdd = styled.button`
  margin-top: 8px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  background-color: yellowgreen;
`;

export const FindForm = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  width: 300px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 500;
`;

export const TitleText = styled.h2`
  margin-left: 20px;
`;
export const Wrapper = styled.div`
  display: block;
  width: 400px;
`;

export const Title = styled.h1`
  margin-left: 20px;
`;

export const ContactWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const ButtonDel = styled.button`
  background-color: #ff000057;
`;
