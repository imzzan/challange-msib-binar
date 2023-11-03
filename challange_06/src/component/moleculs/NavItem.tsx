'use client'
import React, { FC, useEffect } from "react";
import { Button, ItemNav } from "../atoms";
import { useRouter } from "next/navigation";

interface NavItemProps {
  costomeStyle?: string;
}

const navItem = [
  {
    id: 1,
    nameItem: "Our Services",
    href: "#service-section",
  },
  {
    id: 2,
    nameItem: "Why Us",
    href: "#section-why-us",
  },
  {
    id: 3,
    nameItem: "Testimonial",
    href: "#section-testimoni",
  },
  {
    id: 4,
    nameItem: "FAQ",
    href: "#section-faq",
  },
];

const NavItem: FC<NavItemProps> = ({ costomeStyle }: NavItemProps) => {

  let token;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    token = localStorage.getItem('token')
  }
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <ul className={`${costomeStyle}`}>
      {navItem.map((item) => {
        return (
          <ItemNav key={item.id} nameItem={item.nameItem} href={item.href} />
        );
      })}

      <li className="nav-item">
        {
          token ? <Button onClick={handleLogout} nameBtn="Logout" variant="btn-danger" /> : <Button onClick={() => router.push('/register')} nameBtn="Register" variant="btn-success" />
        }
      </li>
    </ul>
  );
};

export default NavItem;
