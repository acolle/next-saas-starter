import { getAllPosts } from "@/lib/blog/actions";
import { Badge } from "@/components/ui/badge";
import { siteInfo } from "@/lib/site-config";

export async function generateMetadata() {
  return {
    title: "Blog",
  };
}

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Blog for {siteInfo.name}
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Welcome to our blog! Here, you'll find a mix of insightful articles,
        tips, and discussions on topics we love. Whether you're into the latest
        trends, looking for advice, or just want an interesting read, there's
        something for you. So dive in, discover new ideas, and enjoy the
        journey!
      </p>

      {/* Index */}
      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img
                src={post.coverImage}
                alt=""
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.formattedDate}
                </time>
                <Badge>{post.category}</Badge>
              </div>
              <div className="group relative max-w-xl">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                <div className="relative flex items-center gap-x-4">
                  <img
                    src={post.author.picture}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
