export default function App() {
  return (
    <main className="mx-auto my-20 max-w-screen">
      <section className="flex justify-between items-center w-full px-20 py-10">
        <div className="flex gap-10">
          <p className="w-[80%] font-regular text-[30px] leading-[60px]">
            Пожалуйста, проявите бдительность! Если вы заметили предметы
            содержащие оружие, пожалуйста, сфотографируйте их, и загрузите в
            наше приложение. Для обеспечения безопасности важно внимание
            каждого. Вы поможете обеспечить нам безопасность! Если приложение
            обнаружило оружие, пожалуйста сообщите по номеру 102!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/scanning.png"
            alt=""
            className="object-contain h-[400px] w-[300px]"
          />
          <input
            type="file"
            placeholder="выберете файл для загрузки"
            className="mx-auto"
          />
          <button className="bg-blueBtn text-white py-5 px-10 rounded-xl mt-5 w-[300px] text-[30px]">
            сканировать
          </button>
        </div>
      </section>
    </main>
  );
}
