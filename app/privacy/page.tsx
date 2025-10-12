import { Badge } from "../components/Badge";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy - ReLens AI | Data Protection & Privacy",
  description:
    "Learn how ReLens AI protects your data and privacy. Our comprehensive privacy policy explains data collection, usage, and your rights under GDPR and Swiss data protection laws.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "privacy rights",
    "ReLens AI privacy",
    "data security",
    "user privacy",
    "data processing",
  ],
  openGraph: {
    title: "Privacy Policy - ReLens AI | Data Protection & Privacy",
    description:
      "Learn how ReLens AI protects your data and privacy. Our comprehensive privacy policy explains data collection, usage, and your rights under GDPR and Swiss data protection laws.",
    url: `${siteConfig.url}/privacy`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/preview.png`,
        width: 1200,
        height: 630,
        alt: "ReLens AI Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - ReLens AI | Data Protection & Privacy",
    description:
      "Learn how ReLens AI protects your data and privacy. Our comprehensive privacy policy explains data collection, usage, and your rights under GDPR and Swiss data protection laws.",
    images: [`${siteConfig.url}/images/preview.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function Privacy() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="privacy-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Privacy Policy</Badge>
        <h1
          id="privacy-overview"
          className="mt-2 inline-block bg-gradient-to-br from-text to-text-secondary bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>Data Protection & Privacy Policy</Balancer>
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
          <p>
            We, LFG Labs (&ldquo;ReLens AI/we&rdquo;), welcome your use of our
            website and web app (&ldquo;Our Services&rdquo;). In the following
            provisions, we inform you about the type, scope, and purposes of the
            collection and use of your personal data when using our services.
            Personal data refers to any information that relates to an
            identified or identifiable natural person. This includes, in
            particular, your name and email address.
          </p>
          <p>
            In addition to the General Data Protection Regulation (GDPR), we
            also comply with the Swiss Federal Act on Data Protection (nFADP),
            as applicable.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            1. Provider
          </h3>
          <p>
            The provider and responsible party for data processing
            (&ldquo;controller&rdquo; under the GDPR and &ldquo;responsible
            party&rdquo; under the Swiss nFADP) is:
          </p>
          <div className="p-4">
            <p className="mb-2">
              <strong>LFG Labs</strong>
            </p>
            <p>c/o Sielva Management SA</p>
            <p>Gubelstrasse 11</p>
            <p>6300 Zug, Switzerland</p>
            <p>CHE-392.547.093 MWST</p>
            <p>Email: contact@relens.ai</p>
          </div>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            2. Data Processing to Enable Use
          </h3>
          <p>
            Whenever you access the content of our services, connection data is
            transmitted to our web server. This connection data includes:
          </p>
          <ul>
            <li>The IP address of the user,</li>
            <li>The date and time of the request,</li>
            <li>The referring URL,</li>
            <li>
              Device numbers such as UDID (Unique Device Identifier) and
              comparable device numbers, device information (e.g., device type),
            </li>
            <li>Browser type / browser version.</li>
          </ul>
          <p>
            This connection data is not used to infer the identity of the user
            or merged with data from other sources, but rather serves to provide
            the website. The legal basis for processing your data is Art. 6
            para. 1 sentence 1 lit. f GDPR.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            3. Data Processing upon Request
          </h3>
          <p>
            The use of our landing page is generally possible without providing
            personal data. You are not obliged to visit our website or provide
            personal data. However, for using the web app and contacting us,
            certain data needs to be provided.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-text-secondary-dark dark:text-gray-50">
            3.1. Demo Booking and Contact
          </h3>
          <p>
            For booking demos and contacting us, we collect the following
            personal data:
          </p>
          <ul>
            <li>
              <strong>Email address:</strong> for communication and follow-up.
            </li>
            <li>
              <strong>Name:</strong> for personalized communication.
            </li>
            <li>
              <strong>Company information:</strong> for understanding your
              business needs.
            </li>
          </ul>
          <p>
            <strong>Purpose:</strong> Enabling communication and providing our
            services.
            <br />
            <strong>Legal basis:</strong> Art. 6 para. 1 sentence 1 lit. b GDPR
            (contract fulfillment) and Art. 6 para. 1 sentence 1 lit. f GDPR
            (legitimate interest in providing the service).
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            4. Data Processing for Service Optimization
          </h3>
          <p>
            Our services use cookies to ensure functionality and analyze user
            behavior. Some cookies are necessary for website functionality
            (e.g., session cookies), while others are used for analysis. You can
            manage or disable cookies via your browser settings, but this may
            limit the website&rsquo;s functionality.
          </p>
          <p>
            The storage of necessary and functional cookies is based on Art. 6
            para. 1 lit. f GDPR, while all others are based on your consent
            under Art. 6 para. 1 lit. a GDPR. Where applicable, consent for
            cookies is obtained in accordance with both the GDPR and the Swiss
            nFADP. You can adjust your cookie preferences at any time via the
            cookie banner and may revoke this consent at any time.
          </p>
          <p>
            For additional privacy, you can use browser plugins like AdBlock or
            Ghostery to prevent tracking.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-text-secondary-dark dark:text-gray-50">
            4.1. PostHog Analytics
          </h3>
          <p>
            Our website uses &ldquo;PostHog&rdquo; to analyze website usage.
            Data is stored in pseudonymized user profiles, using cookies.
            PostHog collects information about page views, user interactions,
            and technical information about your device and browser.
          </p>
          <p>
            PostHog uses this data to evaluate website usage and create reports.
            Data is not linked to personal data without your consent. For more
            information, see:{" "}
            <a
              href="https://posthog.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              PostHog Privacy Policy
            </a>
            .
          </p>
          <p>
            The legal basis for data processing is your consent under Art. 6
            para. 1 lit. a GDPR, which you provide via our cookie banner.
            PostHog processes data in accordance with GDPR requirements and
            maintains appropriate data protection standards.
          </p>
          <p>
            Data collected by PostHog may be processed on servers located
            outside Switzerland or the EU. In such cases, we ensure appropriate
            safeguards, such as Standard Contractual Clauses (SCCs), are in
            place.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            5. Data Transfer
          </h3>
          <p>
            We only transfer your data when it is necessary for the provision of
            our services, you have consented, a legal obligation exists, or
            another legal basis applies.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-text-secondary-dark dark:text-gray-50">
            5.1. Data Transfer to Non-EU Countries
          </h3>
          <p>
            Your data may also be transferred to recipients outside Switzerland
            or the EU. Where no adequacy decision exists, we rely primarily on
            Standard Contractual Clauses (SCCs). In limited cases, data may be
            transferred based on your explicit consent or other derogations
            under Art. 49 GDPR.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            6. Storage Duration
          </h3>
          <p>
            We store your data only as long as necessary to fulfill the purposes
            for which it was processed, or until legal retention periods expire.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-text-secondary-dark dark:text-gray-50">
            6.1. Security Measures
          </h3>
          <p>
            We protect your data with technical and organizational measures
            against unauthorized access and loss.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            7. Your Rights
          </h3>
          <p>
            You have the right to access, correct, delete, restrict processing,
            and object to the processing of your personal data. You also have
            the right to data portability and to lodge a complaint with a
            supervisory authority. Further information can be found under
            applicable legal provisions.
          </p>
          <p>
            If you believe your data has been unlawfully processed, you have the
            right to lodge a complaint with the Swiss Federal Data Protection
            and Information Commissioner (FDPIC) or a relevant EU supervisory
            authority if you reside in the EU.
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            8. Right to Object
          </h3>
          <p>
            You can object to the processing of your data at any time,
            particularly for processing based on legitimate interests (Art. 6
            para. 1 lit. f GDPR).
          </p>

          <h3 className="mb-6 mt-12 text-xl font-bold text-text-secondary-dark dark:text-gray-50">
            9. Changes to the Privacy Policy
          </h3>
          <p>
            We will update this privacy policy as necessary. The current version
            is always available on our website. We will notify you of
            significant changes.
          </p>
        </div>
      </section>
    </div>
  );
}
