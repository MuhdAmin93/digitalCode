export const App = () => {
  return (
    <main className="py-2">
      <center>
        <div className="w-[85%] bg-[#74DA7F] border rounded-3xl py-4 flex justify-center text-[2.5rem]">
          Веб - сервис по детекции вооруженных людей
        </div>

        <div className="w-fit flex flex-row mt-5">
          <p className="text-[2.5rem]">Вставьте ваш API</p>
          <div className="border border-x-4 border-[#74da7f] rounded-2xl py-4 px-2 mx-2 text-[1.25rem]">
            <input className="outline-none" type="text" placeholder="rtps....текстовое поле ссылки" />
          </div>
          <button className="bg-[#74da7f] px-2 rounded-2xl text-[2.25rem]">
            Добавить
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

      <center>
        <section className="flex flex-row w-[56.5rem] mt-5">
          <div className="w-[33.625rem] h-[13.5rem] bg-gray-300 flex justify-center items-center rounded-2xl text-[2.25rem]">
            comment section
          </div>

          <div className="bg-gray-300 flex justify-center items-center rounded-2xl text-[#ec4242] text[1.25rem] h-[13.5rem] w-[22.375rem] ml-1">
            выберете файл для загрузки
          </div>
        </section>
      </center>
    </main>
  );
};
