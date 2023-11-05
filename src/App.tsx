import Scanning from "./assets/scanning.png";
import { useState, useEffect } from "react";
import Check from "./assets/check.png";
import Warning from "./assets/warning.png";
import axios from "axios";


export default function App() {
  const [scanState, setScanState] = useState("scanning");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [name, setName] = useState(" ");
  const [saveName, setSaveName] = useState(" ");
  const [number, setNumber] = useState("");
  const [saveNumber, setSaveNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const [saveFeedback, setSaveFeedback] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("saveName");
    const savedNumber = localStorage.getItem("saveNumber");
    const savedFeedback = localStorage.getItem("saveFeedback");

    if (savedName) {
      setName(savedName);
    }

    if (savedNumber) {
      setNumber(savedNumber);
    }

    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  // try {
  //   const response = axios.get("http://127.0.0.1:8000/predict/{text}");
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile.type.startsWith("image/")) {
        console.log("trudy!!");
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } else if (selectedFile.type.startsWith("video/")) {
        setSelectedVideo(URL.createObjectURL(selectedFile));
      }
    }
  };


  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleChangeFeedback = (e) => {
    setFeedback(e.target.value);
  };

  //This is the fuction that I need to save the feedback
  const reply = () => {
    setSaveName(name);
    localStorage.setItem("saveName", name);
    setSaveNumber(number);
    localStorage.setItem("saveNumber", number);
    setSaveFeedback(feedback);
    localStorage.setItem("saveFeedback", feedback);
  };

  const handleScan = () => {
    // Simulate an API call to check the image or video (replace this with your actual API call)
    setTimeout(() => {
      const isFileClean = Math.random() < 0.5; // Simulate a 50% chance of a clean file

      setScanState(isFileClean ? "check" : "warning");
    }, 2000); // Simulate a 2-second API call delay
  };

  return (
    <main className="px-auto py-20 max-w-screen bg-[#e5e5e5] max-lg:h-full overflow-y-scroll max-lg:overflow-x-hidden">
      <section className="flex justify-between items-center h-screen w-full px-20 py-10 max-lg:flex-wrap max-lg:px-10">
        <div className="flex gap-10">
          <p className="w-full font-regular text-[#2b2d42] text-[30px] leading-[60px] max-md:leading-[40px] max-lg:w-full max-lg:text-center">
            Пожалуйста, проявите бдительность! Если вы заметили предметы
            содержащие оружие, пожалуйста, сфотографируйте их, и загрузите
            в наше приложение. Для обеспечения безопасности важно внимание
            каждого. Вы поможете обеспечить нам безопасность! Если
            приложение обнаружило оружие, пожалуйста сообщите по номеру
            102!
          </p>
        </div>
        <div className="flex flex-col items-center max-lg:mx-auto max-lg:justify-center max-lg:flex-1 max-md:py-20">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Image"
              className={`object-contain h-[400px] w-[300px] transform ${
                scanState === "scanning" ? "rotate-0" : "rotate-360"
              } transition-transform duration-2000 ease-linear`}
            />
          ) : selectedVideo ? (
            <video
              controls
              src={selectedVideo}
              className="object-contain h-[400px] w-[300px]"
              loop
            />
          ) : (
            <img
              src={Scanning}
              alt=""
              className={`${
                scanState === "scanning" ? "" : "hidden"
              } object-contain h-[400px] w-[300px]`}
            />
          )}

          <img
            src={Check}
            alt=""
            className={`${
              scanState === "check" && selectedImage && selectedVideo
                ? ""
                : "hidden"
            } object-contain h-[400px] w-[300px]`}
          />

          <img
            src={Warning}
            alt=""
            className={`${
              scanState === "warning" && !selectedImage && !selectedVideo
                ? ""
                : "hidden"
            } object-contain h-[400px] w-[300px]`}
          />
          <input
            type="file"
            placeholder="выберете файл для загрузки"
            className="mx-auto"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
          <p className="text-red-600">Оружие обнаружено: Снайпер</p>
          <div className="flex justify-between gap-3 max-lg:flex-col">
            <button
              className="bg-blueBtn text-white py-5 px-10 rounded-xl mt-5 w-[300px] text-[30px]"
              onClick={handleScan}>
              сканировать
            </button>
            <button className="bg-[#25a18e] text-white py-5 px-10 rounded-xl mt-5 w-[300px] text-[30px]">
              Загрузить
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center mt-20 max-[378px]:mt-[1050px] max-sm:mt-[700px] max-md:mt-[500px] max-lg:mt-[400px] max-lg:flex-wrap">
        {/* <h1 className="font">Пожалуйста, напишите отзыв</h1> */}
        <form className="w-[600px] border border-black rounded-xl flex items-center max-lg:w-[350px] ">
          <div className="mx-auto my-5 flex justify-center flex-col max-lg:flex-wrap max-lg:mx-auto max-lg:flex-1">
            <input
              type="text"
              placeholder="Пожалуйста, введите ваше имя"
              className="rounded-md w-[400px] p-4 my-3 max-lg:w-[300px] max-lg:mx-4 "
              value={name}
              onChange={handleChangeName}
            />
            <input
              type="text"
              placeholder="Пожалуйста, введите ваше имя"
              value={number}
              onChange={handleChangeNumber}
              className="rounded-md w-[400px] p-4 my-3 max-lg:w-[300px] max-lg:mx-4"
            />
            <textarea
              rows={4}
              placeholder="Пожалуйста, введите ваше имя"
              value={feedback}
              onChange={handleChangeFeedback}
              className="rounded-md w-[400px] p-4 my-3 max-lg:w-[300px] max-lg:mx-4 "
            />
            <button
              className="bg-blueBtn text-white p-4 rounded-xl my-3  max-lg:w-[300px] max-lg:mx-4 text-[30px]"
              onClick={reply}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
