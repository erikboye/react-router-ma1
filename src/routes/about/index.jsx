import { Link, Outlet } from "react-router-dom";
import Heading from "../../components/layouts/Heading";

export default function About() {
  return (
    <div>
      <Heading title="about" />
      <Link to="story">Storytime</Link>
      <br />
      <Link to="profile">Profile</Link>
      <p>Howdy son, how yall doin?</p>
      <Outlet />
    </div>
  );
}
