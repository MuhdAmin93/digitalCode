import { FaUserCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useList } from "../stateProvider/stateprovider";

export const FeedBackArea = () => {
  const {
    name,
    setName,
    feedback,
    setFeedback,
    savedName,
    savedFeedback
  } = useList();

  useEffect(() => {
    if (savedName) {
      setName(savedName);
    }

    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  return (
    <section className="mt-5 mx-6 text-left ">
      <h1 className="text-4xl font-bold border-b-2 text-center">Comments</h1>
      <div className="border-b mt-6 pb-3 w-[60%] mx-auto">
        <h1 className="font-semibold text-lg">
          <FaUserCircle className="inline -mt-1 mr-1" />
          {`${name ? name : `Enitan Akinfenwa`}`}
        </h1>
        <p className=" mt-3">
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
