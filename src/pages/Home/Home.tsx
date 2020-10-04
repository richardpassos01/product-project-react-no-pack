/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Icon from '../../static/images/node.svg';
import Header from '../../components/Header';
import * as styles from './Home.styles';
import ProductList from './components/ProductList';
import ProductDialog from './components/ProductDialog';
import AddProductButton from './components/AddProductButton';

const Home: React.FC = () => (
  <>
    <Header>
      <styles.Actions>
        <styles.Icon>
          <img src={Icon} />
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
