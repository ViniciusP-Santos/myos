import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

type LoginEmailPassword = {
  title: string;
  newsSite: string;
  summary: string;
  url: string;
  imageUrl: string;
};

export function InitialFocus() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: LoginEmailPassword) => {
    alert("Login Sucess");
  };
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blue"
        variant="link"
        isFullWidth={false}
        fontWeight="light"
      >
        Create your account
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form
              onSubmit={handleSubmit(onSubmit as any)}
              style={{
                width: "100%",
              }}
            >
              <FormControl isInvalid={errors.createName}>
                <Input
                  id="createName"
                  {...register("createName", {
                    required: "Campo obrigatório",
                  })}
                  borderRadius="50px"
                  placeholder="Name"
                  margin="5px"
                  marginBottom="15px"
                  h="50px"
                />
                <FormErrorMessage>
                  {errors.createName && errors.createName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.createEmail}>
                <Input
                  id="createEmail"
                  {...register("createEmail", {
                    required: "Campo obrigatório",
                  })}
                  borderRadius="50px"
                  placeholder="Email"
                  margin="5px"
                  h="50px"
                />
                <FormErrorMessage>
                  {errors.createEmail && errors.createEmail.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.createPassword} mt="2">
                <InputGroup size="md">
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    id="createPassword"
                    {...register("createPassword", {
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
                  {errors.createPassword && errors.createPassword.message}
                </FormErrorMessage>
              </FormControl>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Register
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
