import { Card, ConfigProvider, Table, Input } from "antd";
import{ useEffect, useState } from "react";
import type { TableProps } from "antd";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";

interface MainTableProps<RecordType> {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  pagination?: boolean;
  columns?: TableProps<RecordType>["columns"]; // made optional
  dataSource: RecordType[];
  pageSize?: number;
  onRow?: TableProps<RecordType>["onRow"];
  rowKey?: string | ((record: RecordType) => string);
  rowClassName?: TableProps<RecordType>["rowClassName"];
  showResultCount?: boolean;
  showSearch?: boolean;
}

const MainTable = <RecordType extends Record<string, any>>({
  searchText,
  setSearchText,
  pagination = true,
  columns = [], // default to empty array
  dataSource,
  pageSize = 20,
  onRow,
  rowKey = "id",
  rowClassName,
  showResultCount = true,
  showSearch = true,
}: MainTableProps<RecordType>) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredData =
    dataSource?.filter((record) =>
      Object.values(record).some((value) =>
        value?.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    ) || [];

  const isColumnOverflow = columns.length > 7;

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: { colorPrimary: "#E5A812" },
        },
      }}
    >
      <div>
        <div className="flex justify-between items-center mb-2">
          {showResultCount && (
            <div className="hidden md:block text-sm text-gray-600">
              Showing{" "}
              <span className="text-[#E5A812] font-bold">{filteredData.length}</span>{" "}
              results
            </div>
          )}

          {showSearch && (
            <div className="ml-auto w-52">
              <Input
                placeholder="Search..."
                value={searchText}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchText(e.target.value)
                }
                size="middle"
                allowClear
              />
            </div>
          )}
        </div>

        {isMobileView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData.map((item, index) => {
              const rowProps = onRow ? onRow(item, index) : {};
              return (
                <Card
                  key={index}
                  className="shadow-md border border-gray-200 cursor-pointer"
                  onClick={rowProps?.onClick}
                  onDoubleClick={rowProps?.onDoubleClick}
                  onMouseEnter={rowProps?.onMouseEnter}
                  onMouseLeave={rowProps?.onMouseLeave}
                >
                  {columns?.map((col: any) => (
                    <div key={col.dataIndex} className="mb-1 flex pb-2">
                      <strong className="w-32 flex-shrink-0">{col.title}:</strong>{" "}
                      <span className="flex-1">
                        {col.render
                          ? col.render(item[col.dataIndex], item)
                          : item[col.dataIndex]}
                      </span>
                    </div>
                  ))}
                </Card>
              );
            })}
          </div>
        ) : (
          <div
            className={`${
              isColumnOverflow ? "overflow-x-auto" : ""
            } border border-gray-200 rounded-[8px]`}
          >
            <Table
              columns={columns}
              dataSource={filteredData}
              showSorterTooltip={false}
              pagination={
                pagination && {
                  pageSize: pageSize,
                  position: ["bottomRight"],
                  showSizeChanger: false,
                }
              }
              scroll={isColumnOverflow ? { x: "max-content" } : undefined}
              onRow={onRow}
              rowKey={rowKey}
              rowClassName={rowClassName}
            />
          </div>
        )}
      </div>
    </ConfigProvider>
  );
};

export default MainTable;
