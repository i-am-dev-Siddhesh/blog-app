import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogService from "../../services/Blog";

const Blog = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    BlogService.getBlogs()
      .then((resp) => {
        setBlogs(resp?.data);
      })
      .catch(() => null)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Flex maxW="1440px" w="100%" mx="auto">
        Loading...
      </Flex>
    );
  }
  return (
    <Flex
      maxW="1440px"
      w="100%"
      mx="auto"
      my="10"
      style={{ gap: "20px" }}
      justify="space-between"
      flexWrap="wrap"
    >
      {blogs?.map((blog) => (
        <Link href={`blog/${blog?.id}`} key={blog.id}>
          <Box
            w="340px"
            boxShadow="2xl"
            borderRadius="20px"
            p="5"
            cursor="pointer"
          >
            <Flex>
              <Image
                style={{ borderRadius: "20px" }}
                src={blog?.mediaUrl}
                alt="Blog Image"
                width={350}
                height={250}
              ></Image>
            </Flex>

            <Flex flexDir="column" w="200px" mt="3">
              <Heading color="gray.600">{blog.title}</Heading>
              <Text>{blog.content}</Text>
            </Flex>
            <Flex>
              <Text fontWeight="extrabold" color="gray.400">
                {dayjs(blog.createdAt).format("MMM DD YYYY")}
              </Text>
            </Flex>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default Blog;
