import React from 'react';
import { useRouter } from 'next/router';

import { getPages } from '../../services';
import { PostCard, Pages, Loader } from '../../components';

const PagePost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Pages />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PagePost;


// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const pages = await getPage();
  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
