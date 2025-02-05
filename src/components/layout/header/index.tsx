import style9 from 'style9';
import MetaCard from './metacard';
import { memo } from 'react';

interface PageHeadingProps {
  title: string;
  description?: string;
}

const styles = style9.create({
  wrapper: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '32px',
    paddingBottom: '24px',
    '@media screen and (min-width: 640px)': {
      paddingLeft: '48px',
      paddingRight: '48px',
      paddingTop: '28px'
    },
    '@media screen and (min-width: 840px)': {
      paddingTop: '20px'
    }
  },
  container: {
    maxWidth: '1280px',
    marginLeft: 0,
    '@media screen and (min-width: 1280px)': {
      marginRight: 'auto'
    }
  },
  h1: {
    marginTop: 0,
    color: 'var(--text-primary)',
    overflowWrap: 'break-word',
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '2.5rem'
  },
  description: {
    marginTop: '16px',
    marginBottom: '24px',
    color: 'var(--text-primary)',
    fontSize: 20,
    lineHeight: 1.8
  }
});

function Header({
  title,
  description
}: PageHeadingProps) {
  return (
    <div className={styles('wrapper')}>
      <div className={styles('container')}>
        <h1 className={styles('h1')}>
          {title}
        </h1>
        {description && (
          <p className={styles('description')}>
            {description}
          </p>
        )}
        <MetaCard />
      </div>
    </div>
  );
}

export default memo(Header);
