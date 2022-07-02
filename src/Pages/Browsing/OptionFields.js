import { SelectField } from "./BrowseProduct.Style";


function OptionFields(optionProduct) {
  return (
      <SelectField>
      <option></option>
      {optionProduct?.optionProduct?.map((ele)=>(
        <option>{ele}</option>
      ))}

    </SelectField>



  );
}
export default OptionFields;
