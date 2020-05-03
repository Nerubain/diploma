/* eslint-disable camelcase */
import { useState, useCallback, useEffect } from 'react';

import photosApi from '@utils/api/images';
import preloadImages from '@utils/functions/preloadImages';

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
    return { fullImage: download_url, image: src };
  };

  const getImages = useCallback(async () => {
    setLoadError(false);
    setLoading(true);
    try {
      const response = await photosApi.getPhotos(page);
      const newImages = response.data.map(replaceImage);
      await Promise.all(newImages.map(preloadImages));
      return { response, newImages };
    } catch (error) {
      setLoadError(error);
    }
  }, [page]);

  useEffect(() => {
    let isSubscribe = true;
    const preload = async () => {
      const result = await getImages();
      if (isSubscribe) {
        setImages((prev) => [...prev, ...result.newImages]);
        setLoading(false);
        setHasMore(result.response.data.length > 0);
      }
    };
    preload();
    return () => {
      isSubscribe = false;
    };
  }, [getImages]);

  return { images, loading, loadError, hasMore };
}
