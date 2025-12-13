// components/NoteList.tsx
import { useEffect, useState } from 'react';
import ConvertDate from './ConvertDate';

interface NoteItem {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  content?: string;
}

interface RssResponse {
  status: string;
  items: NoteItem[];
}

export const NoteList = () => {
  const [posts, setPosts] = useState<NoteItem[]>([]);

  useEffect(() => {
    const fetchNote = async () => {
      const noteId = 'run_dev'; 
      const rssUrl = `https://note.com/${noteId}/rss`;
      const apiEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

      try {
        const res = await fetch(apiEndpoint);
        const data: RssResponse = await res.json();
        
        if (data.status === 'ok') {
          const articles = data.items.slice(0, 6);
          let thumbnailMap: Record<string, string> = {};
          try {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;
            const proxyRes = await fetch(proxyUrl);
            const proxyData = await proxyRes.json();
            const rssText = proxyData.contents;
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(rssText, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');
            
            items.forEach((item) => {
              const link = item.querySelector('link')?.textContent || '';
              const mediaElements = item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'thumbnail');
              if (mediaElements.length > 0) {
                const thumbnailUrl = mediaElements[0].getAttribute('url') || mediaElements[0].textContent || '';
                if (thumbnailUrl) {
                  thumbnailMap[link] = thumbnailUrl;
                }
              }
            });
          } catch (rssError) {
            console.warn('画像取得エラー（記事は表示されます）:', rssError);
          }
          
          const postsWithImages = articles.map((item) => ({
            ...item,
            thumbnail: thumbnailMap[item.link] || item.thumbnail || '',
          }));
          
          setPosts(postsWithImages);
        }
      } catch (error) {
        console.error("Note記事の取得に失敗しました", error);
      }
    };

    fetchNote();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl font-bold text-white">Note</h2>
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li key={post.link} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full no-underline"
            >
              <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                {post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#41C9B4] text-white font-bold text-xl">
                    Note
                  </div>
                )}
              </div>
              
              <div className="p-5 bg-gray-100/90 backdrop-blur-xl border-t border-white/50">
                <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="text-sm">
                  <ConvertDate convertDate={post.pubDate} className="text-gray-700" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};