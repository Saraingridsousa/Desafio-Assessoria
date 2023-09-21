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
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillEye, AiFillDelete } from 'react-icons/ai';


type EditMember = {
  id: number | null;
  name: string;
  email: string;
  aniversario: string;
  cargo: string;
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
    aniversario: "",
    cargo: "",
  });

  const [editMember, setEditMember] = useState<EditMember>({
    id: null,
    name: "",
    email: "",
    aniversario: "",
    cargo: "",
  });

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

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

  const setEditingMemberData = (member) => {
    setEditMember({
      id: member.id,
      name: member.name,
      email: member.email,
      aniversario: member.aniversario,
      cargo: member.cargo,
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
          aniversario: "",
          cargo: "",
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

  const handleDelete = (member) => {
    setMemberToDelete(member);
    setDeleteConfirmationModal(true);
  };

  const confirmDelete = () => {
    if (memberToDelete) {
      axios
        .delete(`http://localhost:3001/membrosj/${memberToDelete.id}`)
        .then(() => {
          const updatedMembers = members.filter(
            (member) => member.id !== memberToDelete.id
          );
          setMembers(updatedMembers);
          setDeleteConfirmationModal(false);
        })
        .catch((error) => {
          console.error("Erro ao excluir membro:", error);
        });
    }
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
        <Box borderRadius={"16px"} boxShadow="0px 7px 4px 0px rgba(0, 0, 0, 0.20)">
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
                    _hover={{bg:"#AA4946", }}
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
                  <Td w={"20%"} textAlign={"center"}>{member.aniversario}</Td>
                  <Td w={"20%"} textAlign={"center"}>{member.cargo}</Td>
                  <Td w={"20%"} textAlign={"center"} alignItems={"center"}>
                    <HStack pacing={4} justifyContent="center">

                      <Button bg={"darkpink"} fontSize={20} w={"24%"} _hover={{bg:"#AA4946", }}
                      onClick={() => {
                        setEditingMemberData(member);
                        setIsEditing(true);
                      }}> <MdModeEditOutline color={"lightpink"}/> </Button>

                      <Button  bg={"darkpink"} fontSize={20} w={"24%"} _hover={{bg:"#AA4946", }}
                      onClick={() => handleView(member)}> <AiFillEye color={"lightpink"}/></Button>

                      <Button  bg={"darkpink"} fontSize={20} w={"24%"} _hover={{bg:"#AA4946", }}
                      onClick={() => handleDelete(member)}> <AiFillDelete color={"lightpink"}/> </Button>
                    </HStack>
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
                value={newMember.aniversario}
                onChange={(e) =>
                  setNewMember({ ...newMember, aniversario: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input
                type="text"
                value={newMember.cargo}
                onChange={(e) =>
                  setNewMember({ ...newMember, cargo: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <HStack position={4}>
            <Button w={"50%"} colorScheme={"darkpink"} bg={"darkpink"} _hover={{bg:"#AA4946", }} onClick={handleCreate} >
              Salvar
            </Button>
            <Button w={"50%"} colorScheme={"darkpink"} bg={"darkpink"} _hover={{bg:"#AA4946", }} onClick={() => setIsCreating(false)} >Cancelar</Button>
            </HStack>
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
                value={editMember.aniversario}
                onChange={(e) =>
                  setEditMember({ ...editMember, aniversario: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input
                type="text"
                value={editMember.cargo}
                onChange={(e) =>
                  setEditMember({ ...editMember, cargo: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <HStack position={4}>
            <Button w={"50%"} colorScheme={"darkpink"} bg={"darkpink"} _hover={{bg:"lightpink", }} onClick={handleEdit}>
              Salvar
            </Button>
            <Button w={"50%"} colorScheme={"darkpink"} bg={"darkpink"} _hover={{bg:"lightpink", }} onClick={() => setIsEditing(false)}>Cancelar</Button>
            </HStack>
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
              <Input type="text" value={selectedMember.aniversario} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input type="text" value={selectedMember.cargo} isReadOnly />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal
        isOpen={deleteConfirmationModal}
        onClose={() => setDeleteConfirmationModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar Exclusão</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Tem certeza de que deseja excluir este membro?
          </ModalBody>
          <ModalFooter>
            <HStack position={4}>
            <Button w={"50%"} colorScheme={"darkpink"} bg={"darkpink"} _hover={{bg:"lightpink", }} onClick={confirmDelete}>
              Confirmar
            </Button>
            <Button w={"50%"} colorScheme={"darkpink"} bg={"darkpink"} _hover={{bg:"lightpink", }} onClick={() => setDeleteConfirmationModal(false)}>
              Cancelar
            </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

