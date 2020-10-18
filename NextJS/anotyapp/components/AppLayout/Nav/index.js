import Link from 'next/link';

import { colors } from 'styles/theme';

import { IconUser, IconNews, IconWrite } from 'components/Icons';

export default function Nav() {
  return (
    <>
      <nav>
        <Link href=''>
          <a>
            <IconUser width={32} height={32} fill='#fff' stroke={colors.primary} />
          </a>
        </Link>
        <Link href='compose/treasure/new'>
          <a>
            <IconWrite width={32} height={32} fill='#fff' stroke={colors.primary} />
          </a>
        </Link>
        <Link href='/init'>
          <a>
            <IconNews width={32} height={32} fill='#fff' stroke={colors.primary} />
          </a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          background: white;

          box-shadow: 0px 13px 10px 10px #8a8a8afc;
          backdrop-filter: blur(10px);
          width: 100%;
          height: 50px;
          display: flex;
          bottom: -1px;
          position: sticky;
          border-top: 1px solid #ddd;
          border-radius: 8px 8px 0px 0px;
        }

        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 100%;
          justify-content: space-around;
        }

        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }
        nav a:hover > :global(svg) {
          stroke: ${colors.primary};
        }
      `}</style>
    </>
  );
}
