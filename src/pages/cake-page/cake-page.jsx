import { Link, useLoaderData, useParams } from "react-router-dom";
// import cakesData from "../../data/cakes";
import { useEffect, useState } from "react";

export const CakePage = () => {
  const { id } = useParams();
  const career = useLoaderData();

  // cakeDetailsLoader();

  // console.log(career);

  return (
    <>
      {/* <Link to="/cakes">Назад</Link> */}

      <h1>{id}</h1>
      <h2>Career Details for {career.title}</h2>
    </>
  );
};

export const cakeDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/cakes/" + id);

  return res.json();
};
