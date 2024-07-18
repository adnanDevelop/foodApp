import { Link } from "react-router-dom";
import PageHeader from "../../components/global/PageHeader";

const NotFound = () => {
  return (
    <main>
      <PageHeader title="404 Not Found" breadCrumb="404" />
      <section className=" py-[50px] flex items-center gap-y-6 justify-center flex-col max-w-[700px] mx-auto">
        <img
          src="/image/not-found.png"
          className="lg:max-w-[500px] sm:max-w-[400px] max-w-[300px] w-full"
          alt=""
        />
        <p className="text-base text-center md:text-lg text-content-color custom_width">
          The page you are looking for could not be found. The link to this
          address may be outdated or we may have moved the since you last
          bookmarked it.
        </p>
        <Link to="/" className="flex items-center justify-center btn-primary">
          back to home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
