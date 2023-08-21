import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";

const MzList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/minnczi/list");
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      const data = await response.json();
      console.log(data);
      setUserList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="MzList">
      <h1>Minnczi의 맛집 리스트</h1>
      {userList.map((list) => (
        <ListItem key={list.listId} list={list} />
      ))}
    </div>
  );
};

export default MzList;
