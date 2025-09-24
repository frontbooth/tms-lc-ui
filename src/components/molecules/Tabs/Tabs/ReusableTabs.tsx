import { Tabs, Tag } from "antd";
import type { TabsProps } from "antd";
import type { FC } from "react";

export interface TabItem {
  key: string;
  name: string;
  color?: string;
  count?: number;
}

interface ReusableTabsProps {
  value: string | number;
  handleTabChange: (key: string) => void;
  tabsData?: TabItem[]; // optional, can pass custom tabs
}

const defaultTabsData: TabItem[] = [
  { key: "0", name: "Bucket", color: "blue" },
  { key: "1", name: "Initiated", color: "purple" },
  { key: "2", name: "In Progress", color: "orange" },
  { key: "3", name: "Approved", color: "green" },
  { key: "4", name: "Returned", color: "volcano" },
  { key: "5", name: "Discard", color: "purple" },
  { key: "6", name: "Acknowledged", color: "green" },
  { key: "7", name: "Completed", color: "red" },
  { key: "8", name: "All", color: "blue" },
];

const ReusableTabs: FC<ReusableTabsProps> = ({ value, handleTabChange, tabsData = defaultTabsData }) => {
  // Map to Ant Design Tabs items with Tag
  const items: TabsProps["items"] = tabsData.map(tab => ({
    key: tab.key,
    label: (
      <span>
        {tab.name} <Tag color={tab.color}>{tab.count ?? 0}</Tag>
      </span>
    ),
  }));

  return (
    <Tabs
      activeKey={String(value)}
      onChange={handleTabChange}
      tabPosition="top"
      items={items}
    />
  );
};

export default ReusableTabs;
