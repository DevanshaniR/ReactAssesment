import strings from './localization/OrderDetails';
import customStyles from './styles/customStyles';
import OrderDetails from './Components/OrderDetails';
import AddressDetails from './Components/AddressDetails';
import CheckBoxContainer from './Components/CheckBoxContainer';
import Header from './Components/Header';
import BottomContainer from './Components/BottomContainer'

function App() {
  const classes = customStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Header />
      <OrderDetails />
      <FixedHeightSection />
      <AddressHeader />
      <AddressDetails />
      <FixedHeightSection />
      <MoreDetailsHeader />
      <CheckBoxContainer />
      <FixedHeightSection />
      <BottomContainer />
      <FixedHeightSection />
    </form>
  );
}

const FixedHeightSection = () => {
  const classes = customStyles();
  return (
    <div className={classes.fixedHeight}></div>
  );
}

const AddressHeader = () => {
  const classes = customStyles();
  return (
    <div>
      <h3 className={classes.headerStyle}>{strings.address_header}</h3>
    </div>
  );
}

const MoreDetailsHeader = () => {
  const classes = customStyles();
  return (
    <div>
      <p className={classes.headerStyle}>{strings.more_details_text}</p>
    </div>
  );
}

export default App;
