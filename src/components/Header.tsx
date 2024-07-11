import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <div>
        <img className="h-24 w-20" src={logo} alt="" />
      </div>
      <div>
        <p className=" text-sm">C a m p e r s - S h o p</p>
      </div>
    </div>
  );
};

export default Header;
