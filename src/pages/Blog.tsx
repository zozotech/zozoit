import React from 'react';
import { motion } from 'motion/react';
import BlogPreview from '../sections/BlogPreview';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* <div className="max-w-3xl mb-20">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Our Blog</span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mt-4 mb-8">
            Insights & <span className="text-gradient">Updates</span>.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Stay informed with the latest trends, tips, and news from the world of digital technology and marketing.
          </p>
        </div> */}
<div className="flex flex-col md:flex-row md:items-end md:justify-between max-w-4xl mb-20 gap-6">
  
  <div>
    <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
      Our Blog
    </span>

    <h1 className="text-5xl md:text-7xl font-display font-extrabold mt-4 mb-6">
      Insights & <span className="text-gradient">Updates</span>.
    </h1>

    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
      Stay informed with the latest trends, tips, and news from the world of digital technology and marketing.
    </p>
  </div>


  <Link
    to="/create-blog"
    className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-bold rounded-xl hover:scale-105 transition-all"
  >
    <Plus size={18} />
    New Blog Post
  </Link>

</div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 space-y-12">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-[40px] overflow-hidden group"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 px-6 py-2 bg-brand-primary text-white text-sm font-bold rounded-full uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-10 md:p-12">
                  <div className="flex items-center gap-6 text-slate-500 text-sm mb-6">
                    <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-white font-bold text-lg group-hover:gap-4 transition-all">
                    Read Full Article <ArrowRight size={20} className="text-brand-primary" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="lg:w-1/3 space-y-12">
            <div className="glass p-8 rounded-3xl">
              <h4 className="text-white font-bold mb-6 text-xl">Search</h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-brand-primary"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              </div>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h4 className="text-white font-bold mb-6 text-xl">Categories</h4>
              <ul className="space-y-4">
                {['Technology', 'Marketing', 'Design', 'Business', 'Agency News'].map((cat) => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center text-slate-400 hover:text-brand-primary transition-colors">
                      <span>{cat}</span>
                      <span className="text-xs px-2 py-1 bg-white/5 rounded-md">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h4 className="text-white font-bold mb-6 text-xl">Recent Posts</h4>
              <div className="space-y-6">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm line-clamp-2 group-hover:text-brand-primary transition-colors">{post.title}</h5>
                      <p className="text-slate-500 text-xs mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
