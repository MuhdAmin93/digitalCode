import { useList } from "../stateProvider/stateprovider";

export const FeedbackForm = () => {
  const { name, setName, feedback, setFeedback, setSaveName, setSaveFeedback } = useList();

  const reply = () => {
    setSaveName(name);
    localStorage.setItem("saveName", name);
    setSaveFeedback(feedback);
    localStorage.setItem("saveFeedback", feedback);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  
  const handleChangeFeedback = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <form className="w-[56.5rem] border border-black rounded-xl flex items-center text-left max-lg:w-[350px] mx-auto mt-5">
      <div className="mx-auto my-5 flex justify-center flex-col max-lg:flex-wrap max-lg:mx-auto max-lg:flex-1">
        Your name:
        <input
          type="text"
          placeholder="Пожалуйста, введите ваше имя"
          className="w-[400px] p-4 my-3 max-lg:w-[300px] max-lg:mx-4 border rounded-md outline-none"
          value={name}
          onChange={handleChangeName}
        />
        How was your experience?
        <textarea
          rows={4}
          placeholder="Пожалуйста, введите ваше имя"
          value={feedback}
          onChange={handleChangeFeedback}
          className="w-[400px] p-4 my-3 max-lg:w-[300px] max-lg:mx-4 border rounded-md outline-none"
        />
        <button
          className="bg-blueBtn text-white p-4 rounded-xl my-3  max-lg:w-[300px] max-lg:mx-4 text-[30px]"
          onClick={reply}>
          Submit
        </button>
      </div>
    </form>
  );
};
