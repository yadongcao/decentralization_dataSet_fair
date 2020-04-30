import React from "react";
import { Divider } from "antd";
import { Flex, Box, Text, Image, Heading } from "rebass";
import logo from "../dlakes.png";


const Footer = () => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      sx={{
        px: "220px",
        py: "23px",
      }}
    >
      <Divider />
      <Box
        sx={{
          p: 2,
          color: "text",
          fontFamily: "body",
          fontWeight: "body",
        }}
      >
        <Image
          src={logo}
          sx={{
            width: 196,
            height: 190,
          }}
        />
        <Heading
          sx={{
            fontSize: 28,
            textAlign: "center",
          }}
        >
          去中心化数据池
        </Heading>
      </Box>

      <Box px={20} py={2}>
        <Text
          sx={{
            p: 4,
            color: "text",
            fontFamily: "body",
            fontWeight: "body",
            fontSize: 18,
            lineHeight: 1.4,
          }}
        >
          这是一个
          <br />
          为大数据
          <br />
          为人工智能技术
          <br />
          提供数据池的
          <br />
          去中心化应用
          <br />
          发挥每个人的数据价值
          <br />
          而没有隐私泄露的风险
          <br />
          将数据变为资产
        </Text>
      </Box>
      <Box p={4}>
        <Heading>联系</Heading>
        <Text py={4}>联系我们</Text>
        <Text py={4}>关于我们</Text>
      </Box>
      <Box p={4}>
        <Heading>探索</Heading>
        <Text py={4}>Blog</Text>
        <Text py={4}>F&Q</Text>
      </Box>
      <Flex flexDirection="column-reverse">
        <Text color="background" bg="primary">
          @DLakers2020
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
