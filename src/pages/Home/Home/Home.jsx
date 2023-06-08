import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import ClientReviews from "../ClientReviews/ClientReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClass />
      <PopularInstructor />
      <ClientReviews />
    </div>
  );
};

export default Home;
