import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import {Post} from "@/types";
import FeedItem from "@/components/FeedItem";
import {colors} from "@/constants";

interface FeedListProps {
    posts: Post[]
}

const FeedList = ({posts}: FeedListProps) => {
    return (
        <FlatList data={posts}
                  renderItem={({item}) => <FeedItem post={item}/> }
                  contentContainerStyle={styles.contentContainer}
                  keyExtractor={(item) => String(item.id)}
        />
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 12,
        backgroundColor: colors.GRAY_200,
        gap: 12
    }
})

export default FeedList;
