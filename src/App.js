import strings from './localization/OrderDetails';
import customStyles from './styles/customStyles';
import OrderDetails from './Components/OrderDetails';
import AddressDetails from './Components/AddressDetails';
import CheckBoxContainer from './Components/CheckBoxContainer';
import Header from './Components/Header';
import BottomContainer from './Components/BottomContainer';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './actions';

function App() {
  const classes = customStyles();
  const count = useSelector(state => state.OrderDetails);
  const [first_name, setFirstName] = useState('');
  console.log(count);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Header/>
      <OrderDetails
      onChangeFirstName = {onChangeFirstName}
      />
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

const onChangeFirstName = (event) => {
  console.log('onChangeFirstName',event.target.value);
  setFirstName(event.target.value);

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
