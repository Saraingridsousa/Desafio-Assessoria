import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { GeneralTitle } from "@/components/Title";
import { GeneralText } from "@/components/Text";

// Definindo o tipo para editMember
type EditMember = {
  id: number | null;
  name: string;
  email: string;
  birthday: string;
  position: string;
};

export default function Gerenciamento() {
  const [members, setMembers] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    birthday: "",
    position: "",
  });

  // Estado para editMember com o tipo definido
  const [editMember, setEditMember] = useState<EditMember>({
    id: null,
    name: "",
    email: "",
    birthday: "",
    position: "",
  });

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

  // Função para configurar editMember com os dados do membro a ser editado
  const setEditingMemberData = (member) => {
    setEditMember({
      id: member.id,
      name: member.name,
      email: member.email,
      birthday: member.birthday,
      position: member.position,
    });
  };

  const handleCreate = () => {
    axios
      .post("http://localhost:3001/membrosj", newMember)
      .then((response) => {
        setMembers([...members, response.data]);
        setIsCreating(false);
        setNewMember({
          name: "",
          email: "",
          birthday: "",
          position: "",
        });
      })
      .catch((error) => {
        console.error("Erro ao criar membro:", error);
      });
  };

  const handleEdit = () => {
    if (!editMember.id) {
      console.error("O ID do membro selecionado não está definido.");
      return;
    }

    axios
      .put(`http://localhost:3001/membrosj/${editMember.id}`, editMember)
      .then(() => {
        const updatedMembers = members.map((member) =>
          member.id === editMember.id ? editMember : member
        );
        setMembers(updatedMembers);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Erro ao editar membro:", error);
      });
  };

  const handleView = (member) => {
    setSelectedMember(member);
    setIsViewing(true);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/membrosj/${selectedMember.id}`)
      .then(() => {
        const updatedMembers = members.filter(
          (member) => member.id !== selectedMember.id
        );
        setMembers(updatedMembers);
        setIsDeleting(false);
      })
      .catch((error) => {
        console.error("Erro ao excluir membro:", error);
      });
  };

  return (
    <>
      <HStack
        paddingTop={"60px"}
        paddingBottom={"80px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Stack>
          <GeneralTitle
            text={"Gerenciamento de Membros"}
            color={"#fff"}
            fontSize={"24px"}
            bColor={"darkpink"}
            textAlign={"center"}
          />
        </Stack>
      </HStack>

      <Stack marginBottom={34} marginLeft={12} marginRight={12}>
        <Box borderRadius="16px" boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.20)">
          <Table variant="simple">
            <Thead style={{ background: "lightpink" }}>
              <Tr>
                <Th w={"20%"} textAlign={"center"}>
                  <GeneralText
                    text={"Nome"}
                    color={"darkpink"}
                    fontSize={"20px"}
                    fontWeight={"normal"}
                    textTransform={"none"}
                  />
                </Th>
                <Th w={"20%"} textAlign={"center"}>
                  <GeneralText
                    text={"E-mail"}
                    color={"darkpink"}
                    fontSize={"20px"}
                    fontWeight={"normal"}
                    textTransform={"none"}
                  />
                </Th>
                <Th w={"20%"} textAlign={"center"}>
                  <GeneralText
                    text={"Aniversário"}
                    color={"darkpink"}
                    fontSize={"20px"}
                    fontWeight={"normal"}
                    textTransform={"none"}
                  />
                </Th>
                <Th w={"20%"} textAlign={"center"}>
                  <GeneralText
                    text={"Cargo"}
                    color={"darkpink"}
                    fontSize={"20px"}
                    fontWeight={"normal"}
                    textTransform={"none"}
                  />
                </Th>
                <Th w={"20%"} textAlign={"center"}>
                  <Button
                    onClick={() => setIsCreating(true)}
                    bg={"darkpink"}
                    color={"white"}
                    fontSize={"20px"}
                    fontWeight={"normal"}
                  >
                    Criar Membro
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody style={{ background: "white" }}>
              {members.map((member) => (
                <Tr key={member.id}>
                  <Td w={"20%"} textAlign={"center"}>{member.name}</Td>
                  <Td w={"20%"} textAlign={"center"}>{member.email}</Td>
                  <Td w={"20%"} textAlign={"center"}>{member.birthday}</Td>
                  <Td w={"20%"} textAlign={"center"}>{member.position}</Td>
                  <Td w={"20%"} textAlign={"center"}>
                    <Button onClick={() => {
                      setEditingMemberData(member); // Configurar editMember com os dados do membro
                      setIsEditing(true);
                    }}>Editar</Button>
                    <Button
                      onClick={() => handleView(member)}
                    >
                      Visualizar
                    </Button>
                    <Button
                      onClick={() => handleDelete(member)}
                    >
                      Excluir
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>

      <Modal isOpen={isCreating} onClose={() => setIsCreating(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Novo Membro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                value={newMember.name}
                onChange={(e) =>
                  setNewMember({ ...newMember, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                value={newMember.email}
                onChange={(e) =>
                  setNewMember({ ...newMember, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Aniversário</FormLabel>
              <Input
                type="text"
                value={newMember.birthday}
                onChange={(e) =>
                  setNewMember({ ...newMember, birthday: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input
                type="text"
                value={newMember.position}
                onChange={(e) =>
                  setNewMember({ ...newMember, position: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCreate}>
              Salvar
            </Button>
            <Button onClick={() => setIsCreating(false)}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal de edição */}
      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Membro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Campos de edição */}
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                value={editMember.name}
                onChange={(e) =>
                  setEditMember({ ...editMember, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                value={editMember.email}
                onChange={(e) =>
                  setEditMember({ ...editMember, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Aniversário</FormLabel>
              <Input
                type="text"
                value={editMember.birthday}
                onChange={(e) =>
                  setEditMember({ ...editMember, birthday: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input
                type="text"
                value={editMember.position}
                onChange={(e) =>
                  setEditMember({ ...editMember, position: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleEdit}>
              Salvar
            </Button>
            <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isViewing} onClose={() => setIsViewing(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalhes do Membro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input type="text" value={selectedMember.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input type="email" value={selectedMember.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Aniversário</FormLabel>
              <Input type="text" value={selectedMember.birthday} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input type="text" value={selectedMember.position} isReadOnly />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
