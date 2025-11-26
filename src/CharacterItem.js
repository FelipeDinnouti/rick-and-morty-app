import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const kWindowWidth = Dimensions.get('window').width;

function colorFromStatus(status) {
    var res = "#fff"
    if (status === "Alive") {
        res =  "#3fbf6b"
    } else if (status === "Dead") {
        res = "#cc352d"
    } 

    return {
        height: 8,
        width: 8,
        borderRadius: 8,
        backgroundColor: res,
        marginRight: 6
    }
}

const CharacterItem = ({image, name, status, species}) => (
    <View style={styles.item}>
        
        <View style={styles.image_container}>
            <Image source={{ uri: image }} style={styles.image}/>
        </View> 
        <View style={styles.text_container}>
            <Text style={styles.item_title}>{name}</Text>
            <View style={styles.status_container}>
                <View style={colorFromStatus(status)}></View>
                <Text style={styles.item_subtitle}>{status} - {species}</Text> 
            </View>
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
    status_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
