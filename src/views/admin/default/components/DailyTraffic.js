import React from "react";

// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";

// Custom components
import Card from "components/card/Card.js";
import { barChartOptionsDailyTraffic } from "variables/charts";

export default function DailyTraffic(props) {
  const { ...rest } = props;
  const data = props.data;
  const stats = props.stats;

  const barData = [
    {
      name: "Daily Traffic",
      data: stats
        ? [stats.majlis, stats.ashra, stats.khamsa, stats.juloos, stats.jashn]
        : [],
    },
  ];

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align="center" direction="column" w="100%" {...rest}>
      <Flex justify="space-between" align="start" px="10px" pt="5px">
        <Flex flexDirection="column" align="start" me="20px">
          <Flex w="100%">
            <Text
              me="auto"
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
            >
              Programs Statistics
            </Text>
          </Flex>
          <Flex align="end">
            <Text
              color={textColor}
              fontSize="34px"
              fontWeight="700"
              lineHeight="100%"
            >
              {data?.[0]?.data?.length}
            </Text>
            <Text
              ms="6px"
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
            >
              Events
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box h="240px" mt="auto">
        <BarChart
          chartData={[{ name: "Program Stats", data: [33, 56, 78, 87, 72] }]}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </Box>
    </Card>
  );
}
