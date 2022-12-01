import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormTournament() {
  const schema = yup.object().shape({
    Tname: yup.string().required("name is required"),
    Temail: yup.string().email().required("email is required"),
    Thcp: yup.number("bro").required("hcp is required"),
    Tcourse: yup.string().required(),
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
    <form onSubmit={handleSubmit(onSubmit)} id="padForm">
      <label id="text">Name</label>
      <br />
      <input
        type="text"
        placeholder="Enter name"
        className="form-control"
        id="i"
        {...register("Tname")}
      />

      <p>{errors.Tname?.message}</p>
      <label id="text">Email address</label>
      <br />
      <input
        type="text"
        placeholder="Enter email"
        className="form-control"
        id="i"
        {...register("Temail")}
      />

      <p>{errors.Temail?.message}</p>

      <label id="text">Course</label>
      <br />
      <select className="form-control" id="i" {...register("Tcourse")}>
        <option>Select Course</option>
        <option value="1">Waregem</option>
        <option value="2">Oudenaarde</option>
        <option value="3">Damme</option>
      </select>

      <p>{errors.Tcourse?.message}</p>

      <label id="text">hcp</label>
      <br />
      <input
        type="text"
        placeholder="hcp"
        name="Thcp"
        className="form-control"
        id="i"
        {...register("Thcp")}
      />

      <p>{errors.Thcp?.message}</p>

      <label id="text">hour slot</label>
      <br />
      <select id="i" className="form-control">
        <option>Select hour Slot</option>
        <option value="1">ochtend</option>
        <option value="2">voormiddag</option>
        <option value="3">middag</option>
      </select>
      <br />
      <br />
      <input type="submit" className="btn btn-success" id="text" />
    </form>
  );
}
