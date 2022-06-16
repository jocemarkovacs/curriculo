import React from "react";
import {
    View,
    Text,
} from 'react-native';
import style from './style';

const Card = ({ titulo, children })=>{
    return (
        <View style={style.card}>
          <View style={style.cardHeader}>
            <Text style={[style.titulo, style.experiencia]}>{titulo}</Text>
          </View>
          <View style={[style.cardContent]}>
            {children}
          </View>   
        </View>
    )
}

export default Card;