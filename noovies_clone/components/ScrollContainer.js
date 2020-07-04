import React, { useState } from "react";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";

const ScrollContainer = ({
  contentContainerStyle,
  loading,
  children,
  refreshFn,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    console.log(refreshFn);
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          enabled={false}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        ...contentContainerStyle,
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

export default ScrollContainer;
