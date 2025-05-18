import { useEnsurePageToTop } from '@/hooks';
import NormalPageBlockWrapper from '@/components/NormalPageBlockWrapper';
import AdsBanner from '@/components/Biz/AdsBanner';

import styles from './index.module.css';

export default function Terms() {
  useEnsurePageToTop();

  return (
    <NormalPageBlockWrapper>
      <AdsBanner />
      <div>
        <h1 className={styles.termsH1}>条款</h1>
        <div className={styles.termsContent}>
          <h2>1. Age Requirement and Legal Compliance</h2>
          <p>By accessing or using this Site, You affirm that:</p>
          <ul>
            <li>
              You are at least 18 years old (or the legal age of majority in
              your jurisdiction, whichever is greater).
            </li>
            <li>
              You have the legal right to access and view adult content in the
              area where you reside.
            </li>
            <li>
              You will not allow any minors to access this Site or view its
              content.
            </li>
            <li>
              You are fully responsible for ensuring that your actions comply
              with all applicable laws and regulations.
            </li>
          </ul>
          <p>
            If You do not meet these criteria, you must immediately exit this
            Site.
          </p>

          <h2>2. Content Disclaimer</h2>
          <p>
            The content available on this Site is intended for adult audiences
            only. You acknowledge and agree that:
          </p>
          <ul>
            <li>
              The content on this Site includes explicit adult material, which
              may be offensive, explicit, or unsuitable for some individuals.
            </li>
            <li>
              All models, actors, and performers featured on this Site are 18
              years of age or older at the time of filming.
            </li>
            <li>
              The Site does not host or produce any of the third-party content
              available but provides a platform for it. All content is provided
              "as is."
            </li>
            <li>
              The Website does not guarantee the legality, accuracy, or
              completeness of any content. You access and view all content at
              your own risk.
            </li>
          </ul>

          <h2>3. User Conduct</h2>

          <p>By using this Site, You agree to:</p>
          <ul>
            <li>
              Not use this Site for any unlawful purpose or in a manner that
              could damage or disrupt the Site's operation.
            </li>
            <li>
              Not download, share, or distribute any content from the Site in
              violation of copyright laws.
            </li>
            <li>
              Not engage in behavior that harasses, threatens, or infringes upon
              the rights of others.
            </li>
            <li>
              Not use automated systems to access, scrape, or download content
              from the Site without authorization.
            </li>
          </ul>

          <h2>4. Liability Disclaimer</h2>

          <p>
            To the fullest extent permitted by law, [Website Name] and its
            affiliates, directors, employees, agents, and licensors shall not be
            held liable for any direct, indirect, incidental, special,
            consequential, or punitive damages arising from:
          </p>
          <ul>
            <li>Your use or inability to use the Site.</li>
            <li>Any errors, omissions, or inaccuracies in the content.</li>
            <li>
              Any third-party content or services accessed through the Site.
            </li>
            <li>
              Any harm, loss, or damages incurred as a result of viewing,
              downloading, or sharing content.
            </li>
          </ul>

          <p>
            You agree that You are solely responsible for any risks associated
            with using this Site.
          </p>

          <h2>5. Third-Party Links and Content</h2>

          <p>
            The Site may contain links to third-party websites or services. We
            do not control or endorse any third-party websites or services and
            are not responsible for their content, privacy policies, or
            practices. Accessing third-party websites or services is at your own
            risk.
          </p>

          <h2>6. Modifications to the Agreement</h2>

          <p>
            We reserve the right to update or modify this Agreement at any time.
            Any changes will be posted on this page with the updated effective
            date. By continuing to use the Site after such changes, You agree to
            be bound by the updated Agreement.
          </p>
        </div>
      </div>
    </NormalPageBlockWrapper>
  );
}
