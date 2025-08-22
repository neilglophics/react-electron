import { Link } from "react-router";

export default function User() {
  return (
    <div className="flex flex-col">
      user page
      <Link to={"/"}>Home</Link>
    </div>
  );
}
