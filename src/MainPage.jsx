import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import PageContainer from "./PageContainer";
import { WorkText } from "./Text";
import camera from "./camera.svg";
import cancel from "./closecirclee.svg";
import Button from "./Button";
import CameraApp from "./CameraApp";
import ReactDOM from "react-dom/client";
import { v4 } from "uuid";
import { CSVLink } from "react-csv";
import ImageViewer from "./video";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const studentSchema = { name: "", id: "", dept: "" };

export default function MainPage() {
  const [field, setField] = useState([{ ...studentSchema }]);
  const csvArr = useRef([]);
  const camId = useRef(0);
  const [cameraOn, setCameraOn] = useState(false);

  const handleRemoveField = (i) => {
    if (field.length == 1) return;
    setField((currentField) => {
      let curr = [...currentField];
      curr.splice(i, 1);
      return curr;
    });
  };

  const toggleCam = (index)=>{
    camId.current = field[index].id;
    if(!camId.current) return;
    setCameraOn(!cameraOn);
  }

  const handleAddField = () => {
    setField([...field, { ...studentSchema }]);
  };

  const _setField = (_field) => {
    // convert input to csv convertible 2d array
    let header = ["Name", "Student ID", "Department"];
    let array = [header];
    field.forEach((element, index) => {
      let arr = [element.name, element.id, element.dept];
      array.push(arr);
    });

    csvArr.current = array;
    setField(_field);

    console.log(csvArr.current);
  };

  return (
    <PageContainer className={`flex justify-center pt-[200px] items-center`}>
      {!cameraOn && <div className={`p-8 bg-dark-grey rounded-xl w-fit`}>
        <div className={`grid grid-cols-4 gap-x-4`}>
          <WorkText>Name</WorkText>
          <WorkText>Student ID</WorkText>
          <WorkText>Department</WorkText>
        </div>
        {field.map((element, i) => {
          return (
            <Field
              onClick={handleRemoveField}
              data={field}
              setData={_setField}
              toggleCam={toggleCam}
              index={i}
              key={i}
            />
          );
        })}
        <Button onClick={handleAddField} cls={`w-fit`}>
          Add new entry
        </Button>
        <Button cls={`mt-4 items-center justify-center flex`}>
          {<CSVLink data={csvArr.current} >Download CSV</CSVLink>}
        </Button>
      </div>}
        {cameraOn && <CameraApp id={camId.current} />}
    </PageContainer>
  );
}

export function Field({ onClick, index, data, setData, toggleCam }) {
  function HandleEnteredName(e) {
    data[index].name = e.target.value;
    setData([...data]);
  }
  function HandleEnteredId(e) {
    data[index].id = e.target.value;
    setData([...data]);
  }
  function HandleEntereddept(e) {
    data[index].dept = e.target.value;
    setData([...data]);
  }

  return (
    <div
      style={{
        justifyItems: "center",
      }}
      className={`grid grid-cols-4 gap-x-4 items-center`}
    >
      <Input
        onChange={HandleEnteredName}
        value={data[index].name}
        placeholder={`Enter student name`}
      />
      <Input
        onChange={HandleEnteredId}
        value={data[index].id}
        placeholder={`Enter student id`}
      />
      <Input
        onChange={HandleEntereddept}
        value={data[index].dept}
        placeholder={`Enter student department`}
      />

      <div className={`flex`}>
        <img className={`w-10`} src={camera} alt="take picture" onClick={()=> toggleCam(index)} />
        <img
          onClick={() => {
            onClick(index);
          }}
          className={`w-5 ml-5`}
          src={cancel}
          alt="delete entry"
        />
      </div>
    </div>
  );
}
