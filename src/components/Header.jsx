import reactImg from "../assets/react.svg";

const reactDesc = ["Fundamental", "Core", "Essential", "Basic", "Primary"];

function genRandomDesc(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  return (
    <header>
      <img src={reactImg}alt="" />
      <h1>React Essentials</h1>
      <p>
        {reactDesc[genRandomDesc(4)]} React concepts you will need for almost
        any app you are going to build.
      </p>
    </header>
  );
}
export default Header;