import { Checkbox, FormControl } from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CheckBox } from "@mui/icons-material";
interface Props extends UseControllerProps {
  label: string;
}

export default function AppCheckBox(props: Props) {
  const { field } = useController({ ...props, defaultValue: false });
  return (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} color="secondary" />}
      label={props.label}
    />
  );
}
