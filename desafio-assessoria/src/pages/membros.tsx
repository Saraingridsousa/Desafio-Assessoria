import { GeneralText } from "@/components/Text";
import { GeneralTitle } from "@/components/Title";
import { HStack, Stack, Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface MembrosProps {
  id: number
  name: string
  email: string
  birthday: string
  position: string
}

export default function Membros({id, name, email, birthday, position}:MembrosProps) {
  const [members, setMembers] = useState<MembrosProps[]>([]);

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
      <HStack paddingTop={"60px"} paddingBottom={8} display={"flex"} justifyContent={"center"}>
        <Stack>
          <GeneralTitle text={"Membros"} color={"#fff"} fontSize={"24px"} bColor={"darkpink"} textAlign={"center"} />
        </Stack>
      </HStack>

      <Stack marginBottom={34} marginLeft={12} marginRight={12}>
        <Box borderRadius="16px" boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.20)">
          <Table variant="simple">
            <Thead style={{ background: "lightpink" }}>
              <Tr>
                <Th w={"25%"} textAlign={"center"}>
                  <GeneralText text={"Nome"} color={"darkpink"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
                <Th w={"25%"} textAlign={"center"}>
                  <GeneralText text={"E-mail"} color={"darkpink"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
                <Th w={"25%"} textAlign={"center"}>
                  <GeneralText text={"Aniversário"} color={"darkpink"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
                <Th w={"25%"} textAlign={"center"}>
                  <GeneralText text={"Cargo"} color={"darkpink"} fontSize={"20px"} fontWeight={"normal"} textTransform={"none"} />
                </Th>
              </Tr>
            </Thead>
            <Tbody style={{ background: "white" }}>
              {members.map((member) => (
                <Tr key={member.id}>
                  <Td w={"25%"} textAlign={"center"}>{member.name}</Td>
                  <Td w={"25%"} textAlign={"center"}>{member.email}</Td>
                  <Td w={"25%"} textAlign={"center"}>{member.birthday}</Td>
                  <Td w={"25%"} textAlign={"center"}>{member.position}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </>
  );
}
