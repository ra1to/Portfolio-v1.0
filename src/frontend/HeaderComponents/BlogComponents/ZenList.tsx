// components/ZenList.tsx
import { useEffect, useState } from 'react';
import ConvertDate from './ConvertDate';

interface ZennItem {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  // ▼ Zennの画像はここに入ることが多いので追加
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
      const userId = 'ra1to'; // あなたのID
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
        {/* ▼ ここにロゴや文字をしっかり表示 */}
        <h2 className="text-2xl font-bold text-[#3EA8FF]">Zenn</h2>
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          // ▼ 画像URLを決定するロジック：thumbnailがなければenclosureを使う
          const imageUrl = post.thumbnail || post.enclosure?.link;

          return (
            <li key={post.link} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline group">
                <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    // 本当に画像がない時だけダミーを表示
                    <div className="w-full h-full flex items-center justify-center bg-[#3EA8FF] text-white font-bold text-xl">
                      Zenn
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <div className="text-sm text-gray-500">
                    <ConvertDate convertDate={post.pubDate} />
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