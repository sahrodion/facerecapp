import { useEffect, useRef } from "react";
import Button from "./Button";

export default function ImageViewer({ returnData }) {
  const video = useRef(null);

  function snap(){
    
  }

  useEffect(() => {
    let media = navigator.mediaDevices.getUserMedia({ video: true });
    media.then((stream) => {
      video.current.srcObject = stream;
    });
  }, []);

  return (
    <div className="ml-4">
      <video ref={video} className="mb-10 rounded" autoPlay height="200" width={"200"}></video>
      <Button className={"text-center"}><div>snap</div></Button>
    </div>
  );
}
