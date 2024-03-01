import { Background } from "./Background";
import { Signup } from "./Signup";
import { LoadingScreem } from "./LoadingScreen";

export const Container = () => {
  return (
    <div className="flex">
      <Signup />
      <Background />
    </div>
  );
};
