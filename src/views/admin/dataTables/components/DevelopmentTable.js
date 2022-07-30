/* eslint-disable */
import {
  Flex,
  Button,
  Icon,
  Badge,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { BiMale } from "react-icons/bi";
import { FaFemale } from "react-icons/fa";
// Custom components
import Card from "components/card/Card";
// import { AndroidLogo, AppleLogo, WindowsLogo } from "components/icons/Icons";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { formatDate, formatTime } from "../../../../util/funs.js";

export default function DevelopmentTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  console.log({ tableInstance });

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("secondaryGray.500", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Programs List
        </Text>
        <Button
          bg="blue.50"
          _hover={{
            bg: brandColor,
            color: "white",
            "> svg": { color: "white" },
          }}
          _active={{ bg: brandColor, color: "white" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"blue.800"}
          fontWeight="bold"
          fontSize="sm"
          minW="185px"
          shadow={"sm"}
        >
          <Icon as={BsPlus} color={"blue.800"} w="24px" h="24px" />
          Add a Event
        </Button>
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <>
                  {column.header === "Timestamp" ||
                  column.header === "Program Banner" ||
                  column.header === "Contact No." ||
                  column.header === "Your Name" ||
                  column.header === "Email Address" ? (
                    <></>
                  ) : column.header ===
                    "Program Date (Start Date if Ashra/Khamsa)" ? (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      pe="10px"
                      key={index}
                      borderColor={borderColor}
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        Program Start Date
                      </Flex>
                    </Th>
                  ) : column.header === "Program End Date (if Ashra/Khamsa)" ? (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      pe="10px"
                      key={index}
                      borderColor={borderColor}
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        Program End Date
                      </Flex>
                    </Th>
                  ) : column.header === "Gender" ? (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      pe="10px"
                      key={index}
                      borderColor={borderColor}
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        Attendee Gender
                      </Flex>
                    </Th>
                  ) : (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      pe="10px"
                      key={index}
                      borderColor={borderColor}
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {column.header}
                      </Flex>
                    </Th>
                  )}
                </>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  if (
                    cell.column.header === "Timestamp" ||
                    cell.column.header === "Contact No." ||
                    cell.column.header === "Program Banner" ||
                    cell.column.header === "Your Name" ||
                    cell.column.header === "Email Address"
                  ) {
                    return <></>;
                  } else if (
                    cell.column.header ===
                      "Program Date (Start Date if Ashra/Khamsa)" ||
                    cell.column.header === "Program End Date (if Ashra/Khamsa)"
                  ) {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                      >
                        {formatDate(cell.value)}
                      </Td>
                    );
                  } else if (cell.column.header === "Program Time") {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                      >
                        {formatTime(cell.value)}
                      </Td>
                    );
                  } else if (cell.column.header === "Gender") {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                      >
                        {cell.value === "Both" ? (
                          <Flex>
                            <Icon
                              as={BiMale}
                              width="22px"
                              height="22px"
                              color={iconColor}
                            />
                            <Icon
                              as={FaFemale}
                              width="20px"
                              height="20px"
                              color={iconColor}
                            />
                          </Flex>
                        ) : (
                          <Icon
                            as={cell.value === "Male" ? BiMale : FaFemale}
                            width="20px"
                            height="20px"
                            color={iconColor}
                          />
                        )}
                      </Td>
                    );
                  } else if (cell.column.header === "Program Type") {
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                      >
                        <Badge
                          colorScheme={
                            cell.value === "Jashn" ? "pink" : "blackAlpha"
                          }
                          color="gray.600"
                        >
                          {cell.value}
                        </Badge>
                      </Td>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {cell.value}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
