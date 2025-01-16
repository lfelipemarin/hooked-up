import { FC } from 'react';
import { TECH_INTERESTS } from '../../../../constants';
import HuCard from '../../../../components/hu-card/hu-card.component';
import { TechPlatform } from '../../../../constants/mock/tech';

// eslint-disable-next-line unicorn/no-array-reduce
const techsByCategory = [...TECH_INTERESTS].reduce<
  Record<string, TechPlatform[]>
>((accumulator, tech) => {
  if (!accumulator[tech.category]) {
    accumulator[tech.category] = [];
  }
  accumulator[tech.category].push(tech);
  return accumulator;
}, {});

const TechInterests: FC = () => (
  <div className="tw-p-0 tw-flex tw-flex-col tw-gap-5">
    {Object.keys(techsByCategory).map((category) => (
      <section key={category} className="tw-flex tw-flex-col tw-gap-1">
        <h2 className="tw-px-3">{category}</h2>
        {techsByCategory[category].map((tech) => (
          <a
            key={tech.id}
            href={tech.url}
            target="_blank"
            className="tw-flex tw-items-center hover:tw-bg-gray-200 tw-text-xs tw-px-4 tw-py-1 tw-gap-2"
            rel="noreferrer"
          >
            <div className="tw-flex tw-flex-col tw-gap-2 tw-grow">
              <div className="tw-flex tw-items-center tw-gap-2">
                <img src={tech.icon} alt={tech.name} className="tw-w-6" />
                <h3>{tech.name}</h3>
              </div>
              <p>{tech.description}</p>
            </div>
            <span className="tw-text-3xl tw-font-light">&#8250;</span>
          </a>
        ))}
      </section>
    ))}
  </div>
);

const CodingInterests: FC = () => (
  <HuCard
    className="tw-p-0"
    cardHeader={<h2 className="tw-p-2">Tech Trends</h2>}
    cardBody={<TechInterests />}
  />
);

export default CodingInterests;
