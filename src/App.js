import React from 'react';
import {
  SafeAreaView,  
  StyleSheet,
  Text,  
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  Linking,  
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/images/jocemar.jpeg'
import Card from './components/Card'


const App = () => {
  
  const handleRedeSocial = (rede_social) => {
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/jocemarvosskovacs/')
      break
      case 'github':
        Alert.alert('Meu GitHub','https://github.com/jocemarkovacs/')
      break
      case 'instagram':
        Alert.alert('Meu Instagram','https://www.instagram.com/jvkovacs/')
      break
    }
  }

  return (    
    <ScrollView>
      <View>      
      <SafeAreaView style={style.container}>
        <View>
          <Image style={style.foto} source={foto}/>
          <Text style={style.titulo}>JOCEMAR VOSS KOVACS</Text>
          <Text style={style.subTitulo}>DESENVOLVEDOR MOBILE</Text>
        </View>  
        <View style={style.social}>
          <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
            <Icon name="linkedin" style={style.icons}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
            <Icon name="github" style={style.icons}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleRedeSocial('instagram')}>
            <Icon name="instagram" style={style.icons}/>
          </TouchableOpacity>
        </View>
        <Card titulo='Formação Acadêmica'>
            <Text style={style.experienciaTexto} >• Engenharia de Software (cursando) </Text>            
            <Text style={style.experienciaTexto} >• Administração de empresa (incompleto)</Text>
            <Text style={style.experienciaTexto} >• Ciência da Computação (incompleto)</Text>
        </Card>
        <Card titulo='Experiência Profissional'>
            <Text style={style.experienciaTexto} >• Programador Python/JavaScript </Text>
            <Text style={style.experienciaTexto} >• Flex </Text>
            <Text style={style.experienciaTexto} >• JVKovacs Photo Art </Text>
            <Text style={style.experienciaTexto} >• Vox Vokswagen </Text>            
        </Card>
        <Card titulo='Cursos'>
        <Text style={style.experienciaTexto} >• Desenvolvimento para internet e Banco de Dados com Python e Django. </Text>
        <Text style={style.experienciaTexto} >• Git e GitHub.</Text>
        <Text style={style.experienciaTexto} >• HTML5, CSS3 e JavaScript.</Text>
        <Text style={style.experienciaTexto} >• React Native. </Text>
        <Text style={style.experienciaTexto} >• Deep Learning: Visão Computacional, CNN e Transfer
Learning. </Text>
        <Text style={style.experienciaTexto} >• Python na Prática: Programando um Bot do
WhatsApp.</Text>
        <Text style={style.experienciaTexto} >• Programação Concorrente e Assincrona com Python</Text>
        <Text style={style.experienciaTexto} >• Python para Finanças: Investimentos & Analise de
Dados.</Text>
        </Card>
        <Card titulo='Idiomas'>
          <Text style={style.experienciaTexto} >• Inglês Intermediário |  2 anos e 6 meses de <Text style={style.link} onPress={()=> Linking.openURL('https://rockfeller.com.br/rockfeller-santa-catarina-sao-jose-kobrasol')}>RockFeller</Text></Text>
          <Text style={style.experienciaTexto} >• Italiano Intermediário |  2 anos de <Text style={style.link} onPress={()=> Linking.openURL('https://www.circuloitalobrasileiro.com/')}>Círculo Ítalo-Brasileiro | CIB</Text></Text>
          <Text style={style.experienciaTexto} >• Espanhol Básico</Text>
        </Card>   
        <Card titulo='Habilidades e Conhecimentos'>
          <Text style={style.experienciaTexto} >• Windows, Mac OS, Linux</Text>
          <Text style={style.experienciaTexto} >• Lightroom, Photoshop, Premiere, After Effects</Text>
          <Text style={style.experienciaTexto} >• Pacote Office</Text>
          <Text style={style.experienciaTexto} >• StoryTelling</Text>
          <Text style={style.experienciaTexto} >• PNL(programação Neuro Linguística)
  </Text>
          <Text style={style.experienciaTexto} >• Análise Técnica para Mercado Financeiro</Text>
          <Text style={style.experienciaTexto} >• Formula de Lançamento</Text>
          <Text style={style.experienciaTexto} >• Psicologia de consumo</Text>               
        </Card>         
      </SafeAreaView>    

      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor: '#2f353a',
    flex:1,    
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius: 160,
    marginTop:30,
    borderColor: 'gray',
    borderWidth: 5,  
    marginLeft: 15,  
  },
  titulo:{
    // fontFamily: 'Open Sans',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 20
  },
  subTitulo:{    
    color: 'white',
    fontSize: 12,
    textAlign: 'right',
    letterSpacing: 6.6
  },
  social:{
    marginTop: 10,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    width: '80%',    
  }, 
  icons:{
    fontSize: 50,
    color: 'gray'
  },
  experienciaTexto:{
    fontSize: 16,
    marginTop:0,    
    color: 'white',    
    padding: 3,
    width: '90%'
  },
  link:{
    color:'lightblue',
    fontWeight: 'bold'
  }
  

  
});

export default App;
