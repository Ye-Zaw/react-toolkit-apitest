import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../redux/slices/userSlice";

const Userdetail = () => {
  const param = useParams();
  console.log(param);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  // useEffect(() => {
  //   dispatch(fetchUserDetails(myId));
  // }, [dispatch, myId]);
  return (
    <div>
      <h2>User Detail</h2>
      {userDetails ? (
        <div>
          <p>ID: {userDetails.id}</p>
          <p>Name: {`${userDetails.first_name} ${userDetails.last_name}`}</p>
          <p>Email: {userDetails.email}</p>
          {/* Add other user details as needed */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Userdetail;
