import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import { addData } from "../../services/home";
import { useHistory } from "react-router-dom";

function Form() {
  const [date, setDate] = useState(new Date());
  const [quantity, setQuantity] = useState("");
  const history = useHistory();
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState("");
  const user = JSON.parse(sessionStorage.getItem("login"));
  const loginType = sessionStorage.getItem("loginType");
  async function submitForm(e) {
    e.preventDefault();
    try {
      const res = await addData(
        {
          quantity,
          price,
          distance,
          loginId: user.uid,
          date: new Date(date).getTime()
        },
        loginType
      );
      alert(res);
      goBack();
    } catch (e) {
      console.log(e);
    }
  }
  function goBack() {
    history.goBack();
  }
  useEffect(() => {
    const dateInputs = document.querySelectorAll(".petrol-datepicker input");
    for (let item of dateInputs) {
      item.setAttribute("disabled", "disabled");
    }
  }, []);
  return (
    <div>
      <div onClick={goBack}>x</div>
      <form onSubmit={submitForm}>
        <div>
          <DatePicker
            onChange={date => setDate(date)}
            value={date}
            clearIcon={null}
            className="petrol-datepicker"
            maxDate={new Date()}
            required={true}
          />
        </div>
        <div>
          <input
            type="number"
            value={quantity}
            required
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            value={price}
            required
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            value={distance}
            required
            onChange={e => setDistance(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
