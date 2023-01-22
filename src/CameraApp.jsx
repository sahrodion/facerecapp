import React, { useRef, useState } from "react";
import Button from "./Button";
import Webcam from "react-webcam";
import PageContainer from "./PageContainer";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const videoConstraints = {
  width: 700,
  borderRadius: "100px",
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
  const imageSrc = webcamRef.current.getScreenshot();

    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  const downloadImage = () => {
    const a = document.createElement("a");
    a.href = webcamRef.current.getScreenshot();
    a.download = "image.png";
    a.click();
  };

  return (
    <PageContainer className={`flex justify-center items-center pt-32`}>
      <div
        className={`flex flex-col items-center bg-dark-grey rounded-xl p-8 w-[900px]`}
      >
        <Webcam
          ref={webcamRef}
          audio={true}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
        />
        <div className={`flex justify-between my-5 w-[200px]`}>
          <Button cls={`w-fit`} onClick={capturePhoto}>
            Capture
          </Button>
          <Button cls={`w-fit`} onClick={() => setUrl(null)}>
            Refresh
          </Button>
        </div>
        {url && (
          <div
            className={`flex flex-col items-center`}
          >
            <img src={url} alt="Screenshot" />
            <Button cls={`w-fit my-5`} onClick={downloadImage}>
              save image
            </Button>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Camera;

