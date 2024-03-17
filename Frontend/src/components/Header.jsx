import { Flex, Image, useColorMode, Text } from "@chakra-ui/react";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      <Image
        cursor={"pointer"}
        alt="logo"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
      />

      <Text
        cursor={"pointer"}
        fontSize={"x-large"}
        textColor={colorMode == "dark" ? "white" : "crimson"}
        fontFamily={"initial"}
        fontWeight={"italic"}
        onClick={toggleColorMode}
      >
        SocialVerse
      </Text>
    </Flex>
  );
};

export default Header;
