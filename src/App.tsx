import { FeedBackArea } from "./components/feedbackArea";
import { Header } from "./components/header";
import { ApiIntegration } from "./components/apiIntegration";
import { Camera } from "./components/camera";

export const App = () => {
  return (
    <main className="py-2">
      <center>
        <Header />

        <ApiIntegration />

        <Camera />
      </center>

      <p className="mt-5 mx-auto text-[1.5rem] w-[56.5rem]">
        Если была обнаружена ошибка алгоритма, то отправьте нам видео и
        укажите время и детали ошибки.
      </p>

      <FeedBackArea />
    </main>
  );
};
