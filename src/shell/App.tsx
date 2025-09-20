// src/shell/App.tsx

import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Button } from '../components/UI';

import Home from '../pages/Home';
import About from '../pages/About';
import Gpts from '../pages/Gpts';
import Articles from '../pages/Articles';
import Book from '../pages/Book';
import ViyaGita from '../pages/ViyaGita';
import Art from '../pages/Art';
import Community from '../pages/Community';
import Contact from '../pages/Contact';
import Membership from '../pages/Membership';

export default function App() {
  // List of page slugs used to generate navigation links
  const pages = [
    'about',
    'gpts',
    'articles',
    'book',
    'viyagita',
    'art',
    'community',
    'contact',
    'membership',
  ];

  // Capitalize the first letter of each slug for display
  const label = (slug: string) =>
    slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <Router>
      {/* Navigation bar */}
      <nav className="bg-saffron/80 border-b border-maroon/30 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-2xl font-extrabold text-maroon"
          >
            Ask Vedika
          </Link>
          <div className="flex items-center gap-4">
            {pages.map((slug) => (
              <NavLink
                key={slug}
                to={`/${slug}`}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-colors` +
                  (isActive
                    ? ' bg-maroon text-paper'
                    : ' text-maroon hover:bg-maroon/20')
                }
              >
                {label(slug)}
              </NavLink>
            ))}
            <Button>Ask Vedika</Button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gpts" element={<Gpts />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/book" element={<Book />} />
          <Route path="/viyagita" element={<ViyaGita />} />
          <Route path="/art" element={<Art />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-saffron/80 border-t border-maroon/30 text-maroon py-4 flex justify-center gap-6 text-sm">
        <a
          href="https://twitter.com/yourhandle"
          className="hover:text-royal hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://github.com/localdivinity-code"
          className="hover:text-royal hover:underline"
        >
          GitHub
        </a>
      </footer>
    </Router>
  );
}
