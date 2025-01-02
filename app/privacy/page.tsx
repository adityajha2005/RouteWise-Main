"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "phosphor-react";

const privacyPolicies = [
  {
    title: "1. Introduction",
    content:
      "At Routewise, your privacy is our priority. We are dedicated to ensuring that any information shared with us when using our platform remains secure and confidential.",
  },
  {
    title: "2. Information We Collect",
    content:
      "Routewise does not collect personal data, cookies, or any user-specific information. Our platform is designed to function seamlessly without requiring such details.",
  },
  {
    title: "3. Data Usage and Retention",
    content:
      "As we do not collect personal data, there is no data storage or retention involved. Your use of Routewise remains completely anonymous.",
  },
  {
    title: "4. Data Sharing and Disclosure",
    content:
      "Since no personal data is collected, there is no data to share or disclose. Your privacy is inherently protected.",
  },
  {
    title: "5. Data Protection",
    content:
      "Although we do not collect personal data, Routewise adheres to best practices to maintain a secure and privacy-respecting platform.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "Routewise may include links to external websites. Please note that we are not responsible for the privacy practices or content of these third-party sites.",
  },
  {
    title: "7. Your Control Over Your Data",
    content:
      "As no personal data is collected, you have full control over your privacy while using Routewise. No data requests or obligations are imposed on you.",
  },
  {
    title: "8. Acceptance of Terms",
    content:
      "By using Routewise, you agree to the practices outlined in this policy. If you have any questions, feel free to reach out to us.",
  },
  {
    title: "9. Use of Images Provided in the Project",
    content:
      "The images of people provided in this project are solely for illustrative purposes. Using these images outside the context of this project or for any other purpose is strictly prohibited.",
  },
];

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Privacy Policy - Routewise</title>
        <meta name="description" content="Privacy Policy for Routewise" />
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
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <div className="text-sm font-normal flex flex-col gap-5">
              {privacyPolicies.map((policy, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h2 className="font-semibold text-lg">{policy.title}</h2>
                  <p
                    className="text-foreground-hsl/60"
                    dangerouslySetInnerHTML={{ __html: policy.content }}
                  ></p>
                </div>
              ))}
              <div>
                <p className="text-opacity-75">
                  This document was last updated on December 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
