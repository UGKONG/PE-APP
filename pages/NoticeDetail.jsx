/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import commonStyle, { text as CommonText} from '../components/common.js';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { staticState } from '../modules/store.js';

export default function ({ navigation, route }) {
  const id = route.params.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(staticState.dbUrl + '/noticeList/' + id).then(
      ({ data }) => setData(data)
    )
  }, [id]);

  return (
    <>
      <View style={commonStyle.h1}>
        <TouchableOpacity style={commonStyle.backButton} onPress={() => navigation.goBack()}>
          <Ionicons style={commonStyle.backButtonText} name={CommonText.backIcon} size={24} />
        </TouchableOpacity>
        <Text style={commonStyle.h1Text}>공지사항 상세보기</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        <Text>제목 : {data?.title}</Text>
        <Text>내용 : {data?.contents}</Text>
        <Text>작성자 : {data?.writerName}</Text>
        <Text>작성일 : {data?.date}</Text>
      </ScrollView>
    </>
  )
}