import {SafeAreaView, StyleSheet} from 'react-native';
import FeedList from "@/components/FeedIList";
import {colors} from "@/constants";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <FeedList posts={[

                {
                    id: 0,
                    userId: 0,
                    title: '더미 제목 입니다',
                    description: '더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다.',
                    createdAt: '2020.01.01',
                    author: {
                        id: 1,
                        nickname: '닉네임',
                    },
                    imageUris: [],
                    likes: [],
                    hasVote: false,
                    voteCount: 0,
                    commentCount: 0,
                    viewCount: 0,
                },
                {
                    id: 1,
                    userId: 0,
                    title: '더미 제목 입니다',
                    description: '더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다.',
                    createdAt: '',
                    author: {
                        id: 1,
                        nickname: '닉네임',
                    },
                    imageUris: [],
                    likes: [],
                    hasVote: false,
                    voteCount: 0,
                    commentCount: 0,
                    viewCount: 0,
                },
                {
                    id: 2,
                    userId: 0,
                    title: '더미 제목 입니다',
                    description: '더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다. 더미 내용 입니다.',
                    createdAt: '',
                    author: {
                        id: 1,
                        nickname: '닉네임',
                    },
                    imageUris: [],
                    likes: [],
                    hasVote: false,
                    voteCount: 0,
                    commentCount: 0,
                    viewCount: 0,
                },

            ]}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    }
})
