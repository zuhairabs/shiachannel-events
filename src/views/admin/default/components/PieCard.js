// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import { pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import React from "react";

export default function Conversion(props) {
  const { ...rest } = props;
  const stats = props.stats;

  const data = stats
    ? [stats.majlis, stats.ashra, stats.khamsa, stats.juloos, stats.jashn]
    : [];

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Programs Pie Chart
        </Text>
      </Flex>

      <PieChart
        h="100%"
        w="100%"
        chartData={[33, 56, 78, 87, 72]}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection="row"
        boxShadow={cardShadow}
        w="100%"
        p="15px"
        px="20px"
        mt="15px"
        mx="auto"
      >
        <Flex direction="column" py="5px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#B2BEB5" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Majalis
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {stats.majlis}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "30px", xl: "30px", "2xl": "30px" }} />
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#36454F" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Ashra
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {stats.ashra}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "30px", xl: "30px", "2xl": "30px" }} />
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#A9A9A9" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Khamsa
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {stats.khamsa}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "30px", xl: "30px", "2xl": "30px" }} />
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#71797E" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Juloos
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {stats.juloos}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "30px", xl: "30px", "2xl": "30px" }} />
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#F88379" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Jashn
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {stats.jashn}
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
