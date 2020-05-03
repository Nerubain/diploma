import React from 'react';

import Layout from '@components/Layout';
import SubMenu from '@components/Board/SubMenu';
import ScrollContext from '@components/Board/ScrollContext';
import BoardContainer from '@components/Board/BoardContainer';

export default function Board() {
  return (
    <Layout isborder={true.toString()}>
      <SubMenu>asd</SubMenu>
      <ScrollContext>
        <BoardContainer />
      </ScrollContext>
    </Layout>
  );
}
