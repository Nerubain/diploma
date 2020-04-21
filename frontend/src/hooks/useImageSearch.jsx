/* eslint-disable camelcase */
import { useState, useCallback, useEffect } from 'react';

import photosApi from '../assets/api/images';

const size = '/400/500';

export default function useImageSearch(page) {
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [images, setImages] = useState([]);

  const replaceImage = (i) => {
    const { download_url, id } = i;
    const position = `/${id}/`.length === 5 ? 4 : 5;
    const src = download_url.substring(0, download_url.lastIndexOf(`/${i.id}/`) + position) + size;
    return { initialImage: download_url, replaced: src };
  };
  const checkImage = ({ replaced }) =>
    new Promise((res) => {
      const img = new Image();
      img.onload = () => res({ path: replaced, status: 'ok' });
      img.onerror = () => res({ path: replaced, status: 'error' });

      img.src = replaced;
    });

  const getImages = useCallback(async () => {
    setLoadError(false);
    setLoading(true);
    try {
      const response = await photosApi.getPhotos(page);
      const newImages = response.data.map(replaceImage);
      await Promise.all(newImages.map(checkImage));
      setImages((prev) => [...prev, ...newImages]);
      setLoading(false);
      setHasMore(response.data.length > 0);
    } catch (error) {
      setLoadError(error);
    }
  }, [page]);

  useEffect(() => {
    getImages();
  }, [getImages, page]);

  return { images, loading, loadError, hasMore };
}
