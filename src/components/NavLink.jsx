import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {
    const {href,text}=item;
    const pathName=usePathname();
  return (
    <li className={`nav-link ${pathName===href&&'nav-link-active'} cursor-pointer`}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavLink;
