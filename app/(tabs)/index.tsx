import {Pressable, SafeAreaView, StyleSheet} from 'react-native';
import FeedList from "@/components/FeedIList";
import {colors} from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import {router} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
    const {auth} = useAuth();

    console.log(auth.id)
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
            {auth.id && (
                <Pressable style={styles.writeButton}
                           onPress={() => router.push('/post/write')}>
                    <Ionicons name={'pencil'} size={32} color={colors.WHITE}/>
                </Pressable>
            )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    writeButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: colors.ORANGE_600,
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.BLACK,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 2,
    }
})
