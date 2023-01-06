import { getUserItems } from "../Utils";
import { useContext, useEffect, useState } from "react";
import LoggedinUserContext from "../contexts/loggedinUser";


export default function Basket() {

    const { user } = useContext(LoggedinUserContext);
    const [userItems, setUserItems] = useState([]);

    useEffect(() => {
        getUserItems(user)
        .then((data) => setUserItems(data));
      }, []);

    return (
        <main>
            <ul>
                {userItems.map((item) => {
                    return (
                        <li key={item.item_id}>
                            <h4>{item.item_name}</h4>
                        <p>£{item.price}</p>
                    </li>
                    ) 
                })}
            </ul>
        </main>
    )
};

