import { makeStyles } from '@material-ui/core/styles';

const MARGIN_LEFT = 20;
const EMPTY_SPACE_HEIGHT = 40;
const DROP_DOWN_WIDTH = '50ch';
const TEXT_FIELD_WIDTH = '25ch';

const Styles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      marginLeft: MARGIN_LEFT
    },
  },
  headerStyle: {
    marginLeft: MARGIN_LEFT
  },
  formControl: {
    margin: theme.spacing(1),
    width: TEXT_FIELD_WIDTH,
    marginLeft: MARGIN_LEFT
  },
  fixedHeight: {
    height: EMPTY_SPACE_HEIGHT
  },
  dropDownStyle: {
    width: DROP_DOWN_WIDTH
  }
}));

export default Styles;