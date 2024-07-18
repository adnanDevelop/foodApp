import UserProfile from "./component/UserProfile";
import UserProfileForm from "./component/UserProfileForm";
import PageHeader from "../../components/global/PageHeader";

import { useGetLoggedInUserQuery } from "../../redux/services/authApi";

const Profile = () => {
  // const { data } = useGetLoggedInUserQuery({});
  // console.log(data);

  return (
    <main>
      <PageHeader title="Profile" breadCrumb="profile" />

      <section className="grid grid-cols-12 gap-6 custom_width section_padding">
        {/* User Profile */}
        <div className="md:col-span-5 lg:col-span-3 col-span-full">
          <UserProfile />
        </div>
        {/* Update profile form */}
        <div className="lg:col-span-9 md:col-span-7 col-span-full">
          <UserProfileForm />
        </div>
      </section>
    </main>
  );
};

export default Profile;
