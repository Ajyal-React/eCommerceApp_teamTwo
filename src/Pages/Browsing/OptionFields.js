import { SelectField } from "./BrowseProduct.Style";

function OptionFields(optionProduct) {
  return (
    <SelectField>
      <option></option>
      {optionProduct?.optionProduct?.map((ele, index) => (
        <option key={index}>{ele}</option>
      ))}
    </SelectField>
  );
}
export default OptionFields;
