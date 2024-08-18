import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import LoadMoreBtn from './LoadMoreBtn';
import ImageModal from './ImageModal';
import { fetchImages } from './api';
import toast, { Toaster } from 'react-hot-toast';
import styles from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query === '') return;

    const fetchGallery = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(error.message);
        toast.error('Failed to fetch images.');
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMoreImages} />}
      {showModal && (
        <ImageModal
          isOpen={showModal}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
      <Toaster />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default App;
