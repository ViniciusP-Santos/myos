import { useAuth } from "../hooks/useAuth";
import { BsGearFill } from "react-icons/bs";
import { IoMdDocument, IoMdPeople } from "react-icons/io";
import { AiOutlineDropbox } from "react-icons/ai";

import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function onClickServices() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/services");
  }
  return (
    <Stack
      padding="25px"
      bgImage="linear-gradient(120deg, rgb(74, 109, 223) 0%, rgba(0,237,255,1) 100%)"
    >
      <Text color="white" fontWeight="bold">
        Os's:
      </Text>
      <Stack>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            w="100%"
            h="40vh"
            bg="white"
            borderRadius="25px"
            cursor="pointer"
            _hover={{
              opacity: "0.7",
            }}
            onClick={onClickServices}
          >
            <Box padding="70px" w="100%" h="40vh" opacity="0.3">
              <Center>
                <IoMdDocument size="110px" />
              </Center>
              <Center>
                <Text fontWeight="bold" fontSize="20px">
                  Ordem de Serviço
                </Text>
              </Center>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="40vh"
            bg="white"
            borderRadius="25px"
            cursor="pointer"
            _hover={{
              opacity: "0.7",
            }}
          >
            <Box padding="70px" w="100%" h="40vh" opacity="0.3">
              <Center>
                <IoMdPeople size="110px" />
              </Center>
              <Center>
                <Text fontWeight="bold" fontSize="20px">
                  Clientes
                </Text>
              </Center>
            </Box>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} paddingTop="20px">
          <GridItem
            w="100%"
            h="40vh"
            bg="white"
            borderRadius="25px"
            cursor="pointer"
            _hover={{
              opacity: "0.7",
            }}
          >
            <Box padding="70px" w="100%" h="40vh" opacity="0.3">
              <Center>
                <BsGearFill size="110px" />
              </Center>
              <Center>
                <Text fontWeight="bold" fontSize="20px">
                  Serviços
                </Text>
              </Center>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            h="40vh"
            bg="white"
            borderRadius="25px"
            cursor="pointer"
            _hover={{
              opacity: "0.7",
            }}
          >
            <Box padding="70px" w="100%" h="40vh" opacity="0.3">
              <Center>
                <AiOutlineDropbox size="110px" />
              </Center>
              <Center>
                <Text fontWeight="bold" fontSize="20px">
                  Produtos
                </Text>
              </Center>
            </Box>
          </GridItem>
        </Grid>
      </Stack>
      <Divider paddingTop="25px" />
      <Text color="white" fontWeight="bold">
        Financeiro:
      </Text>
    </Stack>
  );
}
