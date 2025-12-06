import {ZenList} from './BlogComponents/ZenList';
import {NoteList} from './BlogComponents/NoteList';

const BlogPage = () => {
    return (
    <div>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">個人の呟き</h2>
    </div>
        <ZenList />
        <NoteList />
    </div>
 );
}

export default BlogPage;