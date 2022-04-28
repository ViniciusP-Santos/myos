import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { InitialFocus } from "../components/modal/modal";

import grafico from "../assets/images/grafico.svg";
import Logo from "../assets/images/Logo.svg";
import { FcGoogle } from "react-icons/fc";
import React from "react";

type CreateArticleForm = {
  title: string;
  newsSite: string;
  summary: string;
  url: string;
  imageUrl: string;
};

export function Auth() {
  const history = useHistory();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: CreateArticleForm) => {
    alert("Foi");
    history.push("/home");
  };

  //Const para input Password//
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <SimpleGrid columns={2} spacing={0} templateColumns="55% 45%">
      <Stack
        bg="blue"
        bgImage={`url(${grafico}), linear-gradient(120deg, rgb(74, 109, 223) 0%, rgba(0,237,255,1) 100%)`}
        bgSize="cover"
        height="100vh"
        px="100px"
        py="80px"
        color="white"
        alignItems="center"
        justifyContent="center"
      >
        <Stack marginTop="350px" spacing="15px">
          <Heading>Crie e gerencie suas Ordens de Serviço!</Heading>
          <Text>
            Além de controlar todas as suas OS, tenha todas as metricas do seu
            negocio em um só lugar.
          </Text>
        </Stack>
      </Stack>

      {/*--Aqui começa o lado direito--*/}

      <Stack
        bg="white"
        height="100vh"
        alignItems="center"
        w="100%"
        pt="120px"
        display="flex"
        textAlign="center"
      >
        <Image
          src={Logo}
          alt="Logo da Market Finance"
          width="283px"
          height="70"
          margin="5px"
        />
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          style={{
            width: "60%",
          }}
        >
          <Button
            leftIcon={<FcGoogle size="35" />}
            bg="white"
            color="black"
            type="submit"
            border="1px solid #a8a8b3"
            borderRadius="50px"
            margin="5px"
            isFullWidth
            h="50px"
            textDecoration="none"
            fontStyle="none"
            textTransform="none"
          >
            Log in with Google
          </Button>
          <Box margin="15px" color="#a8a8b3">
            or Log in with your email
          </Box>
          <FormControl isInvalid={errors.title}>
            <Input
              id="title"
              {...register("title", {
                required: "Campo obrigatório",
              })}
              borderRadius="50px"
              placeholder="Email"
              margin="5px"
              h="50px"
            />
            <FormErrorMessage>
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.newsSite} mt="2">
            {/* <Input
              id="newsSite"
              {...register("newsSite", {
                required: "Campo obrigatório",
              })}
              borderRadius="50px"
              placeholder="Password"
              margin="5px"
              h="50px"
              type="password"
            /> */}
            <InputGroup size="md">
              <Input
                type={show ? "text" : "password"}
                placeholder="Password"
                id="newsSite"
                {...register("newsSite", {
                  required: "Campo obrigatório",
                })}
                borderRadius="50px"
                margin="5px"
                h="50px"
              />
              <InputRightElement width="6rem" height="3.8rem">
                <Button borderRadius="50px" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.newsSite && errors.newsSite.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            bg="#058CE6"
            color="white"
            type="submit"
            borderRadius="50px"
            isFullWidth
            margin="5px"
            h="50px"
            transition="0.2s"
            _hover={{ filter: "auto", brightness: "90%" }}
          >
            Log In
          </Button>
          <Box margin="15px">
            <Link color="#058CE6" textDecoration="none">
              Forgot password?
            </Link>
          </Box>
          <Text margin="30px">
            Don't have an account? <InitialFocus />
          </Text>
        </form>
      </Stack>
    </SimpleGrid>
  );
}
