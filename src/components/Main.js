import {useEffect, useState } from "react"

const Main = () => {
    const[userList, setUserList] = useState([]);

    useEffect(() => {
        fetchUserList();
    }, [])

    const fetchUserList = async () => {
        try {
            const response = await fetch("localhost:3001/user/minnczi/list");
            if (!response.ok) {
                throw new Error("Request Failed");
            }
            const data = await response.json();
            setUserList(data)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Minnczi의 맛집 리스트</h1>
                {fetchUserList.map((list) => (
                    <ul key={list.listId}>
                        <li>{list.listName}</li>
                        <li>{list.userId}</li>
                        <li>{list.createdDate}</li>
                    </ul>
                ))}
        </div>
    )
}

export default Main;
