import React from "react";
import { useState } from "react";
import ListView from "../components/list-view/ListView";
import CardView from "../components/card-view/CardView";

import Layout from "../layout/Layout";

const Home = () => {
  const [isListView, setIsListView] = useState(true);
  return (
    <Layout isListView={isListView} setIsListView={setIsListView}>
      {isListView ? <ListView /> : <CardView />}
    </Layout>
  );
};

export default Home;
