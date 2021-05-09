import { useLocation } from "react-router-dom";
import Header from '../Components/Header';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';


function OrderVerifyView() {
  const location = useLocation();
  const classes = customStyles();

  console.log(location.state.submitted_data);
  const submitted_data = location.state.submitted_data;


  return (
    <div>
      <Header
        header={strings.order_verify_header}
        subHeader={strings.order_verify_sub_header}
      />
      {submitted_data.map((data, i) =>
        <div className={classes.orderVerifyGridStyle} key={i}>
          <h3>{data.name}</h3>
          <h3>{data.value}</h3>
        </div>
      )
      }
    </div>
  );
}

export default OrderVerifyView;
