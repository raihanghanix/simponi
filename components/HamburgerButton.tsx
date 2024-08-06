type HamburgerButtonType = {
  isOpened: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ isOpened, onClick }: HamburgerButtonType) => {
  return (
    <button
      className={`transition-color rounded-lg border border-white px-6 py-2 text-lg font-bold duration-100 sm:hidden ${
        isOpened ? "bg-white text-bpsBlue" : "bg-transparent text-white"
      }`}
      onClick={() => onClick()}
    >
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default HamburgerButton;
