import React, {useEffect} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import TitleInput from "@/components/TitleInput";
import DescriptionInput from "@/components/DescriptionInput";
import {StyleSheet, View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import useCreatePost from "@/hooks/queries/useCreatePost";
import {ImageUri} from "@/types";
import {useNavigation} from "expo-router";
import CustomButton from "@/components/CustomButton";


interface FormValues {
    title: string;
    description: string;
    imageUris: ImageUri[];
}

const PostWriteScreen = () => {
    const navigation = useNavigation();
    const createPost = useCreatePost();
    const postForm = useForm<FormValues>({
        defaultValues: {
            title: '',
            description: '',
            imageUris:[]
        }
    })

    const onSubmit = (formValues: FormValues) => {
        createPost.mutate(formValues)
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <CustomButton label={'저장'}
                                             size={'medium'}
                                             variant={'standard'}
                                             onPress={postForm.handleSubmit(onSubmit)}/>
        })
    }, []);

    return (
      <KeyboardAwareScrollView style={styles.container}>
          <FormProvider {...postForm}>
              <TitleInput/>
              <DescriptionInput/>
          </FormProvider>
      </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
        gap: 16
    }
})

export default PostWriteScreen;
