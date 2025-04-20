import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet} from "react-native";
import FeedItem from "@/components/FeedItem";
import {colors} from "@/constants";
import useGetInfinitePost from "@/hooks/queries/useGetInfinitePost";
import {useScrollToTop} from "@react-navigation/native";


const FeedList = () => {
    const {data: posts, fetchNextPage, hasNextPage, isFetchingNextPage, refetch} = useGetInfinitePost();
    const [isRefreshing, setIsRefreshing] = useState(false)
    const ref = useRef<FlatList | null>(null)

    useScrollToTop(ref)
    const handleEndReached = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await refetch()
        setIsRefreshing(false)
    }

    return (
        <FlatList ref={ref}
                  data={posts?.pages.flat()}
                  renderItem={({item}) => <FeedItem post={item}/>}
                  contentContainerStyle={styles.contentContainer}
                  keyExtractor={(item) => String(item.id)}
                  onEndReached={handleEndReached}
                  onEndReachedThreshold={0.5}
                  refreshing={isRefreshing}
                  onRefresh={handleRefresh}
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
