import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import TableRow from "./TableRow/TableRow";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  const { uid, email, diplayName, photoURL } = user;
  const [reviews, setReviews] = useState([]);
  const showToastMessage = () => {
    toast.success("Deleted Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/reviewsbyuser/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error(error));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = reviews.filter((order) => order._id !== id);
        setReviews(remaining);
        showToastMessage();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <ToastContainer />
      {reviews.length < 1 ? (
        <div className="container mx-auto py-80">
          <h1 className="text-5xl font-bold text-red-600 text-center">
            No reviews were added
          </h1>
        </div>
      ) : (
        <div className="overflow-x-auto container mx-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Service Name</th>
                <th>My Review</th>
                <th>My Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {reviews.map((review) => (
                <TableRow
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserReview;
