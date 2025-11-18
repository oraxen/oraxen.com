import { Badge } from "../components/Badge";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: `Terms of Use - ${siteConfig.name}`,
  description:
    "Read the terms of use for the Oraxen website. Understand your rights and obligations when using our informational content and resources.",
  keywords: [
    "terms of use",
    "terms of service",
    "service agreement",
    "user terms",
    "legal terms",
    "Oraxen",
    "Minecraft plugin",
  ],
  openGraph: {
    title: `Terms of Use - ${siteConfig.name}`,
    description:
      "Read the terms of use for the Oraxen website. Understand your rights and obligations when using our informational content and resources.",
    url: `${siteConfig.url}/terms`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/logo_lowres.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Terms of Use`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms of Use - ${siteConfig.name}`,
    description:
      "Read the terms of use for the Oraxen website. Understand your rights and obligations when using our informational content and resources.",
    images: [`${siteConfig.url}/logo_lowres.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function Terms() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="terms-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Terms of Use</Badge>
        <h1
          id="terms-overview"
          className="mt-2 inline-block bg-gradient-to-br from-text to-text-secondary bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>Service Terms & Conditions</Balancer>
        </h1>
        <p className="text-secondary-dark dark:text-secondary-light mt-6 max-w-2xl text-lg">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>{siteConfig.name} &ndash; Terms of Use</p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            1. Scope and Parties
          </h3>

          <p>
            <strong>1.1</strong> These Terms of Use (&ldquo;Terms&rdquo;) govern
            your use of the Oraxen website and any related content, downloads,
            or resources (&ldquo;Service&rdquo;). By using the Service, you
            accept these Terms. If you do not agree with these Terms, you should
            not use the Service.
          </p>

          <p>
            <strong>1.2</strong> For the purposes of these Terms,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo; refers to
            the maintainers of the Oraxen project. &ldquo;You&rdquo; or
            &ldquo;User&rdquo; refers to any person accessing or using the
            Service.
          </p>

          <p>
            <strong>1.3</strong> Any deviating or supplemental terms of the
            Customer will not become part of the contract unless we have
            expressly agreed to them in writing.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            2. Services Provided
          </h3>

          <p>
            <strong>2.1 Core Service:</strong> We provide an informational
            website about the Oraxen Minecraft plugin, along with related
            content and resources. The exact features of our Service are
            described on our website and may change over time.
          </p>

          <p>
            <strong>2.2 Service Modifications:</strong> We may make reasonable
            changes to the Service (e.g. to improve performance or comply with
            laws). Where appropriate, we will inform you of any material changes
            in a timely manner.
          </p>

          <p>
            <strong>2.3 Third-Party Components:</strong> If our Service relies
            on third-party providers or data sources, availability of those
            external services is outside of our control; if a third-party ceases
            to provide a necessary component, we will inform you where feasible
            and strive to find a suitable alternative or solution.
          </p>

          <p>
            <strong>2.4 Interruptions:</strong> We do not warrant that the
            Service will be completely error-free or uninterrupted, but we will
            use commercially reasonable efforts to promptly address any material
            service issues.
          </p>

          <p>
            <strong>2.5 No Guaranteed Results:</strong> Unless explicitly
            agreed, we do not guarantee specific outcomes, performance
            improvements, or results from using the Service.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            3. Customer Obligations
          </h3>

          <p>
            <strong>3.1</strong> The User agrees to use the Service only in
            compliance with all applicable laws and these Terms. You must keep
            confidential any login credentials (if any) and prevent unauthorized
            access to the Service. You are responsible for ensuring that any
            data or content you submit in connection with the Service does not
            infringe any third-party rights or violate any laws.
          </p>

          <p>
            <strong>3.2 Prohibited Uses:</strong> You shall not reverse
            engineer, decompile, or otherwise misuse the Service. You shall not
            use the Service to violate any third-party rights or applicable
            laws. In the event of a breach of these obligations, we are entitled
            to temporarily suspend or restrict your access to the Service, after
            reasonable notice if feasible.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            4. Intellectual Property and Data
          </h3>

          <p>
            <strong>4.1 Service IP:</strong> All intellectual property rights in
            the Service (including the website content, branding, and related
            materials) are and remain the property of their respective owners.
            We grant you a limited, non-exclusive, non-transferable right to use
            the Service for your personal and non-commercial use, in accordance
            with these Terms.
          </p>

          <p>
            <strong>4.2 User Content:</strong> You retain all rights to any
            content that you upload or provide via the Service (&ldquo;User
            Content&rdquo;). By providing User Content, you grant us a license
            to process and use that data only to the extent necessary to operate
            and improve the Service. We will handle personal data in compliance
            with applicable data protection laws and our Privacy Policy.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            5. Fees, Payment Terms, and Set-off
          </h3>

          <p>
            <strong>5.1 Fees:</strong> The Service is currently provided on an
            informational basis. If we introduce paid features or services in
            the future, applicable fees and payment terms will be communicated
            separately.
          </p>

          <p>
            <strong>5.2 Changes to Fees:</strong> We reserve the right to change
            or introduce fees at any time for new or existing features. Any such
            changes will be communicated in advance and will not retroactively
            affect amounts already paid.
          </p>

          <p>
            <strong>5.3 Taxes:</strong> If any taxes, duties, or similar charges
            apply to paid services we may offer in the future, you are
            responsible for paying them, except where we are required by law to
            collect them.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            6. Limitation of Liability
          </h3>

          <p>
            <strong>6.1 Unlimited Liability in Certain Cases:</strong> We shall
            be liable without limit in cases of intentional misconduct or gross
            negligence by us, our legal representatives, or agents. We also bear
            full liability for any damages resulting from injury to life, body,
            or health caused by any negligence on our part.
          </p>

          <p>
            <strong>6.2 Liability for Ordinary Negligence:</strong> In cases of
            ordinary negligence, we will only be liable for the breach of
            essential contractual obligations. Essential obligations are those
            duties which are fundamental to the contract and on whose
            fulfillment the User can rely.
          </p>

          <p>
            <strong>6.3 Exclusion of Other Negligence:</strong> We shall not be
            liable for breaches of duty caused by ordinary negligence if those
            duties are not essential contractual obligations.
          </p>

          <p>
            <strong>6.4 Further Liability Limitations:</strong> To the extent
            our liability is limited or excluded under the provisions above, the
            same limitations or exclusions apply to the personal liability of
            our officers, employees, agents, and subcontractors.
          </p>

          <p>
            <strong>6.5 Indemnification by User:</strong> The User shall
            indemnify and hold us harmless from any third-party claims arising
            out of the User&rsquo;s unlawful use of the Service or breach of
            these Terms, to the extent the User is responsible for such breach.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            7. Term and Termination
          </h3>

          <p>
            <strong>7.1 Contract Term:</strong> The contract for use of the
            Service begins when the User accepts these Terms and accesses the
            website. The term of the contract is for an indefinite period and
            ends when you cease use of the Service or when we discontinue it.
          </p>

          <p>
            <strong>7.2 Ordinary Termination:</strong> You may stop using the
            Service at any time. We may suspend or discontinue the Service at
            any time for any reason, with or without notice.
          </p>

          <p>
            <strong>7.3 Termination for Cause:</strong> Either party may
            terminate the contract with immediate effect for cause if the legal
            requirements for such termination are met, including serious breach
            of these Terms.
          </p>

          <p>
            <strong>7.4 Effects of Termination:</strong> Upon termination or
            expiration of the contract, we may remove or restrict access to
            parts of the Service and delete any data stored in connection with
            your use, except to the extent we are legally required to retain it.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            8. Governing Law and Jurisdiction
          </h3>

          <p>
            <strong>8.1 Governing Law:</strong> This Agreement and any disputes
            arising out of it shall be governed by the laws applicable in your
            country of residence, unless mandatory consumer protection laws
            provide otherwise.
          </p>

          <p>
            <strong>8.2 Jurisdiction:</strong> Where permitted by law, the
            courts of your place of residence shall have jurisdiction for all
            disputes arising from or in connection with these Terms.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            9. Reference Use
          </h3>

          <p>
            We may publicly refer to Oraxen and its community in marketing or
            informational materials, but we will not use your personal name,
            logo, or branding as a reference client without your prior consent.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            10. Final Provisions
          </h3>

          <p>
            <strong>10.1 Changes to Terms:</strong> We reserve the right to
            modify or update these Terms for future use of the Service. We will
            post the updated Terms on the website and indicate the date of the
            latest revision. Your continued use of the Service after such
            changes constitutes acceptance of the updated Terms.
          </p>

          <p>
            <strong>10.2 No Oral Agreements:</strong> These Terms constitute the
            entire agreement between you and us regarding the Service. There are
            no side agreements or representations other than those expressly
            contained in writing in this contract.
          </p>

          <p>
            <strong>10.3 Severability:</strong> Should any provision of these
            Terms be or become invalid or unenforceable, the remainder of the
            provisions shall remain in effect. In place of the invalid
            provision, a valid provision shall apply that most closely reflects
            the original economic intent of the invalid clause.
          </p>

          <p>
            <strong>10.4 Contract Languages:</strong> This English version of
            the Terms of Use is the binding version for the contractual
            relationship.
          </p>

          <p>
            <strong>10.5 Contact and Legal Notice:</strong> If you have any
            questions or communications regarding these Terms, you may contact
            us at support@oraxen.com. Our Privacy Policy can be found on our
            website.
          </p>
        </div>
      </section>
    </div>
  );
}
