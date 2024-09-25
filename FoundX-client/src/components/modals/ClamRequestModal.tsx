"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from "@nextui-org/modal";
import FoundXForm from "../form/FoundXForm";
import FoundXInput from "../form/FoundXInput";
import FoundXTextArea from "../form/FoundXTextArea";
import { useCreateClimeRequest } from "@/src/hooks/climeRequest.hook";

interface IProps {
  buttonText: string;
  modalTitle: string;
  post: TPost;
}

export default function ClamRequestModal({
  buttonText,
  modalTitle,
  post
}: IProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { mutate: createClimeRequest } = useCreateClimeRequest();

  const handleSubmit = (data: any) => {
    if (!data) {
      console.error("Form data is undefined.");
      return;
    }

    data.item = post?._id;
    createClimeRequest(data);
  };

  return (
    <>
      <Button onPress={onOpen} variant="light">
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>
                <FoundXForm onSubmit={handleSubmit}>
                  {/* Dynamic Questions Rendering */}
                  {post?.questions?.map((question, index) => (
                    <FoundXInput
                      key={index}
                      name={`answers[${index}]`} // Make answers part of an array
                      label={question}
                      className="mb-4"
                    />
                  ))}

                  <FoundXTextArea
                    className="my-4"
                    name="description"
                    label="Description"
                  />

                  {/* Buttons */}
                  <div className="my-4 ">
                    <Button
                      type="submit"
                      color="warning"
                      className="block w-full"
                    >
                      Submit
                    </Button>
                  </div>
                </FoundXForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
