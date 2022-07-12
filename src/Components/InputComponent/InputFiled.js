import { Paragraphe } from "../../../Global.style";
import { Input, InputDiv } from "./InputFiled.style";

function InputFiled({ name, placeholder = "6655 8844 2233 5599" }) {
  return (
    <InputDiv>
      <Paragraphe fontSize="14px">{name}</Paragraphe>
      <Input type="text" placeholder={placeholder} />
    </InputDiv>
  );
}

export default InputFiled;
