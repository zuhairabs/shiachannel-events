export const getCount = (arr, filter) => {
  return arr?.filter((item) => item["Program Type"] === filter).length;
};

export const getHeaderArray = (arr) => {
  let headerArray = [];
  arr
    ?.map((item) => Object.keys(item))[0]
    .map((item) =>
      headerArray.push({
        header: item,
        accessor: item.toLowerCase().split(" ").join("_"),
      })
    );
  return headerArray;
};

export const getTableData = (arr) => {
  let tableData = [];
  arr?.map((item) => {
    let tableDataItem = {};
    Object.keys(item).map((key) => {
      tableDataItem[key.toLowerCase().split(" ").join("_")] = item[key];
    });
    tableData.push(tableDataItem);
  });
  return tableData;
};

export const formatDate = (d) => {
  const date = new Date(d);
  return date.toLocaleString("en-gb", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatTime = (time) => {
  return time.split(":")[0] + " " + time.split(" ")[1];
};
