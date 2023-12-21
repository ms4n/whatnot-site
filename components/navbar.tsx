import Link from "next/link";

const Navbar = () => {
  return (
    <div className="my-8 lg:px-8 flex items-center justify-between">
      <Link
        className="text-2xl md:text-3xl font-kollektifbold text-green-500"
        href={"/"}
      >
        whatnot
      </Link>

      <Link href={"privacy"}>
        <p className="text-xs cursor-pointer md:text-base">Privacy Policy</p>
      </Link>
    </div>
  );
};

export default Navbar;
