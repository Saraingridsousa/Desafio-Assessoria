import { GeneralText } from "@/components/Text";
import { GeneralTitle } from "@/components/Title";
import { HStack, Stack, Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Membros() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/membrosj")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar membros:", error);
      });
  }, []);

  return (
    <>
      <HStack paddingTop={"60px"} paddingBottom={"20px"} display={"flex"} justifyContent={"center"}>
        <Stack>
          <GeneralTitle text={"Membros"} color={"#fff"} fontSize={"24px"} bColor={"darkpink"} textAlign={"center"} />
        </Stack>
      </HStack>

      <Stack
       marginBottom={20}
        >
        <HStack bg={"darkpink"}  height={"45px"} borderRadius={"16px 16px 0 0"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  <GeneralText text={"Nome"} color={"white"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
                <Th>
                  <GeneralText text={"E-mail"} color={"white"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
                <Th>
                  <GeneralText text={"Aniversário"} color={"white"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
                <Th>
                  <GeneralText text={"Cargo"} color={"white"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
              </Tr>
            </Thead>
          </Table>
        </HStack>
        <HStack
          bg={"white"}
          boxShadow={"0px 7px 4px 0px rgba(0, 0, 0, 0.20)"}
          borderRadius={"0 0 16px 16px"}
        >
          <Table variant="simple">
            <Tbody>
              {members.map((member) => (
                <Tr key={member.id}>
                  <Td>{member.name}</Td>
                  <Td>{member.email}</Td>
                  <Td>{member.birthday}</Td>
                  <Td>{member.position}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </HStack>
      </Stack>
    </>
  );
}
