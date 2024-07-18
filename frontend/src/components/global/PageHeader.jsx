import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PageHeader = ({ title, breadCrumb }) => {
  return (
    <main className="h-[40vh] pt-[50px] flex items-center justify-center bg-[url('/image/home-bg.jpg')] bg-top bg-no-repeat bg-cover  w-full">
      {/* Bread Crumbs */}
      <section className="flex flex-col items-center jdustify-center ">
        <h2 className="text-white capitalize">{title ? title : "Profile"}</h2>
        <div className="text-sm breadcrumbs text-content-color">
          <ul>
            <li>
              <Link to="/" className="font-medium text-content-color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="block w-4 h-4 stroke-current me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <p className="!cursor-not-allowed capitalize disabled text-sm text-white font-medium">
                {breadCrumb}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PageHeader;
