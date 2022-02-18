/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import commonStyle, { text as commonText, color as commonColor } from '../components/common.js';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { staticState } from '../modules/store.js';

export default function ({ route, navigation }) {
  const { date } = route.params;
  const [list, setList] = useState([]);
  const getList = () => {
    axios.get(staticState.dbUrl + '/testResultData').then(({data}) => setList(data))
  }
  useEffect(() => getList(), []);

  const TestCard = ({ item }) => {
    const [detailView, setDetailView] = useState(false);
    const btnText = useMemo(() => detailView ? '상세정보 닫기' : '상세정보 열기', [detailView]);

    return (
      <>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.list}>
          {
            item.children.map((item, idx) => (
              <View key={idx} style={styles.listTextWrap1}>
                <View style={styles.listTextWrap2}>
                  <Text style={styles.listText1}>{item.name || '검사결과'}</Text>
                  <Text style={styles.listText2}>{item.resultText}</Text>
                </View>
                <View style={styles.progressWrap}>
                  <View style={[styles.progressBar, { width: item.result + '%' }]}></View>
                </View>
              </View>
            ))
          }
          {detailView && (
            <View style={styles.detailView}>
              <Text style={styles.listText1}>상세정보</Text>
              <Text style={styles.detailDescription}>아이의 연령을 검사로 대근육은 6세, 소근육은 5세로 나왔습니다.</Text>
            </View>
          )}
          <TouchableOpacity style={[commonStyle.button, styles.detailViewBtn]} onPress={
            () => {
              setDetailView(!detailView);
            }
          }>
            <Text style={[commonStyle.buttonText, styles.detailViewBtnText]}>
              { btnText }
            </Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }


  return (
    <>
      <View style={commonStyle.h1}>
        <TouchableOpacity style={commonStyle.backButton} onPress={() => navigation.goBack()}>
          <Ionicons style={commonStyle.backButtonText} name={commonText.backIcon} size={24} />
        </TouchableOpacity>
        <Text style={commonStyle.h1Text}>{ date } 검사결과</Text>
      </View>
      <ScrollView style={commonStyle.container}>
        { list.map((item, idx) => <TestCard key={idx} item={item} />) }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: commonColor.active,
    marginBottom: 5
  },
  listTextWrap1: {
    padding: 16,
    paddingBottom: 20,
  },
  listTextWrap2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  listText1: {
    fontWeight: '700',
    marginBottom: 4,
  },
  listText2: {
    color: commonColor.active
  },
  progressWrap: {
    width: '100%',
    height: 10,
    backgroundColor: '#eee'
  },
  progressBar: {
    height: '100%',
    backgroundColor: commonColor.active
  },
  detailView: {
    padding: 16,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  detailDescription: {
    fontSize: 13,
    color: '#333',
  },
  detailViewBtn: {
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 0,
    backgroundColor: commonColor.main
  },
  detailViewBtnText: {
    fontSize: 12,
  },
})