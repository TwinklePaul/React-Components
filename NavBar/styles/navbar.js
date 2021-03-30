import { makeStyles } from "@material-ui/core/styles";

export const useNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 200,
  },
  bg: {
    background: "linearGradient(135deg, #fa7c64, #f161a3)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
    color: theme.palette.minOrange,
    [theme.breakpoints.down("sm")]: { display: "none" },
  },
  appMenu: {
    marginLeft: "auto",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: { display: "none" },
  },
  title: {
    flexGrow: 1,
  },
}));
