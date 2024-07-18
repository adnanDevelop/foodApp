import UserProfile from "./component/UserProfile";
import UserProfileForm from "./component/UserProfileForm";
import PageHeader from "../../components/global/PageHeader";

const Profile = () => {
  return (
    <main>
      <PageHeader title="Profile" breadCrumb="profile" />

      <section className="grid grid-cols-12 gap-6 custom_width section_padding">
        {/* User Profile */}
        <div className="md:col-span-6 lg:col-span-3 col-span-full">
          <UserProfile />
        </div>
        {/* Update profile form */}
        <div className="col-span-9">
          <UserProfileForm />
        </div>
      </section>
    </main>
  );
};

export default Profile;
