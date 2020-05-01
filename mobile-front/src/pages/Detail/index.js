import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Moment from 'moment';

import api from '../../services/api';

import styles from './styles';


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const [repo, setRepo] = useState([])
    const [loading, setLoading] = useState(false)

    const data = route.params.user;


    async function loadList() {

        if (loading) {
            return;
        }
        setLoading(true)
        try {
            const res = await api.get(`users/${data.login}/repos`)
            setRepo([...res.data])
        } catch (err) {
            alert('Error loading repositories')
        }
    }

    useEffect(() => {
        loadList()
    }, [])


    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Detail: <Text style={styles.headerName}>{data.name}</Text> </Text>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.user}>
                <Text style={styles.userProperty}>ID: </Text>
                <Text style={styles.userValue}>{data.id}</Text>
                <Text style={styles.userProperty}>Login:</Text>
                <Text style={styles.userValue}>{data.login}</Text>
                <Text style={styles.userProperty}>URL perfil:</Text>
                <Text style={styles.userValue}>{data.url}</Text>
                <Text style={styles.userProperty}>Create Date:</Text>
                <Text style={styles.userValue}>{Moment(data.created_at).format('MMM Do YY')}</Text>
            </View >
                <Text style={styles.listText}>repositories</Text>
                <FlatList
                    style={styles.list}
                    data={repo}
                    keyExtractor={repo => String(repo.id)}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item: list }) => (
                        <View style={styles.data}>
                            <Text style={styles.dataProperty}>ID:</Text>
                            <Text style={styles.dataValue}>{list.id}</Text>
                            <Text style={styles.dataProperty}>Name:</Text>
                            <Text style={styles.dataValue}>{list.name}</Text>
                            <Text style={styles.dataProperty}>Url repo:</Text>
                            <Text style={styles.dataValue}>{list.html_url}</Text>
                        </View>
                    )}
                />
        </View>
    )
}