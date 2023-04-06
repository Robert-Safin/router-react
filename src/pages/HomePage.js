import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>
        View <Link to="/products">products</Link>
      </p>
    </>
  );
};
export default HomePage;
