import {SafeAreaView, Text} from 'react-native';
import CustomButton from "@/components/CustomButton";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Text>홈 스크린</Text>
            <CustomButton label={'button'} onPress={() => {}}/>
        </SafeAreaView>
    );
}
