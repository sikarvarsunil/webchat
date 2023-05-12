'use client'
import axios from 'axios';
import Button from '@/app/shared/buttons/Button';
import Input from '@/app/shared/inputs/Input';
import React, { useCallback, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import SocialButtons from './SocialButtons';
import { signIn } from 'next-auth/react';

type Variant = 'Login' | 'Register';
const Login: React.FunctionComponent = () => {
    const [variant, setVariant] = useState<Variant>('Login');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleVariant = useCallback(() => {
        variant === 'Login' ? setVariant('Register'): setVariant('Login')
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if(variant === 'Register') {
            //Register
            axios.post('/api/register', data)
            .catch((err) => toast.error("Something went wrong")
            )
            .finally(() => setIsLoading(false));
        }
        if(variant === 'Login') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
            .then((res) => {
                if(res?.error) {
                    toast.error("Invalid Credential")
                }
                if(res?.ok && !res?.error) {
                    toast.success("logged in successfully")
                }
            })
            .finally(() => setIsLoading(false));
        }
    }

    const socialLogin = (action: string) => {
        setIsLoading(true);
        signIn(action, {
            redirect: false
        })
        .then((callback) => {
            console.log('res', callback)
            if(callback?.error) {
                toast.error("Invalid Credential")
            }
            if(callback?.ok && !callback?.error) {
                toast.success("logged in successfully")
            }
        })
        .finally(() => setIsLoading(false));
        
    }
    
    return <div className='
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        '>
            <div className='
                bg-white
                px-8
                py-8
                shaddow
                sm:rounded-lg
                sm:px-4
                '>
                <form
                    className='space-y-6'
                    onSubmit={handleSubmit(onsubmit)}>
                        {variant === 'Register' && (
                            <Input
                                type='text'
                                label='Name'
                                id='name'
                                errors={errors}
                                register={register}
                            />
                        )}
                        <Input
                            type='text'
                            label='Email Address'
                            id='email'
                            errors={errors}
                            register={register}
                        />
                        <Input
                            type='password'
                            label='Password'
                            id='password'
                            errors={errors}
                            register={register}
                        />
                        <div className='w-full block'>
                            <Button
                                fullWidth={true}
                                disabled={isLoading}
                            > {variant === 'Register' ? 'Register' : 'Login'} 
                            </Button>
                        </div>
                </form>
                <div className='mt-6'>
                    <div className='relative'>
                        <div className='absolute flex inset-0 items-center'>
                            <div className='w-full border-t border-gray-300' />
                        </div>
                        <div className='relative flex justify-center text-sm'>
                            <span className='bg-white px-2 text-gray-500'>
                                or continue with
                            </span>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                        <SocialButtons 
                            icon={BsGithub}
                            onClick={() => socialLogin('github')}
                        />
                        <SocialButtons 
                            icon={BsGoogle}
                            onClick={() => socialLogin('google')}
                        />
                    </div>
                </div>
                <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-400'>
                        <div>
                            {variant === 'Login' ? 'New to WebChat?' : 'Already have a account?'}
                        </div>
                        <div className='underline cursor-pointer' onClick={handleVariant}>
                            {variant === 'Login' ? 'Create an account' : 'Login'}
                        </div>
                </div>
            </div>
        
    </div>
}

export default Login;