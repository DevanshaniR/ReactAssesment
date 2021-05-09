import { makeStyles } from '@material-ui/core/styles';

const MARGIN_LEFT = 20;
const EMPTY_SPACE_HEIGHT = 40;
const TEXT_FIELD_WIDTH = '50%';
const VERIFY_GRID_WIDTH = '60%';

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
    margin: 20,
    width: TEXT_FIELD_WIDTH,
    flexDirection: 'row',
    display: 'flex',
  },
  fixedHeight: {
    height: EMPTY_SPACE_HEIGHT
  },
  dropDownStyle: {
    width: TEXT_FIELD_WIDTH
  },
  textFieldStyle: {
    width: TEXT_FIELD_WIDTH,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchFieldStyle: {
    width: TEXT_FIELD_WIDTH,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    display: 'flex',
  },
  buttonContainer: {
    display: 'flex',
    marginLeft: TEXT_FIELD_WIDTH,
  },
  dropDownContainer: {
    width: '23%'
  },
  addressSearchContainer: {
    width: TEXT_FIELD_WIDTH
  },
  orderVerifyGridStyle :{
    width: VERIFY_GRID_WIDTH,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
     marginLeft: MARGIN_LEFT
  }
}));

export default Styles;