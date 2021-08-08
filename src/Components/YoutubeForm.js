import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {
    const formik = useFormik({})
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="emial" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
