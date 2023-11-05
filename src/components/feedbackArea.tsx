import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

export const FeedBackArea = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("saveName");
    const savedFeedback = localStorage.getItem("saveFeedback");

    if (savedName) {
      setName(savedName);
    }

    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  return (
    <section>
      <div className="border-y border-black mt-6 mx-3 pl-3 pb-3">
        <h1 className="font-semibold">
          <FaUserCircle className="inline -mt-1 mr-1" />
          {`${name ? name : `Enitan Akinfenwa`}`}
        </h1>
        <p className="w-[60%] mt-3">
          {`${
            feedback
              ? feedback
              : `I have been thoroughly impressed with this AI app. Its
          capabilities and ease of use are truly remarkable. The app has
          seamlessly integrated into my daily routine and has made various
          tasks more efficient. The accuracy and speed at which it delivers
          results are outstanding. I highly recommend this AI app to anyone
          looking to enhance their productivity and streamline their work
          processes. It has become an invaluable tool for me, and I look
          forward to continued improvements and innovations from the
          developers. Thank you for creating such a game-changing app!`
          }`}
        </p>
      </div>
    </section>
  );
};
