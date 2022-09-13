import { Flex, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";

const SingleblogPage = ({ blog }) => {
  console.log("blog", blog);
  return (
    <Flex maxW="1440px" w="100%" mx="auto" my="10" flexDir="column" h="100%">
      <Flex width="100%" pos="relative" height="500px">
        <Image
          src={blog?.mediaUrl}
          layout="fill"
          style={{ borderRadius: "20px" }}
        ></Image>
      </Flex>
      <Flex mt="20" flexDir="column" h="100%">
        <Heading color="gray.800" fontFamily="roboto">
          {blog?.title}
        </Heading>
        <Text mt="10" color="gray.600">
          {blog?.content}
        </Text>
      </Flex>

      <Flex mt="5" h="100%" style={{ gap: "20px" }}>
        <Text fontWeight="extrabold" color="gray.700">
          Created Date: {dayjs(blog?.createdAt).format("MMM DD YYYY")}
        </Text>
        <Text fontWeight="extrabold" color="gray.700">
          Author: {blog?.author?.name}
        </Text>
        <Text fontWeight="extrabold" color="gray.700">
          Author Mail: {blog?.author?.email}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SingleblogPage;
