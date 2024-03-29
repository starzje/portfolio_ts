/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import InputField from "./InputField";
import { formAnimation } from "../../../helpers/animations";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idToast = toast.loading("Sending email...");
    emailjs
      .sendForm(
        "service_ge5jyej",
        "template_ngfqrlm",
        form.current!,
        "GiCXUjozzVj_odgQA"
      )
      .then(
        (result) => {
          toast.update(idToast, {
            render: "Email sent successfully. I will contact you soon.",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          toast.update(idToast, {
            render: "Something went wrong",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <>
      <motion.form
        variants={formAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full md:w-[25em] bg-gradient-to-r from-[#19126d] to-[#1a145c]  flex-col space-y-5 rounded-2xl mt-5  py-7 px-5 shadow-xl opacity-100 md:opacity-90"
      >
        <p className="text-white text-2xl  font-extralight">
          Send me a message.
        </p>
        <InputField
          id={"name"}
          value={name}
          onChange={(
            e:
              | React.ChangeEvent<HTMLInputElement>
              | React.ChangeEvent<HTMLTextAreaElement>
          ) => setName(e.target.value)}
          inputName={"user_name"}
          labelFor={"name"}
          labelText={"Enter Your Name"}
          pattern="^[a-zA-Z ]{2,30}$"
        />
        <InputField
          id={"email"}
          value={email}
          onChange={(
            e:
              | React.ChangeEvent<HTMLInputElement>
              | React.ChangeEvent<HTMLTextAreaElement>
          ) => setEmail(e.target.value)}
          inputName={"user_email"}
          labelFor={"email"}
          labelText={"Enter Your Email"}
          pattern="^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,4}$"
        />
        <InputField
          id={"textarea"}
          value={message}
          onChange={(
            e:
              | React.ChangeEvent<HTMLInputElement>
              | React.ChangeEvent<HTMLTextAreaElement>
          ) => setMessage(e.target.value)}
          inputName={"message"}
          labelFor={"textarea"}
          labelText={"Enter Your Message"}
          inputType={"textarea"}
          pattern="^[a-zA-Z ]{2,30}$"
        />
        <button className="rounded-lg bg-[#1F1CA1] hover:bg-[#2826b0] transition duration-300 py-3 font-bold text-white flex justify-center items-center gap-2">
          Send <RiMailSendLine />
        </button>
      </motion.form>
    </>
  );
};

export default Form;
