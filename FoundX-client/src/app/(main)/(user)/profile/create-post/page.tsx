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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <FoundXInput name="title" label="Title" />
            </div>
            <div>
              <FoundXInput name="description" label="Found On" />
            </div>
            <div>
              <FoundXInput name="location" label="Location" />
            </div>
            <div>
              <FoundXInput name="city" label="City" />
            </div>
            <div>
              <FoundXInput name="category" label="Category" />
            </div>
            <div>
              <FoundXInput name="uploadImage" label="itemImages" />
            </div>
          </div>

          <Divider className="my-4" />
          <div className="flex justify-between">
            <p>Owner verification question</p>
            <Button onClick={() => handleFieldAppend()}>Add Ques</Button>
          </div>
          <Divider className="my-4" />

          {fields.map((field, index) => (
            <div key={field?.id}>
              <FoundXInput
                name={`questions.${index}.value`}
                label={`Ques No ${index + 1}`}
              />
            </div>
          ))}

          <Button type="submit">Crate Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
