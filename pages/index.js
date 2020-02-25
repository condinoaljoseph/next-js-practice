import Link from 'next/link';
import Router from 'next/router';

export default function Index() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        {/* <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li> */}
      </ul>
      <button onClick={() => Router.push('/about')}>Go to about</button>
      <p>Hello Next.js</p>
    </div>
  );
}
