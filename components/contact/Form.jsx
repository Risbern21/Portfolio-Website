"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending Your Message,Please Wait...");
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        params,
        {
          publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I've received your message!!,I will get back to you soon",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error("Oops something went wrong :(", {
            id: toastId,
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Risbern",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };
  // console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-md w-full items-center justify-center space-y-6"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "This field is required!!!",
            minLength: {
              value: 3,
              message: "Minimum 3 characters are required",
            },
            maxLength: {
              value: 80,
              message: "Maximum 80 characters are allowed",
            },
          })}
          className="w-full text-foreground p-2 shadow-lg rounded-md focus:outline-none focus:ring-2 navbutton focus:ring-amber-200/50 backdrop-blur"
        />
        {errors.name && (
          <span className="text-amber-200 inline-block">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "This field is required!!!",
            pattern: /^\S+@\S+$/i,
          })}
          className="w-full text-foreground p-2 shadow-lg rounded-md focus:outline-none focus:ring-2 navbutton focus:ring-amber-200/50 backdrop-blur"
        />
        {errors.email && (
          <span className="text-amber-200 inline-block">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder="Message"
          {...register("message", {
            required: "Please enter a message",
            maxLength: {
              value: 500,
              message: "Message should contain less than 500 characters",
            },
            minLength: {
              value: 20,
              message: "Message should contain atleast 20 chracters!!!",
            },
          })}
          className="w-full text-foreground p-2 shadow-lg rounded-md focus:outline-none focus:ring-2 navbutton focus:ring-amber-200/50 backdrop-blur"
        />
        {errors.message && (
          <span className="text-amber-200 inline-block">
            {errors.message.message}
          </span>
        )}
        <motion.input
          variants={item}
          value="Cast Your Message"
          type="submit"
          className="bg-background px-3 xs:px-10 py-2 shadow-lg rounded-md focus:ring-2 focus:ring-amber-200/50 cursor-pointer capitalize"
        />
      </motion.form>
    </>
  );
}
