import { View } from 'react-native';
import React, { useState } from 'react';
import Container from '@components/Molecules/Container';
import Button from '@components/Atoms/Button';
import Input from '@components/Atoms/Input';
import FormControl from '@components/Molecules/FormControl';
import { AuthState } from '@states/AuthState';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Text from '@components/Atoms/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigationParamList } from '@interfaces/NavigationInterface';

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
});

type Props = NativeStackScreenProps<AuthNavigationParamList>;

const LoginScreen = ({ navigation }: Props) => {
	const { login, loading, user } = AuthState();
	const [showPass, setShowPass] = useState(true);

	const initialValues: {
		username: string;
		password: string;
	} = {
		username: user?.username ?? '',
		password: '',
	};

	return (
		<Container
			containerStyle={{
				flex: 1,
				justifyContent: 'center',
				gap: 50,
				padding: 35,
			}}
		>
			<View style={{ width: '100%', gap: 10 }}>
				<Text size={24} family={'bold'}>
					Selamat datang!
				</Text>
				<Text size={18} color={'grey'}>
					Siap mengisi absensi?
				</Text>
			</View>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					login(values).then(({ valid, errorType }) => {
						if (valid == false && errorType == 'deviceid') {
							navigation.navigate('newdevice');
						}
					});
				}}
				validationSchema={validationSchema}
				validateOnMount={true}
			>
				{({ values, handleChange, handleSubmit, errors }) => {
					return (
						<>
							<View style={{ gap: 10, width: '100%' }}>
								<FormControl
									leftIcon={'person'}
									invalid={errors.username && values.username != '' ? true : false}
								>
									<Input
										placeholder='Username or Email'
										value={values.username}
										onChangeText={handleChange('username')}
									/>
								</FormControl>
								<FormControl
									leftIcon={'key'}
									isPassword
									showPassword={showPass}
									onTogglePassword={() => {
										setShowPass(!showPass);
									}}
									invalid={errors.password && values.password != '' ? true : false}
								>
									<Input
										placeholder='Password'
										value={values.password}
										onChangeText={handleChange('password')}
										secureTextEntry={showPass}
									/>
								</FormControl>
							</View>

							<View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
								<Button label='Log In' isLoading={loading} onPress={() => handleSubmit()} />
							</View>
						</>
					);
				}}
			</Formik>
		</Container>
	);
};

export default LoginScreen;
