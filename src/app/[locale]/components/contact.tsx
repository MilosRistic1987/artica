"use client";

import React from "react";
import { EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormInput = {
    name: string;
    email: string;
    subject: string;
    content: string;
  };

const Contact: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
  } = useForm<FormInput>();
  const t = useTranslations("Contact");

  const onSubmit = async (formData: FormInput) => {
    try {
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      toast.success(t("successfulSentMessage"));
      reset(); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="contactSection" id="contact">
      <article className="contactIconwrapp">
        <EnvelopeOpenIcon />
        <label>{t("greeting.sec1")}</label>
        <label>{t("greeting.sec2")}</label>
      </article>
      <div className="contactFormWrapp">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formHeadingWrapp">
            <h1>{t("heading")}</h1>
          </div>
          <div className="contactInlineWrapp">
            <div className="inptWrapp">
              <label>{t("nameInput.label")}</label>
              <input type="text" {...register("name", { required: true })} placeholder={t("nameInput.placeholder")} />
            </div>
            <div className="inptWrapp">
              <label>{t("emailInput.label")}</label>
              <input type="text" {...register("email", { required: true })} placeholder={t("emailInput.placeholder")} />
            </div>
          </div>
          <div className="inptWrapp">
            <label>{t("subjectInput.label")}</label>
            <input type="text" {...register("subject", { required: true })} placeholder={t("subjectInput.placeholder")} />
          </div>
          <div className="inptWrapp">
            <label>{t("messageInput.label")}</label>
            <textarea {...register("content", { required: true })} placeholder={t("messageInput.placeholder")} />
          </div>
          <div className="contactBtnWrapp">
            <button>{t("button")}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
