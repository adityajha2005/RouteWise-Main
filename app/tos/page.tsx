"use client";
import { ArrowLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const questions = [
  {
    title: "1. Introduction",
    content:
      "These terms and conditions outline the rules for using Routewise services and software, a real-time collaboration platform designed for developers. By using Routewise, you can edit code together, communicate with your team, and manage projects seamlessly.",
  },
  {
    title: "2. Agreement to Terms and Conditions",
    content:
      "By accessing or using Routewise, you agree to these terms and conditions. Please read them carefully before using the platform.",
  },
  {
    title: "3. Responsibilities",
    content:
      "While Routewise facilitates collaborative coding and communication, users are responsible for their own actions, including the content they create, share, or modify within the platform.",
  },
  {
    title: "4. Guarantee",
    content:
      "Routewise does not guarantee the availability or functionality of the platform at all times. We do not provide warranties regarding the quality, performance, or fitness for purpose of the platform, and are not liable for any interruptions or service failures.",
  },
  {
    title: "5. Refunds",
    content:
      "Given the digital nature of Routewise, access to the platform is granted immediately after purchase. As such, no refunds or exchanges will be issued once you have access to the service.",
  },
  {
    title: "6. Changes to Terms",
    content:
      "Routewise reserves the right to modify these terms and conditions from time to time. Any significant changes will be communicated to users. It is your responsibility to review these terms periodically for any updates.",
  },
  {
    title: "7. Code Execution and Collaboration",
    content:
      "Routewise allows real-time code collaboration, including the ability to edit code simultaneously with other developers and execute code directly within the platform. You agree to use these features responsibly and in accordance with the platform's terms.",
  },
  {
    title: "8. User Content and Ownership",
    content:
      "Users retain ownership of the code and content they create within Routewise. However, by using the platform, you grant Routewise a license to host, store, and display such content as necessary for the operation of the service.",
  },
  {
    title: "9. Security and Privacy",
    content:
      "Routewise takes reasonable measures to protect user data and code from unauthorized access. However, we cannot guarantee the absolute security of your information. By using the platform, you agree to our privacy practices as outlined in our Privacy Policy.",
  },
];

export default function Terms() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Terms and Conditions - Routewise</title>
        <meta name="description" content="Terms and Services for Routewise" />
      </Head>
      <div className="font-brico font-normal">
        <div className="max-w-xl mx-auto">
          <div className="p-5 flex flex-col gap-5">
            <div
              className="flex flex-row items-center rounded-xl gap-2 align-middle cursor-pointer p-2 text-sm w-fit hover:bg-primary-color/5 transition duration-300"
              onClick={() => router.push("/")}
            >
              <ArrowLeft /> Home
            </div>
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            <div className="text-sm font-normal flex flex-col gap-5">
              {questions.map((question, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h2 className="font-semibold text-lg">{question.title}</h2>
                  <p
                    className="text-foreground-hsl/60"
                    dangerouslySetInnerHTML={{ __html: question.content }}
                  ></p>
                </div>
              ))}
              <div>
                <p className="text-opacity-60">
                  This document was last updated in December 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
