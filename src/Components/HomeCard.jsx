import Card from "./Card";
import { Link } from "react-router-dom";

export default function HomeCard() {
  return (
    <div className="w-full p-4 flex items-center gap-5 flex-wrap">
      <Card>
        <h1>Hello world</h1>
        <Link to="/add-jobs">add sth</Link>
      </Card>
      <Card>
        <h1>Hello world</h1>
        <Link to="/add-jobs">add sth</Link>
      </Card>
      <Card>
        <h1>Hello world</h1>
        <Link to="/add-jobs">add sth</Link>
      </Card>
      <Card>
        <h1>Hello world</h1>
        <Link to="/add-jobs">add sth</Link>
      </Card>
    </div>
  );
}
