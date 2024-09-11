'use client';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import DocsIcon from '@/assets/images/icons/DocsIcon';
import HistoryIcon from '@/assets/images/icons/HistoryIcon';
import RestapiIcon from '@/assets/images/icons/RestapiIcon';
import GraphqlIcon from '@/assets/images/icons/GraphqlIcon';
import { ROUTES } from '@/utils/constants';
import Button from '../UI/Button/Button';

import style from './ClientTop.module.scss';

interface IProps {
  title: string;
  graphqlDocsOpeningToggler?: () => void;
  graphqlDocsIsOpen?: boolean;
}

function ClientTop({ title, graphqlDocsOpeningToggler, graphqlDocsIsOpen }: IProps): JSX.Element {
  const pathname = usePathname();

  return (
    <div className={style.top}>
      <div className={style.graphql_docs}>
        {pathname.startsWith(ROUTES.GRAPHQL) && (
          <Button
            className={clsx(style.button, graphqlDocsIsOpen === true && style.docs_open)}
            onClick={graphqlDocsOpeningToggler}
          >
            <DocsIcon className={style.icon} />
          </Button>
        )}
      </div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.links}>
        {pathname.startsWith(ROUTES.RESTAPI) && (
          <Button href={ROUTES.GRAPHQL} className={style.button}>
            <GraphqlIcon className={style.icon} />
          </Button>
        )}
        {pathname.startsWith(ROUTES.GRAPHQL) && (
          <Button href={ROUTES.RESTAPI} className={style.button}>
            <RestapiIcon className={style.icon} />
          </Button>
        )}
        <Button href={ROUTES.HISTORY} className={style.button}>
          <HistoryIcon className={style.icon} />
        </Button>
      </div>
    </div>
  );
}

export { ClientTop };