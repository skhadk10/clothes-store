import { Link } from "react-router-dom";

const UnauthPage = () => {
  return (
    <div className=" flex-col flex justify-center items-center text-4xl ">
      <div>You dont have excess to this page</div>

      <Link
        to="/shop/home"
        className="text-2xl text-red-500 cursor-pointer mt-4 p-3 rounded-sm hover:bg-red-900 hover:text-white"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default UnauthPage;
