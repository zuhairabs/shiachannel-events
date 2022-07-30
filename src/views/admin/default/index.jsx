/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets

// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { MdGroup, MdGroups } from "react-icons/md";
import { FaMosque } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import { getHeaderArray } from "util/funs";
import { getTableData } from "util/funs";

export default function UserReports({ stats, data }) {
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const tableHeader = getHeaderArray(data?.[0]?.data);
  const tableData = getTableData(data?.[0]?.data);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={FaMosque} color={"gray.600"} />}
            />
          }
          name="Majlis"
          value={stats.majlis}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdGroup} color={"gray.600"} />}
            />
          }
          name="Khamsa"
          value={stats.khamsa}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdGroups} color={"gray.600"} />}
            />
          }
          name="Ashra"
          value={stats.ashra}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={BsFlagFill} color={"gray.600"} />
              }
            />
          }
          name="Juloos"
          value={stats.juloos}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={"pink.100"}
              icon={<Icon w="32px" h="32px" as={FaMosque} color={"pink.600"} />}
            />
          }
          name="Jashn"
          value={stats.jashn}
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <PieCard stats={stats} />
        <DailyTraffic data={data} />
      </SimpleGrid>
      {tableHeader && tableData && (
        <DevelopmentTable columnsData={tableHeader} tableData={tableData} />
      )}
    </Box>
  );
}
