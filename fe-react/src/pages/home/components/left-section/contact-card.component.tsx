/* eslint-disable react/no-unescaped-entities */
import { FC, ReactElement } from 'react';
import { ReactComponent as WhatsAppIcon } from '../../../../assets/icons8-whatsapp.svg';
import HuCard from '../../../../components/hu-card/hu-card.component';

const socialLinks = [
  {
    key: 0,
    text: 'GitHub',
    to: 'https://github.com/lfelipemarin'
  },
  {
    key: 1,
    text: 'LinkedIn',
    to: 'https://www.linkedin.com/in/fmv85'
  },
  {
    key: 2,
    text: 'Repo for this Project',
    to: 'https://github.com/lfelipemarin/hooked-up'
  }
];

const renderSocialLinks = (): ReactElement[] =>
  socialLinks.map(({ key, text, to }) => (
    <li key={key}>
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="tw-text-xs tw-font-semibold tw-text-blue-600 hover:tw-underline"
      >
        {text}
      </a>
    </li>
  ));

const CardBody: FC = () => (
  <main className="hu-contact-card-main tw-p-3 tw-py-4">
    <div className="tw-mb-4">
      <h2 className="tw-text-lg tw-font-bold">Contact Information</h2>
      <p className="tw-text-sm">
        Feel free to connect with me on social media or send me a message on
        WhatsApp!
      </p>
    </div>
    <ul className="tw-flex tw-flex-col tw-gap-3">{renderSocialLinks()}</ul>
  </main>
);

const CardFooter: FC = () => (
  <footer className="hu-contact-card-footer tw-p-3 tw-text-center">
    <a
      href="https://wa.me/+573014360634"
      target="_blank"
      rel="noopener noreferrer"
      className="tw-flex tw-items-center tw-justify-center tw-text-sm tw-font-medium tw-text-white tw-bg-green-500 hover:tw-bg-green-600 tw-rounded tw-px-4 tw-py-2"
    >
      <WhatsAppIcon className="tw-w-5 tw-h-5 tw-mr-2" />
      Contact Me on WhatsApp
    </a>
  </footer>
);

const ContactCard: FC = () => (
  <HuCard
    cardBody={<CardBody />}
    cardFooter={<CardFooter />}
    className="tw-mt-2"
  />
);

export default ContactCard;
