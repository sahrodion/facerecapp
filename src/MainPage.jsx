import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import PageContainer from "./PageContainer";
import { WorkText } from "./Text";
import camera from "./camera.svg";
import cancel from "./closecirclee.svg";
import Button from "./Button";
import CameraApp from "./CameraApp"
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MainPage() {
  const handleRemoveField = (i) => {
    console.log(field);
    [...field].splice(i, 1);
    setField([...field]);
  };
  const [field, setField] = useState([
    0
  ]);
   

  const handleAddField = () => {
    setField([
      ...field,
      field[field.length - 1] + 1
    ]);
  };

  
  return (
    <PageContainer className={`flex justify-center pt-[200px] items-center`}>
      <div className={`p-8 bg-dark-grey rounded-xl w-fit`}>
        <div className={`grid grid-cols-4 gap-x-4`}>
          <WorkText>Name</WorkText>
          <WorkText>Student ID</WorkText>
          <WorkText>Department</WorkText>
        </div>
        {field.map((element, i) => (
          <Field onClick={handleRemoveField} key={i} />
        ))}
        <Button onClick={handleAddField} cls={`w-fit`}>
          Add new entry
        </Button>
        <Button cls={`mt-4 items-center justify-center flex`}>Submit</Button>
      </div>
    </PageContainer>
  );
}



export function Field({onClick}) {
const [enteredName, setEnteredName] = useState("")
const [enteredId, setEnteredId] = useState("")
const [enteredDept, setEnteredDept] = useState("")

function HandleEnteredName(e){
  setEnteredName(e.target.value);
}
function HandleEnteredId(e){
    setEnteredId(e.target.value);
}
function HandleEntereddept(e){
    setEnteredDept(e.target.value);
}



const handleSubmit = () => {
  const fieldData = {
    name: enteredName,
    id: enteredId,
    dept: enteredDept
  }

  console.log(fieldData)
};
  return (
    <div onSubmit={handleSubmit}
      style={{
        justifyItems: "center",
      }}
      className={`grid grid-cols-4 gap-x-4 items-center`}
    >
      <Input onChange={HandleEnteredName} placeholder={`Enter student name`} />
      <Input onChange={HandleEnteredId} placeholder={`Enter student id`} />
      <Input onChange={HandleEntereddept} placeholder={`Enter student department`} />
      <div className={`flex`}>
        <img
          
          className={`w-10`}
          src={camera}
          alt="take picture"
        />
        <img
          onClick={onClick}
          className={`w-5 ml-5`}
          src={cancel}
          alt="delete entry"
        />
      </div>
    </div>
  );
}
