import Link from "next/link";

export const Menu = () => {
  return (
    <ul>
      <h2>
        <Link href="/registartion">Registration</Link>
        &nbsp; 
        <Link href="/">Menu</Link>
      </h2>
      <hr />
    </ul>
  );
};
