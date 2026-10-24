import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from './api/unsplash';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const hasMore = !error && images.length > 0 && page < totalPages;

  useEffect(() => {
    if (!query) return;

    let ignore = false;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        if (ignore) return;
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        if (!ignore) setError(true);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    getImages();

    return () => {
      ignore = true;
    };
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query && page === 1) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <main>
        {error ? (
          <ErrorMessage />
        ) : (
          <ImageGallery images={images} onImageClick={setSelectedImage} />
        )}
        {isLoading && <Loader />}
        {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      </main>
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
