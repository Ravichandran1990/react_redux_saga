import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserFetch } from "./reducers/usersReducer";
import { GET_USER_FETCH } from "./action/test_action";
import Photos from "./component/photos";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.sagaStore.users);

  const fetchUsersData = () => {
    // dispatch(getUserFetch("testing params"));
    dispatch({ type: GET_USER_FETCH });
  };
  // useEffect(() => {

  // }, [dispatch]);
  console.log(users);
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.title}</span> -<span> {user.completed.toString()}</span>
        </div>
      ))}
      <button onClick={fetchUsersData}>Get Users Data</button>
      <Photos />
    </>
  );
}

export default App;
