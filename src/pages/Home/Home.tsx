/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Icon from '../../static/images/node.svg';
import Header from '../../components/Header';
import ProductList from './components/ProductList';
import ProductDialog from './components/ProductDialog';
import AddProductButton from './components/AddProductButton';

import * as styles from './Home.styles';

const Home: React.FC = () => (
  <>
    <Header>
      <styles.Actions>
        <styles.Icon>
          <styles.HomeHeaderIcon src={Icon} />
          <styles.IconTxt>
            Product Project
          </styles.IconTxt>
        </styles.Icon>
        <ProductDialog
          DialogButton={AddProductButton}
          actionName="Adicionar Produto"
          title="Novo Produto"
          DialogButtonIsAComponent={true}
        />
      </styles.Actions>
    </Header>
    <styles.Wrapper>
      <styles.Content>
        <ProductList />
      </styles.Content>
    </styles.Wrapper>
  </>
);

export default Home;
