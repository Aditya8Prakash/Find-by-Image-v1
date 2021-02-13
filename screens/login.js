import React , {Component} from 'react';
import { Text,View,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView,ImageBackground,Image } from 'react-native';

export default class LoginScreen extends React.Component {

    constructor () {
        super();
        this.state = {
            password:'',
            email:'',
            backgroundImage:'https://cdn.discordapp.com/attachments/775183012027564039/809997469999431680/back.jpg'
        }
    }

    render() {
         return(
         <ImageBackground style = {styles.container} source={{uri:this.state.backgroundImage}}>
             <View>
                 <View style={styles.logo}>
                    <View style={styles.imgContnr}>
                        <Image style={styles.img} source = {{uri: 'https://cdn.discordapp.com/attachments/775183012027564039/810028659234177044/adaptive-icon.png'}}/>
                    </View>
                    <Text style={styles.hed}>Find-By-Image</Text>
                 </View>
                <View style = {styles.secContainer}>
                    <Text style={styles.textStyle}>Login / Sign Up</Text>
                    <KeyboardAvoidingView>
                        <TextInput style = {styles.textInpt} placeholder='E-mail' keyboardType='email-address' value={this.state.email} onChangeText={(txt)=>{this.setState({email:txt})}}/>
                        <TextInput style = {styles.textInpt} placeholder='Password' secureTextEntry='true' value={this.state.password} onChangeText={(txt)=>{this.setState({password:txt})}}/>
                    </KeyboardAvoidingView>
                    <View style = {styles.btnContainer} >
                        <TouchableOpacity style = {styles.btn}>
                            <Text style = {styles.btnTxt}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.btn}>
                            <Text style = {styles.btnTxt}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
         </ImageBackground>
         )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle: {
        fontSize:30,
        padding:2.5,
        fontWeight:'100'
    },
    textInpt :{
        padding:8,
        backgroundColor:'#ffffff4b',
        margin:15,
        width:300,
        fontSize:20,
        fontWeight:'400',
        borderRadius:5,
    },
    btn:{
        padding:10,
        backgroundColor:'#ffffff3f',
        width:100,
        borderRadius:3,
        margin:10,
        alignItems:'center',
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    btnTxt:{
        fontSize:20,
        fontWeight:'350'
    },
    secContainer:{
        backgroundColor:'#ffffff2a',
        padding:20,
        borderRadius:20,
        shadowColor:'#000000',
        shadowOpacity:0.65,
        shadowRadius:30,
    },
    img:{
        width:150,
        height:150,
        alignSelf:'center',
    },
    hed:{
        fontSize:45,
        fontWeight:350,
        alignSelf:'center',
        letterSpacing:1.5,
        textShadowColor: '#ffff',
        textShadowRadius:20,
        textShadowOpacity:0.25
    },
    logo:{
        alignSelf:'center',
        margin:50
    }
});