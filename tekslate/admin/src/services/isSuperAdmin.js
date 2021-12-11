
export default function isSuperAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.type === "superadmin") {
    return true;
  } else {
    return false;
  }
}