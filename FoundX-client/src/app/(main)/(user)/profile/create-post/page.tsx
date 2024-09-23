"use client";

import FoundXInput from "@/src/components/form/FoundXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm
} from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "questions"
    }
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FoundXInput name="title" />
          <Divider className="my-4" />
          <div className="flex justify-between">
            <p>Owner verification question</p>
            <Button onClick={() => handleFieldAppend()}>Add Ques</Button>
          </div>
          <Divider className="my-4" />

          {fields.map((field, index) => (
            <div key={field?.id}>
              <FoundXInput name={`questions.${index}.value`} />
            </div>
          ))}

          <Button type="submit">Crate Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
