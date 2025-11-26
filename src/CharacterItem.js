import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const kWindowWidth = Dimensions.get('window').width;

function colorFromStatus(status) {
    let res = '#000'
    if (status === 'Alive') {
        res =  '#323645'
    } else if (status === 'Dead') {
        res = '#e13b36'
    } 

    return {
        height: 8,
        width: 8,
        borderRadius: 8,
        backgroundColor: res
    }
}

const CharacterItem = ({image, name, status, species}) => (
    <View style={styles.item}>
        
        <View style={styles.image_container}>
            <Image source={{ uri: image }} style={styles.image}/>
        </View> 
        <View style={styles.text_container}>
            <View style={colorFromStatus(status)}></View>
            <Text style={styles.item_title}>{name}</Text>
            <Text style={styles.item_subtitle}>{status} - {species}</Text> 
        </View>
    </View>
);

export default CharacterItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginVertical: 40,
        fontSize: 32
    },
    item_title: {
        fontSize: 20,
        color: '#fff'
    },
    item_subtitle: {
        fontSize: 12,
        color: '#fff'
    },
    item: {
        width: kWindowWidth*0.85,
        marginBottom: 10,
        backgroundColor: '#323645',

        borderRadius: 8,

        display: 'flex',
        flexDirection: 'row'
    },
    text_container: {
        marginVertical: 16, 
        display: 'flex',
        flex: 1,
        paddingHorizontal: 10
    },
    image_container: {
        flexDirection: 'row',
        alignItems: 'center', 
        padding: 8
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 0,
    },

});
