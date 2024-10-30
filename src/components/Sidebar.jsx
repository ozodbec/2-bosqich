"use client";

import { Button, Sidebar as FlowbiteSidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

export default function MySidebar() {
  return (
    <FlowbiteSidebar aria-label="Sidebar with multi-level dropdown example">
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </FlowbiteSidebar.Item>
          
          <FlowbiteSidebar.Item href="#" icon={HiInbox}>
            Inbox
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiUser}>
            Users
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiTable}>
            Sign Up
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Collapse
            icon={HiShoppingBag}
            label="More"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return <IconComponent   aria-hidden className="w-5 h-5" />;
            }}
          >
            <FlowbiteSidebar.Item href="#">Products</FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#">Sales</FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#">Refunds</FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="#">Shipping</FlowbiteSidebar.Item>
          </FlowbiteSidebar.Collapse>
          <Button className="w-[200px] flex items-center" >create</Button>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
}
