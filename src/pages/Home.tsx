import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const Home: React.FC<Props> = ({}) => {
  return <Link to="/new">Go to new</Link>;
};

export default Home;
