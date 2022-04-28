import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  makeItDark: () => void;
}

export default function Header({ makeItDark }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Kochi Stockholm</Typography>
        <Typography variant="subtitle1" ml={2} color="lightBlue">
          Theme
        </Typography>

        <Switch onClick={makeItDark} />
      </Toolbar>
    </AppBar>
  );
}
