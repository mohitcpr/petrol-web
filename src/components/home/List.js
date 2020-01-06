import React, { useEffect, useState } from "react";
import { getAllList } from "../../services/home";
import { useHistory } from "react-router-dom";

function List() {
  const [list, setList] = useState([]);
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("login"));
  const loginType = sessionStorage.getItem("loginType");
  useEffect(() => {
    async function getAllPList() {
      try {
        const list = await getAllList(loginType, user.uid);
        setList(list);
      } catch (e) {
        console.log(e);
      }
    }
    getAllPList();
  }, []);
  return (
    <div>
      <div onClick={() => history.push("form")}>+</div>
      {list.map(item => (
        <div>
          <div>{item.date}</div>
          <div>{item.quantity}</div>
          <div>{item.price}</div>
          <div>{item.distance}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
