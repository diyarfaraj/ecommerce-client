import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

interface Props {
  items: string[];
  checked: string[];
  onChange: (items: string[]) => void;
}

export default function CheckBoxbButtons({ items, checked, onChange }: Props) {
  return (
    <FormGroup>
      {brands.map((brand) => (
        <FormControlLabel control={<Checkbox />} label={brand} key={brand} />
      ))}
    </FormGroup>
  );
}
