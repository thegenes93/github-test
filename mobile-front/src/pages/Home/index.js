import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import api from '../../services/api'

import { Feather } from "@expo/vector-icons";

import styles from './styles'

export default function Home() {

    const [data, setData] = useState([])
    const [sinces, setSinces] = useState(0)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    async function navigateToDetail(users) {
        try {
            const res = await api.get(`users/${users}/details`)
            navigation.navigate('Detail', { user: res.data })
        } catch (err) {
            alert("User not found")
        }
    }

    async function loadList() {

        if (loading) {
            return;
        }
        if (sinces > 0 && data.length == sinces) {
            return;
        }

        setLoading(true)
        try {
            const res = await api.get(`users`, {
                params: {
                    since: sinces
                }
            })
            setData([...data, ...res.data])
            setSinces(res.headers['x-total-count'])
            setLoading(false)
        } catch (err) {
            alert('Error loading')
        }
    }

    useEffect(() => {
        loadList()
    }, [])

    return (
        <View behavior="padding" style={styles.container}>
            <Text style={styles.headerText}>Test GitHub</Text>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={data => String(data.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadList}
                ondEndReachedThreshold={0.2}
                renderItem={({ item: data }) => (
                    <View style={styles.data}>
                        <Text style={styles.dataProperty}>ID:</Text>
                        <Text style={styles.dataValue}>{data.id}</Text>
                        <Text style={styles.dataProperty}>login:</Text>
                        <Text style={styles.dataValue}>{data.login}</Text>
                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(data.login)} >
                            <Text style={styles.detailsButtonText}>Detail user</Text>
                            <Feather name="search" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}