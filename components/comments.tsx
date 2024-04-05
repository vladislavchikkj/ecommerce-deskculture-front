"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button-lib";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

interface CommentsProps {
  title: string;
  productId?: string;
}

const Comments: React.FC<CommentsProps> = ({ title, productId }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { handleSubmit, control, reset } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (formData: z.infer<typeof FormSchema>) => {
    try {
      const response = await fetch(`/api/comments/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset the form after successful submission
        reset();
        // You may also want to update the UI to reflect the new comment
      } else {
        // Handle error response
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="space-y-4 mb-5">
      <h3 className="font-bold text-3xl pb-5">{title}</h3>
      <div className="border p-4">place to leave a comment</div>
      <Form {...form}>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write here..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can leave a review about the product here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="outline"
            type="submit"
            className="bg-black text-white">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Comments;
