import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo.png';
import {EmailIcon , EyeIcon} from '../../assets/svg/Icons';
import { themes } from '../../global/themes';

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.wrapperLogo}>
        <Image source={Logo} />
        <Text style={style.title}>Bem Vindo de Volta</Text>
      </View>
      <View style={style.wrapperLogin}>
        <Text style={[style.titleInput ]}>Endereço de e-mail</Text>
        <View style={style.wrapperInput}>
          <TextInput style={style.input} />
          <EmailIcon width={20} height={20} />
        </View>
        <Text style={[style.titleInput ,style.titlePsw ]}>Senha</Text>
        <View style={style.wrapperInput}>
          <TextInput style={style.input} />
          <EyeIcon width={20} height={20} />
        </View>
      </View>
      <View style={style.wrapperButton}>
        <TouchableOpacity style={style.button}> 
          <Text style={style.buttonTxt}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.createAcct}>Não tem conta? <Text style={{color: themes.colors.primary}}>Crie agora!</Text></Text>
    </View>
  );
}
