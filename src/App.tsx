import { FeedBackArea } from "./components/feedbackArea";
import { Header } from "./components/header";
import { ApiIntegration } from "./components/apiIntegration";
import { Camera } from "./components/camera";
import { FeedbackForm } from "./components/feedbackForm";

export const App = () => {
  return (
    <main className="py-2">
      <center>
        <Header />

        <ApiIntegration />

        <Camera />

        <p className="mt-5 text-[1.5rem] w-[56.5rem] text-left">
          Если была обнаружена ошибка алгоритма, то отправьте нам видео и
          укажите время и детали ошибки.
        </p>

        <FeedbackForm />

        <FeedBackArea />
      </center>
    </main>
  );
};
