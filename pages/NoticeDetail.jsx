/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CommonStyle, { text as CommonText} from '../components/Common.js';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function ({ navigation, route }) {
  const id = route.params.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8888/notice?id=' + id).then(
      ({ data }) => setData(data)
    )
  }, []);

  return (
    <>
      <View style={CommonStyle.h1}>
        <TouchableOpacity style={CommonStyle.backButton} onPress={() => navigation.goBack()}>
          <Ionicons style={CommonStyle.backButtonText} name={CommonText.backIcon} size={24} />
        </TouchableOpacity>
        <Text style={CommonStyle.h1Text}>공지사항 상세보기</Text>
      </View>
      <ScrollView style={CommonStyle.container}>
        <Text>제목 : {data?.title}</Text>
        <Text>내용 : {data?.contents}</Text>
        <Text>작성자 : {data?.writerName}</Text>
        <Text>작성일 : {data?.writeDT}</Text>
      </ScrollView>
    </>
  )
}