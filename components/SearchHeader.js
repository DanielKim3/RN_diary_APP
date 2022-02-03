import React from 'react';
import {Pressable, TextInput, StyleSheet, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

function SearchHeader() {
    const {width} = useWindowDimensions();
    return(
    <View style={[styles.block, {width: width - 32, height: 24}]}>
        <TextInput style={styles.input} placeholder='검색어를 입력하세요' autoFocus/>
        <Pressable>
            style
        </Pressable>
    </View>) //View를 사용하고 높이는 24, 너비는 전체너비에 32를 뺌. 32를 뺀 이유는 양 옆에 16씩 있기 때문.
}

const styles = StyleSheet.create({
    block: {
        color: 'white',
        backgroundColor: 'blue',
    },
})

export default SearchHeader;