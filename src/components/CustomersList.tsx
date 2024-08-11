import React, { useEffect, useRef } from "react";
import { Customer } from "../utils/mock-data";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";

type Props = {
  customers: Customer[];
};

const CustomersList = ({ customers }: Props) => {
  const listRef = useRef({});
  const rowHeights = useRef({});

  function getRowHeight(index) {
    return rowHeights.current[index] + 8 || 82;
  }

  function Row({ index, style }) {
    const rowRef = useRef({});

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.clientHeight);
      }
      // eslint-disable-next-line
    }, [rowRef]);

    return (
      <div style={{ ...style, top: style.top + 8 }}>
        <div ref={rowRef}>
          <div data-id={customers[index].id} className="h-full px-4 pt-2">
            <div className="border rounded-md p-4 cursor-pointer">
              <h1 className="text-xl font-bold">{customers[index].name}</h1>
              <p>{customers[index].title}</p>
              <p>{customers[index].details}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function setRowHeight(index, size) {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  }

  return (
    <aside
      className="w-[400px] border-r h-full absolute top-0 left-0 bottom-0"
      onClick={(e) => {
        console.log(e.target.closest("[data-id]").dataset.id);
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={customers.length}
            itemSize={getRowHeight}
            ref={listRef}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </aside>
  );
};

export default CustomersList;
