import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicatorBase, ActivityIndicator } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo.png';
import {EmailIcon , EyeIcon} from '../../assets/svg/Icons';
import { themes } from '../../global/themes';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

async function getLogin() {
  try {
    setLoading(true)
    if(!email || !password){
      return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
    }
    if (email == 'teste' && password == 'teste') {
      console.log('logado')
    } else {
      console.log('usuario n encontrado')
    }
  }
  catch(error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

  return (
    <View style={style.container}>
      <View style={style.wrapperLogo}>
        <Image source={Logo} />
        <Text style={style.title}>Bem Vindo de Volta</Text>
      </View>
      <View style={style.wrapperLogin}>
        <Text style={[style.titleInput ]}>Endereço de e-mail</Text>
        <View style={style.wrapperInput}>
          <TextInput style={style.input} value={email} onChangeText={setEmail} autoCapitalize="none"/>
          <EmailIcon width={20} height={20} />
        </View>
        <Text style={[style.titleInput ,style.titlePsw ]}>Senha</Text>
        <View style={style.wrapperInput}>
          <TextInput style={style.input} value={password} onChangeText={setPassword} autoCapitalize="none"/>
          <EyeIcon width={20} height={20} />
        </View>
      </View>
      <View style={style.wrapperButton}>
        <TouchableOpacity style={style.button} onPress={()=> getLogin()}> 
          { loading ? <ActivityIndicatorBase color={'#fff'} size={'small'}/> : <Text style={style.buttonTxt}>Entrar</Text>}
        </TouchableOpacity>
      </View>
      <Text style={style.createAcct}>Não tem conta? <Text style={{color: themes.colors.primary}}>Crie agora!</Text></Text>
    </View>
  );
}
