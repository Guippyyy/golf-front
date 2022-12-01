import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormReservation() {
  const schema = yup.object().shape({
    Rname: yup.string().required("name is required"),
    Remail: yup.string().email().required("email is required"),
    Ramount: yup.number().required("hcp is required"),
    Rcourse: yup.string().required(),
    Rtime: yup.string().required(),
    Rdate: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="padForm">
        <label id="text">Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter name"
          id="i"
          className="form-control"
          {...register("Rname")}
        />

        <p>{errors.Rname?.message}</p>
        <label id="text">Email address</label>
        <br />
        <input
          type="text"
          placeholder="Enter email"
          id="i"
          className="form-control"
          {...register("Remail")}
        />

<p>{errors.Rname?.message}</p>

        <label id="text">Course</label>
        <br />
        <select id="i" className="form-control" {...register("Rcourse")}>
          <option>Select Course</option>
          <option value="1">Waregem</option>
          <option value="2">Oudenaarde</option>
          <option value="3">Damme</option>
        </select>
        <p>{errors.Rname?.message}</p>
        <label id="text">players</label>
        <br />
        <input
          type="text"
          placeholder="1--4"
          id="i"
          className="form-control"
          {...register("Ramount")}
        />
  <p>{errors.Rname?.message}</p>
        <label id="text">Date</label>
        <br />
        <input
          type="date"
          id="i"
          className="form-control"
          {...register("Rdate")}
        />
<p>{errors.Rname?.message}</p>
        <label id="text">Time</label>
        <br />
        <select id="i" className="form-control" {...register("Rtime")}>
          <option>Select hour Slot</option>
          <option value="1">8.30</option>
          <option value="2">8.50</option>
          <option value="3">9.10</option>
          <option value="4">9.30</option>
          <option value="5">9.50</option>
          <option value="6">10.20</option>
          <option value="7">10.50</option>
          <option value="8">11.10</option>
          <option value="9">11.30</option>
          <option value="10">11.50</option>
          <option value="10">12.10</option>
          <option value="10">12.30</option>
          <option value="10">12.50</option>
          <option value="10">13.10</option>
          <option value="10">13.30</option>
          <option value="10">13.50</option>
          <option value="10">14.10</option>
          <option value="10">14.30</option>
          <option value="10">14.50</option>
          <option value="10">15.10</option>
        </select>
        <p></p>
        
        <input type="submit" className="btn btn-success" id="text" />
        <br />
      </form>
    </>
  );
}
