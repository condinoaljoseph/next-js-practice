import React, { Fragment } from 'react';
import Link from 'next/link';

const index = () => {
  const pids = ['id1', 'id2', 'id3'];

  return (
    <Fragment>
      <h1>Blogs</h1>
      <ul>
        {pids.map(pid => (
          <li key={pid}>
            <Link href='/blog/posts/[pid]' as={`/posts/${pid}`}>
              <a>Post {pid}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default index;
