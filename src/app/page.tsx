import { WelcomeMessage } from "./WelcomeMessage";
import { ActionButton } from "./ActionButton";
import { PersonalImage } from "./PersonalImage";

export default function Home() {
  return (
    <div className="w-full max-w-full lg:max-w-2xl items-center text-sm grid grid-cols-1 gap-y-8">
      <WelcomeMessage />
      <div className="grid grid-cols-1 gap-y-14 place-items-center">
        <ActionButton />
        <PersonalImage />
      </div>
    </div>
  );
}
