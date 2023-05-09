import { db } from '../services/firebase/configs'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useEffect, useState } from 'react'


export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    // CLEANUP
    const [cancelled, setCancelled] = useState(false)


    const auth = getAuth()


    function checkIfCancelled() {
        if (cancelled) { // SE CANCELLED FOR VERDADEIRO ELE ENTRA NESSA FUNÇÃO E SAI DO PROGRAMA FINALIZANDO A OPERAÇÃO
            return      // ISSO FAZ COM QUE ESSE HOOK NAO FIQUE RODANDO O TEMPO INTEIRO, ECONOMIZANDO PROCESSAMENTO
        }
    }



    // CRIAR UMA USUARIO
    const createUser = async (data) => {
        checkIfCancelled()

        setLoading(true) // INICIA O LOADING
        setError(null)

        try {
            // CRIA UM USUARIO COM O EMAIL E SENHA PASSADO PARA O HOOK
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.mail,
                data.passwrd
            )

            // ADIÇÃO DO NOME DO USUARIO AO BANCO DE DADOS
            await updateProfile(user, {
                displayName: data.name
            })

            setLoading(false);


            // RETORNA UM USUARIO VALIDO CASO TUDO TENHA OCORRIDO CORRETAMENTE
            return user

            //    EM CASO DE ERROS ELE ACIONA O CATCH
        } catch (error) {
            console.log(error.message);

            let sistemErrorMessage;
            if (error.code === 'auth/weak-password') {
                sistemErrorMessage = 'Senha fraca. Deve conter pelo menos 6 caracteres.';
            } else if (error.code === 'auth/email-already-in-use') {
                sistemErrorMessage = 'E-mail já cadastrado.';
            } else {
                sistemErrorMessage = 'Ocorreu um erro ao criar a conta.';
            }

            setLoading(false);
            setError(sistemErrorMessage);

        }


        setLoading(false) // FINALIZA O LOADING
    }

    // LOGOUT - SIGN OUT
    const logout = () => {
        checkIfCancelled(true)
        signOut(auth)
    }

    // LOGIN
    const login = async (data) => {
        checkIfCancelled()
        setLoading(true)
        setError(false)
        
        
        try {
            await signInWithEmailAndPassword(auth, data.mail, data.passwrd)
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            
            let sistemErrorMessage;
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                sistemErrorMessage = 'E-mail ou senha incorretos.';
            } else {
                sistemErrorMessage = 'Ocorreu um erro ao fazer login.';
            }
            
            setError(sistemErrorMessage);
            setLoading(false);
        }
    }





    useEffect(() => {
        setCancelled(true) // LOGO QUE O PROCESSO E FEITO ELE FINALIZA A OPERAÇÃO 
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}