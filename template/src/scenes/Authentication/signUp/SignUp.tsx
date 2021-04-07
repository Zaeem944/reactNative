import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ButtonText } from 'components/ButtonText'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image } from '../../../components/image'
import { TextInput } from '../../../components/TextInput'
import { RootStackParamList } from '../../../navigator/Navigator'
import { NAV_SCREENS } from '../../../navigator/RouteNames'
import colors from '../../../theme/colors'
import { useLocalizationContext } from 'languages'

type SignUpNavigationProp = StackNavigationProp<
  RootStackParamList,
  NAV_SCREENS.SignUp
>
type SignUpRoute = RouteProp<RootStackParamList, NAV_SCREENS.SignUp>

export type SignUpParams = {}

type Props = {
  navigation: SignUpNavigationProp
  route: SignUpRoute
}

export default function SignUp(props: Props) {
  const onPressRegister = async () => {
    // const { navigation } = props
    // const success = await userStore.signUp()
    // if (success) {
    //   navigation!.navigate('Home')
    // }
  }

  const onPressAvatar = async () => {
    // try {
    //   const {
    //     rootStore: {
    //       userStore: { registerUser },
    //     },
    //   } = this.props
    //   const { uri } = await imageUtils.showImagePicker(!!registerUser.photoURL)
    //   registerUser.photoURL = uri || ''
    // } catch (e) {
    //   // @ts-ignore
    //   console.tron.log('select avatar error', e)
    // }
  }

  const languages = useLocalizationContext()

  return (
    <KeyboardAwareScrollView style={styles.CONTAINER}>
      <View style={styles.inner}>
        <TouchableOpacity style={styles.avatar} onPress={onPressAvatar}>
          <View style={styles.IMAGE_WRAPPER}>
            <Image
              style={styles.IMAGE}
              url='registerUser.photoURL' // FIXME: user photo
              asset='ic_guest'
            />
            <Image style={styles.ICON_PLUS} asset='ic_plus' />
          </View>
        </TouchableOpacity>

        <TextInput
          placeholder={languages.Name}
          keyboardType='default'
          autoCapitalize='words'
          maxLength={50}
          onChangeText={(value) => {
            // registerUser.displayName = value
          }}
          value=''
        />

        <TextInput
          label={languages.Email}
          keyboardType='email-address'
          autoCapitalize='none'
          maxLength={100}
          onChangeText={(value) => {
            // registerUser.email = value
          }}
          // value={registerUser.email}
        />

        <View style={styles.PHONE_CONTAINER}>
          <View style={styles.PHONE_BIGGER_WRAPPER}>
            <View style={styles.PHONE_WRAPPER}>
              <TextInput
                label={languages.Phone}
                style={styles.PHONE_TEXT_FIELD}
                keyboardType='phone-pad'
                maxLength={13}
                onChangeText={(value) => {
                  // registerUser.phone = value
                }}
                // value={registerUser.phone}
              />
            </View>
          </View>
        </View>

        <TextInput
          secureTextEntry
          label={languages.Password}
          maxLength={100}
          onChangeText={(value) => {
            // registerUser.password = value
          }}
          // value={registerUser.password}
          // error={errorSignUp.errorPassword}
        />

        <TextInput
          secureTextEntry
          label={languages.ConfirmPassword}
          maxLength={100}
          // value={registerUser.confirmationPassword}
          // error={errorSignUp.errorConfirmationPassword}
        />

        <ButtonText
          text={languages.SignUp}
          style={styles.BUTTON}
          textPresets='bold'
          textStyle={styles.BUTTON_TEXT}
          onPress={onPressRegister}
        />
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: colors.background,
  },

  inner: {
    // flex: 1,
  },

  avatar: { alignSelf: 'center' },

  IMAGE_WRAPPER: {
    marginTop: 46,
    alignSelf: 'center',
    marginBottom: 20,
  },

  IMAGE: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    tintColor: colors.primary,
    resizeMode: 'cover',
  },

  PHONE_CONTAINER: {
    marginHorizontal: 20,
  },

  PHONE_WRAPPER: {
    flexDirection: 'row',
  },

  PHONE_LABEL: { fontSize: 14, marginTop: 4 },

  PHONE_NATION: {
    marginRight: 5,
    fontSize: 13,
    color: palette.gray,
  },

  PHONE_TEXT_FIELD: {
    height: 35,
    borderBottomColor: palette.gray,
    borderBottomWidth: 1,
    flex: 1,
  },

  PHONE_ERROR: { marginBottom: 5, color: palette.red },

  BUTTON: {
    height: 46,
    borderRadius: 8,
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    marginVertical: 20,
  },

  BUTTON_TEXT: {
    color: 'white',
  },

  ICON_PLUS: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 12,
    tintColor: colors.primary,
  },

  ERROR_PHONE: {
    marginTop: 5,
  },

  PHONE_BIGGER_WRAPPER: {
    flex: 1,
  },
})