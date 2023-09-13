import { GeneralTitle } from "@/components/Title";
import { HStack, Stack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
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
      <HStack paddingTop={"60px"} paddingBottom={"80px"} display={"flex"} justifyContent={"center"}>
        <Stack>
          <GeneralTitle text={"Membros"} color={"#fff"} fontSize={"24px"} bColor={"darkpink"} textAlign={"center"} />
        </Stack>
      </HStack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th>Aniversário</Th>
            <Th>Cargo</Th>
          </Tr>
        </Thead>
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
    </>
  );
}
