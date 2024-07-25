import PageHeader from "../../components/global/PageHeader";
import UserProfile from "../profile/component/UserProfile";
import DeleteAccount from "./component/DeleteAccount";

const Setting = () => {
  return (
    <main>
      <PageHeader title="Setting" breadCrumb="setting" />

      <section className="grid grid-cols-12 gap-6 custom_width section_padding">
        {/* User Profile */}
        <div className="md:col-span-5 lg:col-span-3 col-span-full">
          <UserProfile />
        </div>
        {/* Update profile form */}
        <div className="lg:col-span-9 md:col-span-7 col-span-full">
          <DeleteAccount />
        </div>
      </section>
    </main>
  );
};

export default Setting;
