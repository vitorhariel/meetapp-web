import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const user = useSelector(state => state.user.user);
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    if (e.target.files[0].size > 2048 * 16 * 10) {
      console.log(e.target.files[0].size);
      toast.error('File is too big. Max: 2 MB');
    } else {
      data.append('file', e.target.files[0]);

      const response = await api.post('avatar', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    }
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || `https://api.adorable.io/avatars/128/${user.id}`}
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
