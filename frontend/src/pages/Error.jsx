import React, { useState } from 'react';
import io from 'socket.io-client';
import { Input } from 'semantic-ui-react';

import Layout from '@components/Layout';

export default function Error() {
  const socket = io('http://localhost:4000');
  const [data, setUser] = useState(null);

  const onChange = ({ target, preventDefault }) => {
    console.log(target.files[0]);

    const reader = new FileReader();
    const file = target.files[0];

    reader.onloadend = () => {
      setUser({ image: reader.result, file });
    };
    reader.readAsDataURL(file);
    socket.emit('image', data);
  };
  console.log(data);
  return (
    <Layout>
      {}
      <Input type="file" onChange={onChange} />
    </Layout>
  );
}
