import Card from "./Card";

export default function HomeCard() {
  return (
    <div className="w-full p-4 flex items-center gap-5 flex-wrap">
      <Card>
        <h1>Hello world</h1>
        <a href="#">add sth</a>
      </Card>
      <Card>
        <h1>Hello world</h1>
        <a href="#">add sth</a>
      </Card>
      <Card>
        <h1>Hello world</h1>
        <a href="#">add sth</a>
      </Card>
      <Card>
        <h1>Hello world</h1>
        <a href="#">add sth</a>
      </Card>
    </div>
  );
}
