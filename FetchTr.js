import React,{useState,useEffect} from 'react';
import { Text, View ,FlatList, StyleSheet,Pressable} from 'react-native';
import { firebase } from './config';
const FetchTr = () => {
    const [users,setUsers]=useState([]);
    const todoRef=firebase.firestore().collection('train');


    useEffect(async()=>{
        trainRef
        .onSnapshot(
            quarySnapshot=>{
                const users=[]
                quarySnapshot.forEach((doc)=>{
                    const{heading,text}=doc.data()
                    users.push({
                        id:doc.id,
                        heading,
                        text,
                    })
                })
                setUsers(users)
            }
        )
    },[])
  return (
    <View
      style={{flex: 1,marginTop:100}}>
    <FlatList style={{height:'100%'}}
                data={users}
                numColumns={1}
                renderItem={({item})=>(
                    <Pressable
                    style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.ItemHeader}>
                                {item.heading}
                            </Text>
                            <Text style={styles.Itemtext}>
                                {item.text}
                            </Text>
                        </View>
                    </Pressable>
    )}

    />   
</View>
  )
}
export default FetchTr;
const styles=StyleSheet.create({

    container:{
        backgroundColor:'#e5e5e5',
        padding:15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10,

    },
    innerContainer:{
        alignItem:'center',
        flexDirection:'column',

    },
    ItemHeader:{
        fontWeight:'bold'
    },
    Itemtext:{

        fontWeight:'300'

    }
})