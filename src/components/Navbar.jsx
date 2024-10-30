"use client";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";

export default function Header() {
  return (
    <Navbar className="!rounded-none" fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          So'zDon
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <DarkThemeToggle />
    </Navbar>
  );
}
