'use client';
import React, { useEffect } from 'react'
import  {useState, useCallback} from 'react'
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Input from './inputs/Input';
import Button from './Button';
import AuthSocialButton from './AuthSocialButton';
import {BsFacebook, BsGithub, BsGoogle} from 'react-icons/bs'
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



type Variant = "LOGIN" | 'REGISTER';

const AuthForm2 = () => {
    const session = useSession();
    const router= useRouter();
    const[variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        if (session?.status==='authenticated'){
            router.push('/users')

        }
    }, [session?.status, router]);

    const toggleVariant = useCallback(()=>{
        if ( variant === "LOGIN"){
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
        
        
    }, [variant]);
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }

    }=useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
        }
    });
    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);
        if (variant === 'REGISTER') {
            axios.post('/api/register', data)
            .then(() => signIn('credentials', {...data, redirect:false,}))
            .then((callback) => {
                if (callback?.error) {
                  toast.error('Invalid credentials!');
                }
                if (callback?.ok) {
                    router.push('/')
                  }
                })
            .catch(()=> toast.error('something went wrong!'))
            .finally(()=> setIsLoading(false))
        }
        if (variant==='LOGIN'){
            signIn ('credentials',{
                ...data,
                redirect: false
            })
            .then((callback)=>{
                 
                if (callback?.error){
                    toast.error('invald credentials')
                }
                if (callback?.ok){
                    toast.success('Succesfully logged in!')
                    router.push('/users')
                }
            })
            .finally(()=>setIsLoading(false))
        }
    }

    const socialAction = (action:string)=>{
        setIsLoading(true);
        signIn(action, { redirect:false})
        .then((callback)=>{
            if (callback?.error){
            toast.error('Invalid Credentials');
        }
        if (callback?.ok ){
        toast.success('Logged in')
        router.push('/users')
        }
        })
        .finally(()=> setIsLoading(false));
    }
  return (
    <div className='lg:mt-5 sm:mt-0 sm:mx-auto sm:w-full sm:max-w-md lg:gap-5 sm:gap-2 relative justify-start '>
        <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 p-0 '>
        <form 
            className='space-y-10 '
            onSubmit={handleSubmit(onSubmit)}
        >
            {variant === 'REGISTER' && (
            <Input label='name' register={register} id={'name'} errors={errors} type='name'/>
            
            )}
             
            <Input label='Email address' register={register} id={'email'} errors={errors} type='email'/>
            <Input label='Password' register={register} id={'password'} errors={errors} type='password'/>
            <div className=''>
                <Button 
                    disabled={isLoading}
                    fullWidth
                    type='submit'
                   
                
                >
                    {variant==='LOGIN' ? 'Sign-in' : 'Register'}
                </Button>
            </div>
             
           


        </form>
        <div className='lg:mt-10 sm:mt-0'>
            <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300'/>

                   
                    
                </div>
                <div className='relative flex justify-center text-sm'>
                        <span className='bg-white px-2 text-gray-500'>
                            Or continue with
                        </span>
                    </div>
            </div>
                <div className=' flex gap-2 lg:my-10 sm:my-2'>
                   {/* <AuthSocialButton icon={BsGithub } onClick={()=> socialAction('github')}/> */}
                   <AuthSocialButton icon={BsGoogle } onClick={()=> socialAction('google')}/>
                   <AuthSocialButton icon={BsFacebook } onClick={()=> socialAction('facebook')}/>

                </div>
        </div>
            <div className='flex gap-2 justify-start text-sm mt-10 px-2 text-gray-500'>
                <div className=''>
                    {variant=== 'LOGIN'? 'Need help?': "Already registered?"}
                </div>
                <div
                    onClick={toggleVariant}
                    className='underline cursor-pointer font-semibold text-purple-500'
                >
                 {variant=== 'LOGIN'?'Create an Account': "Login"}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthForm2