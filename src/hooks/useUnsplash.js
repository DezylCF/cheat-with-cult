import { useState, useEffect } from 'react';
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'H3x-zXELAvDnFJUNsPC3JQ1AZpQGBgP39N79huSntrs';

const useUnsplash = (queries) => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const imagePromises = queries.map(query =>
          axios.get('https://api.unsplash.com/search/photos', {
            params: { query, client_id: UNSPLASH_ACCESS_KEY },
          })
        );
        const responses = await Promise.all(imagePromises);
        const imagesData = responses.reduce((acc, response, index) => {
          acc[queries[index]] = response.data.urls.small;
          return acc;
        }, {});
        setImages(imagesData);
      } catch (error) {
        console.error('Error fetching images from Unsplash:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [queries]);

  return { images, loading };
};

export default useUnsplash;
