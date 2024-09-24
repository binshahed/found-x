"use client";

import FoundXDatePicker from "@/src/components/form/FoundXDatePicker";
import FoundXInput from "@/src/components/form/FoundXInput";
import FoundXSelect from "@/src/components/form/FoundXSelect";
import { dateToISOString } from "@/src/utils/dateToIso";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { allDistict } from "@bangladeshi/bangladesh-address";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm
} from "react-hook-form";
import { useGetAllCategories } from "@/src/hooks/categories.hook";
import { useState } from "react";
import Image from "next/image";
import FoundXTextArea from "@/src/components/form/FoundXTextArea";
import { TrashIcon } from "@/src/components/icons";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hook";
import { useRouter } from "next/navigation";
import Loading from "@/src/components/UI/Loading";

const CreatePost = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const {
    mutate: handleCreatePost,
    isPending: isPendingCratePost,
    isSuccess
  } = useCreatePost();

  const { user } = useUser();

  const router = useRouter();

  // Destructure the remove function from useFieldArray
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions"
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    data.dateFound = dateToISOString(data?.dateFound);
    data.user = user?._id;
    data.questions = data?.questions.map((q: any) => q.value);

    formData.append("data", JSON.stringify(data));

    for (let image of imageFiles) formData.append("itemImages", image);

    handleCreatePost(formData);
  };

  //question multiple fields
  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const distict = allDistict()
    ?.sort()
    ?.map((di: any) => {
      return { label: di, value: di };
    });

  const { data: categories, isPending } = useGetAllCategories();

  let categoriesOptions = [];

  if (!isPending) {
    categoriesOptions = categories?.map((data: any) => {
      return { label: data?.name, value: data?._id };
    });
  }

  const handleImageChange = (files: FileList | null) => {
    if (!files) return;

    const selectedFiles = Array.from(files);
    setImageFiles((prev) => [...prev, ...selectedFiles]);

    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageRemove = (index: number) => {
    // Remove image from both arrays using the index
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFieldRemove = (index: number) => {
    remove(index); // Remove the field from questions array
  };

  if (!isPending && isSuccess) {
    router.push("/");
  }

  return (
    <>
      {isPendingCratePost && <Loading />}
      <div className="w-full">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div>
                <FoundXInput name="title" label="Title" />
              </div>
              <div>
                <FoundXDatePicker name="dateFound" label="Found Date" />
              </div>
              <div>
                <FoundXSelect name="city" label="City" options={distict} />
              </div>
              <div>
                <FoundXInput name="location" label="Location" />
              </div>
              <div>
                <FoundXSelect
                  name="category"
                  label="Category"
                  options={categoriesOptions}
                  loading={isPending}
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="w-full h-full block rounded-xl py-2 px-3 border border-default-400 text-xs cursor-pointer"
                >
                  Image Upload
                </label>
                <input
                  className="hidden"
                  id="image"
                  type="file"
                  name="image"
                  multiple
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleImageChange(e.target.files)}
                />
              </div>
            </div>

            {/* Image Previews */}
            <div className="flex flex-wrap">
              {imagePreviews.length > 0 &&
                imagePreviews?.map((image, index) => (
                  <div key={index} className="relative m-4">
                    <Image
                      src={image}
                      alt=""
                      width={150}
                      height={50}
                      className="p-2 border border-dashed rounded-md object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="absolute top-[11px] right-2 text-red-700 rounded-full px-[5px]"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}
            </div>

            <div className="mt-4">
              <FoundXTextArea name="description" label="Description" />
            </div>
            <Divider className="my-4" />
            <div className="flex justify-between">
              <p>Owner verification question</p>
              <Button onClick={() => handleFieldAppend()}>Add Ques</Button>
            </div>
            <Divider className="my-4" />

            {fields?.map((field, index) => (
              <div key={field?.id} className="mb-4 flex">
                <FoundXInput
                  className="w-11/12"
                  name={`questions.${index}.value`}
                  label={`Ques No ${index + 1}`}
                />
                <div className="flex m-auto">
                  <button
                    type="button"
                    onClick={() => handleFieldRemove(index)} // Call the remove function
                    className="rounded-full px-[5px] hover:text-red-600"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}

            <Button type="submit">Create Post</Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CreatePost;
