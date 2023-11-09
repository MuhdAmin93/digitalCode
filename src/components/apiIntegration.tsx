import { GrDownload } from "react-icons/gr";

export const ApiIntegration = () => {
  return (
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
  );
};
