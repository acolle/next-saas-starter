import { Metadata } from "next";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

import markdownStyles from "./markdown-styles.module.css";

import { getAllPosts, getPostBySlug } from "@/lib/blog/actions";

interface PostData {
  title: string;
  content: string;
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

//
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the post
export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Saas Starter Blog`;

  return {
    title,
    description: post.description,
  };
}

export default async function BlogPostPage(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await remark()
    .use(html)
    .process(post.content || "");
  const htmlContent = content.toString();

  const postData: PostData = {
    title: post.title,
    content: htmlContent,
  };

  return (
    <div className="text-base leading-7 text-gray-700">
      <p className="text-base font-semibold leading-7 text-primary-600">
        {post.category}
      </p>

      <h1 className="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {postData.title}
      </h1>
      <p className="text-base">Published on {post.formattedDate}</p>
      <figure className="mt-6">
        <img
          className="aspect-video rounded-xl bg-gray-50 object-cover"
          src={post.coverImage}
          alt=""
        />
      </figure>
      <p className="mt-6 text-xl leading-8">{post.description}</p>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </div>
  );
}
