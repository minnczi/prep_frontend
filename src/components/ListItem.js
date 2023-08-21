import { Link } from "react-router-dom";

const ListItem = ({ list }) => {
  console.log(list);
  return (
    <div className="userList">
      <Link to={`/mzlist/${list.listId}`}>
        <div className="MzListItem">
          <div className="info">
            <span>{list.listName}</span>
            <br></br>
            <span>생성일자:</span>
            <span>{list.createDate}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
