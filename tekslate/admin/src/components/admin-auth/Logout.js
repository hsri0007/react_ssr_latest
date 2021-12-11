import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import e from "cors";

const Logout = () => {
  const history = useHistory();

  const logout = async (e) => {
    console.log("Rohit");
    localStorage.removeItem("user");
    history.push("/admin");
    // return await axios
    //   .get("http://localhost:8000/admin/auth/logout")
    //   .then(() => {
    //     history.push("/auth/login");
    //     return;
    //   });
  };
  useEffect(() => {
    localStorage.removeItem("user");
    history.push("/admin");
  }, []);

  return (
    <div>
      <button onClick={(e) => logout(e)}> Logout </button>
    </div>
  );
};

export default Logout;
