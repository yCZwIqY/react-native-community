import {SafeAreaView} from 'react-native';
import FeedItem from "@/components/FeedItem";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <FeedItem post={
                {
                    id: 0,
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
                }}/>
        </SafeAreaView>
    );
}
