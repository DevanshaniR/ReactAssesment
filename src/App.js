import { TextField, Select, MenuItem, FormControl } from '@material-ui/core';
import strings from './localization/OrderDetails';
import customStyles from './styles/customStyles';

function App() {
  const classes = customStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.headerStyle}>
        <h1>{strings.header}</h1>
        <h3>{strings.sub_header}</h3>
      </div>
      <div>
        <TextField required id="first-name" label={strings.first_name} />
        <TextField required id="last-name" label={strings.last_name} />
      </div>
      <div>
        <TextField required id="email" label={strings.email} />
        <TextField required id="telephone-number" label={strings.telephone_number} type="number" />
      </div>
      <div className={classes.fixedHeight}></div>
      <div>
        <h3 className={classes.headerStyle}>{strings.address_header}</h3>
      </div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="country-select"
          id="country-select"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div className={classes.dropDownStyle}>
        <TextField fullWidth label="Search field" type="search" />
      </div>
    </form>
  );
}

export default App;
