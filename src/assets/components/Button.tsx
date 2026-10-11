type ButtonProps = {
  children: string;
  variant?: "orange" | "white";
  type?: "button" | "submit";
  onClick?: () => void;
};

// the pill-shaped button used all over the page
function Button({ children, variant = "orange", type = "button", onClick }: ButtonProps) {
  const colors =
    variant === "orange"
      ? "bg-orange-400 text-white shadow-lg shadow-orange-400/40 hover:bg-orange-300"
      : "bg-white text-orange-400 shadow-lg shadow-gray-950/20 hover:bg-orange-50";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full px-8 py-3 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 ${colors}`}
    >
      {children}
    </button>
  );
}

export default Button;
