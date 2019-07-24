import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';

import api from '../../../services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');

  const ref = useRef();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      setFile(defaultValue.id);
      setPreview(defaultValue.url);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    console.tron.log(preview);

    setPreview(url);
    setFile(id);
  }

  return (
    <Container preview={preview ? 1 : 0}>
      <label htmlFor="banner">
        <div>
          <MdPhotoCamera size={64} color="#666" />
          <span>Select image</span>
        </div>

        {preview && <img src={preview} alt="" />}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
