/* 
  Random user profile API: https://randomuser.me/api will return one random user on call.
  Call the API mentioned above on page load to return 3 users on initial load and display it on UI.
  Params: "results" query parameter can be passed to the API to set number of results to be returned.

  What to Display on UI?
  While the API is loading: show a text "loading..."

  Create a functional component called UserCard which will show user details.
  Once the data is fetched, show the user's full name (title first last) and user's picture on UI.

  Use typescript to check data types for user name and picture.

  ****Make any changes to this boilerplate that you want to.*****
  ****The included code is only provided as a convienence.****

  Bonus 1: Implement Load more user feature.
  The API: https://randomuser.me/api?page=2 will return user from page 2. 
  You can use the query parameter "page" to load a user from a new page.
  Add a button with text "Load more user" which should add the next user to the existing list.

  And show list of all user
  
  Bonus 2: Make UserCard component reusable 
  so that we can pass it dynamic props and also modify it's style.

  Time Limit: 30 - 45 Minutes
*/

import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './screens/Home';
import Reducer from './store/reducer';

const store = createStore(Reducer);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center"
  }
});

function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}

export default App
