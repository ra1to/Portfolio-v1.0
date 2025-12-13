// components/ZenList.tsx
import { useEffect, useState } from 'react';
import ConvertDate from './ConvertDate';

interface ZennItem {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  enclosure?: {
    link: string;
  };
}

interface RssResponse {
  status: string;
  items: ZennItem[];
}

export const ZenList = () => {
  const [posts, setPosts] = useState<ZennItem[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const userId = 'ra1to';
      const rssUrl = `https://zenn.dev/${userId}/feed`;
      const apiEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

      try {
        const res = await fetch(apiEndpoint);
        const data: RssResponse = await res.json();
        if (data.status === 'ok') {
          setPosts(data.items.slice(0, 6));
        }
      } catch (error) {
        console.error("Zenn取得エラー", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl font-bold text-[#3EA8FF]">Zenn</h2>
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const imageUrl = post.thumbnail || post.enclosure?.link;

          return (
            <li key={post.link} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
                <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#3EA8FF] text-white font-bold text-xl">
                      Zenn
                    </div>
                  )}
                </div>
                <div className="p-5 bg-gray-100/90 backdrop-blur-xl border-t border-white/50">
                  <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{post.title}</h3>
                  <div className="text-sm">
                    <ConvertDate convertDate={post.pubDate} className="text-gray-700" />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};