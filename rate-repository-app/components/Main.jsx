import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch} from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
            <RepositoryList />
        </Route>
        <Route path='/login'>
            <SignIn />
        </Route>  
      </Switch>
    </View>
  );
};

export default Main;