import { FeedBackArea } from "./components/feedbackArea";
import { GrDownload } from "react-icons/gr";

export const App = () => {
  return (
    <main className="py-2">
      <center>
        <div className="w-[85%] bg-[#74DA7F] border rounded-3xl py-4 flex justify-center text-[2.5rem]">
          Веб - сервис по детекции вооруженных людей
        </div>

        <div className="w-fit flex flex-row mt-5">
          <p className="text-[2.5rem]">Вставьте ваш API</p>
          <div className="border border-x-4 border-[#74da7f] rounded-2xl py-4 px-2 ml-2 text-[1.25rem]">
            <input
              className="outline-none"
              type="text"
              placeholder="rtps....текстовое поле ссылки"
            />
          </div>
          <button className="bg-[#74da7f] px-2 rounded-2xl text-[2.25rem] ml-2">
            Добавить
          </button>
          <button className="bg-[#74da7f] px-2 rounded-2xl text-[2.25rem] ml-2 w-[5rem]">
            <GrDownload className="mx-auto" />
          </button>
        </div>

        <div className="flex justify-center items-center mt-5 text-2xl bg-gray-300 border w-[56.5rem] h-[19.9375rem]">
          Video
        </div>
      </center>

      <p className="mt-5 mx-auto text-[1.5rem] w-[56.5rem]">
        Если была обнаружена ошибка алгоритма, то отправьте нам видео и
        укажите время и детали ошибки.
      </p>

      <FeedBackArea />
    </main>
  );
};
