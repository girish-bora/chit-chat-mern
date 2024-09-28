import NewDM from "../chat-container/components/NewDM";
import Logo from "./components/Logo";
import ProfileInfo from "./components/ProfileInfo";
import Title from "./components/Title";

const ContactsContainer = () => {
  return (
    <div className="relative w-full md:w-[35vw] lg:w-[30vw] xl:w-[22vw] bg-[#1b1c24] border-r-2 border-[#2f303b]">
      <div className="pt-3">
        <Logo />
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Direct Messages" />
          <NewDM />
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Group Messages" />
        </div>
      </div>
      <ProfileInfo />
    </div>
  );
};

export default ContactsContainer;
