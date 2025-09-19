import { Tabs } from "antd";
import type { TabsProps } from "antd";
import type { FC } from "react";

interface ReusableTabsProps {
  value: string | number;
  handleTabChange: (key: string) => void;
  tabsData: TabsProps["items"];
}

const ReusableTabs: FC<ReusableTabsProps> = ({ value, handleTabChange, tabsData }) => {
  return (
    <Tabs
      activeKey={String(value)}
      onChange={handleTabChange}
      tabPosition="top"
      items={tabsData}
    />
  );
};

export default ReusableTabs;
