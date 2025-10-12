import { Badge } from "../components/Badge";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Terms of Use - ReLens AI | Service Terms & Conditions",
  description:
    "Read ReLens AI's terms of use and service conditions. Understand your rights and obligations when using our AI visibility tracking platform for business applications.",
  keywords: [
    "terms of use",
    "terms of service",
    "service agreement",
    "user terms",
    "ReLens AI terms",
    "business terms",
    "service conditions",
    "legal terms",
  ],
  openGraph: {
    title: "Terms of Use - ReLens AI | Service Terms & Conditions",
    description:
      "Read ReLens AI's terms of use and service conditions. Understand your rights and obligations when using our AI visibility tracking platform for business applications.",
    url: `${siteConfig.url}/terms`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/preview.png`,
        width: 1200,
        height: 630,
        alt: "ReLens AI Terms of Use",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use - ReLens AI | Service Terms & Conditions",
    description:
      "Read ReLens AI's terms of use and service conditions. Understand your rights and obligations when using our AI visibility tracking platform for business applications.",
    images: [`${siteConfig.url}/images/preview.png`],
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
          <p>ReLens AI &ndash; Terms of Use</p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            1. Scope and Parties
          </h3>

          <p>
            <strong>1.1</strong> These Terms of Use (&ldquo;Terms&rdquo;) govern
            all use of the ReLens AI platform and services
            (&ldquo;Service&rdquo;) by customers who are businesses. They apply
            only if the Customer is a business entity, company, or organization.
            These Terms do not apply to individual consumers. In particular, any
            statutory rights or protections granted to consumers do not apply to
            the Service.
          </p>

          <p>
            <strong>1.2</strong> ReLens AI is operated by LFG Labs
            (&ldquo;ReLens AI&rdquo;, &ldquo;Provider&rdquo;, &ldquo;we&rdquo;
            or &ldquo;us&rdquo;), a company under Swiss law. The Provider and
            the Customer (&ldquo;you&rdquo;) agree that only these Terms shall
            govern the contract. We object to any of your general terms and
            conditions.
          </p>

          <p>
            <strong>1.3</strong> Any deviating or supplemental terms of the
            Customer will not become part of the contract unless we have
            expressly agreed to them in writing.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            2. Services Provided by ReLens AI
          </h3>

          <p>
            <strong>2.1 Core Service:</strong> We provide a software platform
            that offers AI search analytics for marketing teams. ReLens AI is
            designed to help companies assess and analyze their brand visibility
            in Large Language Models (LLMs) including ChatGPT, Perplexity,
            Gemini, and other Answer Engines. The exact features of our service
            are described on our website.
          </p>

          <p>
            <strong>2.2 Service Modifications:</strong> ReLens AI may make
            reasonable changes to the Service (e.g. to improve performance or
            comply with laws) provided such changes do not eliminate core
            features of the Service. We will inform you of any material changes
            in a timely manner.
          </p>

          <p>
            <strong>2.3 Third-Party Components:</strong> If our Service relies
            on third-party providers or data sources (including AI platforms),
            availability of those external services is outside of ReLens
            AI&rsquo;s control; if a third-party ceases to provide a necessary
            component, we will inform you and strive to find a suitable
            alternative or solution.
          </p>

          <p>
            <strong>2.4 Interruptions:</strong> ReLens AI uses technology and
            APIs to access LLMs to generate data that the Customer can analyze.
            We do not control access to these LLMs and do not warrant that the
            Service will be completely error-free or uninterrupted, but we will
            use commercially reasonable efforts to promptly address any material
            service issues.
          </p>

          <p>
            <strong>2.5 No Guaranteed Results:</strong> Unless explicitly
            agreed, ReLens AI does not guarantee specific outcomes, visibility
            improvements, or results from using the Service.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            3. Customer Obligations
          </h3>

          <p>
            <strong>3.1</strong> The Customer agrees to use ReLens AI&rsquo;s
            Service only for legitimate business purposes and in compliance with
            all applicable laws. You must keep confidential any login
            credentials and prevent unauthorized access to the Service. You are
            responsible for ensuring that any data or content you input into the
            Service does not infringe any third-party rights or violate any
            laws.
          </p>

          <p>
            <strong>3.2 Prohibited Uses:</strong> You shall not reverse
            engineer, decompile, or otherwise misuse the Service. You shall not
            use the Service to violate any third-party rights or applicable
            laws. In the event of a breach of these obligations, ReLens AI is
            entitled to temporarily suspend or restrict your access to the
            Service, after reasonable notice if feasible, and/or terminate the
            contract for cause pursuant to Section 7.3 below.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            4. Intellectual Property and Data
          </h3>

          <p>
            <strong>4.1 Service IP:</strong> All intellectual property rights in
            the ReLens AI Service (including the software, algorithms, models,
            and documentation) are and remain the exclusive property of ReLens
            AI. ReLens AI merely grants the Customer a limited, non-exclusive,
            non-transferable right to use the Service during the term of the
            contract for the Customer&rsquo;s internal business operations, in
            accordance with these Terms.
          </p>

          <p>
            <strong>4.2 Customer Data:</strong> The Customer retains all rights
            to the data, content, and materials that you upload or provide to
            ReLens AI (&ldquo;Customer Data&rdquo;). By providing Customer Data,
            you grant ReLens AI a license to process and use that data only to
            the extent necessary to perform the Service and fulfill our
            contractual obligations. ReLens AI will handle Customer Data in
            compliance with applicable data protection laws and our Privacy
            Policy. We will not use or share your Customer Data for any other
            purposes without your consent. Upon termination of the contract, and
            upon your request, we will delete or return your Customer Data that
            remains stored with us, except to the extent we are legally required
            to retain it.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            5. Fees, Payment Terms, and Set-off
          </h3>

          <p>
            <strong>5.1 Fees:</strong> The Customer shall pay the fees for the
            Service as agreed in the order or contract form (e.g. per the
            pricing models laid out on our website). All prices are understood
            to be net of applicable VAT (sales tax) which will be added as
            required by law.
          </p>

          <p>
            <strong>5.2 Invoicing, Payment, and Suspension of Service:</strong>{" "}
            ReLens AI will invoice fees per the agreed billing cycle (e.g.
            monthly or annually in advance). Invoices will be provided via our
            payment service provider or directly by us, depending on what was
            agreed upon. Payments are due within 14 days of the invoice date,
            unless a different period is specified in writing. Payment shall be
            made via the payment method agreed (e.g. bank transfer or credit
            card). If the Customer fails to pay on time, ReLens AI may charge
            statutory default interest as provided by Swiss law from the due
            date. ReLens AI also reserves the right, after giving a reminder and
            reasonable grace period, to suspend Service access until overdue
            amounts are paid.
          </p>

          <p>
            <strong>5.3 No Set-off Except for Uncontested Claims:</strong> The
            Customer may only set off counterclaims against ReLens AI&rsquo;s
            payment claims if those counterclaims are undisputed by ReLens AI or
            finally adjudicated by court. In other words, you cannot withhold or
            reduce payments by offsetting any claims you have against us, unless
            such claims have been acknowledged by ReLens AI or confirmed by a
            final legal judgment.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            6. Limitation of Liability
          </h3>

          <p>
            <strong>6.1 Unlimited Liability in Certain Cases:</strong> ReLens AI
            shall be liable without limit in cases of intentional misconduct or
            gross negligence by ReLens AI, its legal representatives, or agents.
            ReLens AI also bears full liability for any damages resulting from
            injury to life, body, or health caused by any negligence on our
            part.
          </p>

          <p>
            <strong>6.2 Liability for Ordinary Negligence:</strong> In cases of
            ordinary negligence, ReLens AI will only be liable for the breach of
            essential contractual obligations. Essential obligations are those
            duties which are fundamental to the contract and on whose
            fulfillment the Customer can rely.
          </p>

          <p>
            <strong>6.3 Exclusion of Other Negligence:</strong> ReLens AI shall
            not be liable for breaches of duty caused by ordinary negligence if
            those duties are not essential contractual obligations.
          </p>

          <p>
            <strong>6.4 Further Liability Limitations:</strong> To the extent
            ReLens AI&rsquo;s liability is limited or excluded under the
            provisions above, the same limitations or exclusions apply to the
            personal liability of ReLens AI&rsquo;s officers, employees, agents,
            and subcontractors.
          </p>

          <p>
            <strong>6.5 Indemnification by Customer:</strong> The Customer shall
            indemnify and hold ReLens AI harmless from any third-party claims
            arising out of the Customer&rsquo;s unlawful use of the Service or
            breach of these Terms, to the extent the Customer is responsible for
            such breach.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            7. Term and Termination
          </h3>

          <p>
            <strong>7.1 Contract Term:</strong> The contract for use of the
            ReLens AI Service begins when the Customer accepts these Terms and
            registers an account or otherwise enters into an agreement for the
            Service. The term of the contract is as specified in your order
            (e.g. a monthly or a 12-month subscription) or, if no specific term
            is agreed, it is for an indefinite period.
          </p>

          <p>
            <strong>7.2 Ordinary Termination:</strong> Either party may
            terminate:
          </p>
          <ul>
            <li>
              a monthly subscription at any time, effective at the end of the
              current payment cycle;
            </li>
            <li>
              a 12-month subscription by giving thirty (30) days&rsquo; notice,
              effective at the end of the 12-month cycle;
            </li>
            <li>
              an indefinite-term contract for convenience by giving thirty (30)
              days&rsquo; notice to the end of a calendar month (unless a
              different notice period is agreed elsewhere in writing).
            </li>
          </ul>
          <p>Notice of termination must be given in writing (e.g. by email).</p>

          <p>
            <strong>7.3 Termination for Cause:</strong> Either party may
            terminate the contract with immediate effect for cause if the legal
            requirements for such termination are met. Cause for ReLens AI
            includes, for example, the Customer&rsquo;s serious breach of these
            Terms (such as misuse of the Service or persistent non-payment) that
            is not cured after warning, or insolvency of the Customer.
          </p>

          <p>
            <strong>7.4 Effects of Termination:</strong> Upon termination or
            expiration of the contract, ReLens AI will deactivate the
            Customer&rsquo;s account and cease providing the Service to the
            Customer. The Customer should export or save any data they need
            prior to the effective termination date. ReLens AI may delete
            Customer Data associated with the account after a short retention
            period, except for data we must retain by law.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            8. Governing Law and Jurisdiction
          </h3>

          <p>
            <strong>8.1 Governing Law:</strong> This Agreement and any disputes
            arising out of it shall be governed by the laws of Switzerland,
            excluding its conflict-of-laws rules and excluding the United
            Nations Convention on Contracts for the International Sale of Goods
            (CISG).
          </p>

          <p>
            <strong>8.2 Jurisdiction:</strong> The exclusive place of
            jurisdiction for all disputes arising from or in connection with
            these Terms shall be Zug, Switzerland, provided that the Customer is
            a business entity. This jurisdiction clause does not limit either
            party&rsquo;s right to seek interim injunctive relief in any
            appropriate jurisdiction if necessary.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            9. Reference Use
          </h3>

          <p>
            ReLens AI may publicly refer to the Customer as a client for
            marketing and promotional purposes. In particular, ReLens AI is
            entitled to use the Customer&rsquo;s name, logo, and general
            branding in reference lists, on its website, in presentations, and
            in other marketing materials (both online and offline), provided
            this is done in a fact-based and appropriate manner. This right
            shall survive the termination of the contract, unless the Customer
            objects to such use in writing for legitimate reasons. ReLens AI
            will not disclose any confidential information of the Customer in
            this context.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            10. Final Provisions
          </h3>

          <p>
            <strong>10.1 Changes to Terms:</strong> ReLens AI reserves the right
            to modify or update these Terms for future transactions. For
            existing contracts, ReLens AI will notify the Customer in writing
            (e.g. email) of proposed changes at least 6 weeks in advance. The
            changes shall be deemed approved if the Customer does not object in
            writing within the notice period. If the Customer objects to the
            changes, each party has the right to terminate the contract by
            notice before the changes take effect.
          </p>

          <p>
            <strong>10.2 No Oral Agreements:</strong> These Terms, together with
            any individual order or contract document referencing them,
            constitute the entire agreement between ReLens AI and the Customer
            regarding the Service. There are no side agreements or
            representations other than those expressly contained in writing in
            this contract. Any amendments or additions to this contract must be
            made in writing (e.g. email confirmation), unless a stricter formal
            requirement is required by law.
          </p>

          <p>
            <strong>10.3 Severability:</strong> Should any provision of these
            Terms be or become invalid or unenforceable, the remainder of the
            provisions shall remain in effect. In place of the invalid
            provision, the parties agree to adopt a valid provision that most
            closely reflects the original economic intent of the invalid clause.
          </p>

          <p>
            <strong>10.4 Contract Languages:</strong> This English version of
            the Terms of Use is the binding version for the contractual
            relationship.
          </p>

          <p>
            <strong>10.5 Contact and Legal Notice:</strong> LFG Labs, c/o Sielva
            Management SA, Gubelstrasse 11, 6300 Zug, Switzerland, is the
            provider of the Service. For any questions or communications
            regarding these Terms, you may contact us at contact@relens.ai. Our
            Privacy Policy can be found on our website.
          </p>
        </div>
      </section>
    </div>
  );
}
