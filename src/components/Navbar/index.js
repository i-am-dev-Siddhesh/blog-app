import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import VercelImage from "../../../public/logo.png";

const Navbar = () => {
  return (
    <Flex bg="gray.800">
      <Flex
        justify="space-between"
        style={{ gap: "10px" }}
        maxW="1440px"
        w="100%"
        mx="auto"
        py="10"
        color="white"
      >
        <Flex>
          <NextImage
            src={VercelImage}
            width={116}
            height={22}
            alt="Logo"
            style={{filter:"invert(100%)"}}
          ></NextImage>
        </Flex>

        <NextLink href="/" passHref>
          <Link fontWeight="bold">Blog</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
