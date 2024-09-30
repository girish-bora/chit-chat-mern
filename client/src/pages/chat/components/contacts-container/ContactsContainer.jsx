import { apiClient } from "@/lib/api-client";
import NewDM from "../chat-container/components/NewDM";
import Logo from "./components/Logo";
import ProfileInfo from "./components/ProfileInfo";
import Title from "./components/Title";
import { GET_DM_CONTACTS_ROUTES } from "@/utils/constants";
import { useEffect } from "react";
import { useAppStore } from "@/store/store";
import ContactList from "./components/ContactList";

const ContactsContainer = () => {
  const { directMessagesContacts, setDirectMessagesContacts } = useAppStore();

  useEffect(() => {
    const getContacts = async () => {
      const response = await apiClient.get(GET_DM_CONTACTS_ROUTES, {
        withCredentials: true,
      });
      if (response.data.contacts) {
        setDirectMessagesContacts(response.data.contacts);
      }
    };
    getContacts();
  }, []);

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
        <div className="max-h-[38vh] overflow-y-auto scrollbar-hidden">
          <ContactList contacts={directMessagesContacts} />
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
