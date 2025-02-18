import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import TitleInput from "@/components/TitleInput";
import DescriptionInput from "@/components/DescriptionInput";
import {StyleSheet, View} from "react-native";


interface FormValues {
    title: string;
    description: string;
}

const PostWriteScreen = () => {
    const postForm = useForm<FormValues>({
        defaultValues: {
            title: '',
            description: ''
        }
    })
    return (
      <View style={styles.container}>
          <FormProvider {...postForm}>
              <TitleInput/>
              <DescriptionInput/>
          </FormProvider>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
        gap: 16
    }
})

export default PostWriteScreen;
