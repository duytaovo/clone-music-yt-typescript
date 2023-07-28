import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment, useContext, useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { toast } from 'react-toastify'
import userApi from 'src/apis/user.api'
import { changePercentLoading } from 'src/app.slice'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import InputFile from 'src/components/InputFile'
import { AppContext } from 'src/contexts/app.context'
import { useAppDispatch } from 'src/hooks/useRedux'
import { ErrorResponse } from 'src/types/utils.type'
import { setProfileToLS } from 'src/utils/auth'
import { userSchema, UserSchema } from 'src/utils/rules'
import { getAvatarUrl, isAxiosUnprocessableEntityError } from 'src/utils/utils'

type FormData = Pick<UserSchema, 'name' | 'avatar'>
type FormDataError = FormData
const profileSchema = userSchema.pick(['name', 'avatar'])

function Info() {
  const {
    register,
    formState: { errors }
  } = useFormContext<FormData>()
  return (
    <Fragment>
      <div className='mt-6 flex flex-col flex-wrap sm:flex-row'>
        <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right'>Tên</div>
        <div className='sm:w-[80%] sm:pl-5'>
          <Input
            classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
            register={register}
            name='name'
            placeholder='Tên'
            errorMessage={errors.name?.message}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default function Profile() {
  const { setProfile } = useContext(AppContext)
  const [file, setFile] = useState<File>()
  const dispatch = useAppDispatch()
  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const { data: profileData, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: userApi.getProfile
  })

  const profile = profileData?.data.data
  const updateProfileMutation = useMutation(userApi.updateProfile)
  const uploadAvatarMutaion = useMutation(userApi.uploadAvatar)

  const methods = useForm<FormData>({
    defaultValues: {
      name: '',
      avatar: ''
    },
    resolver: yupResolver(profileSchema)
  })
  const { handleSubmit, setValue, watch, setError } = methods

  const avatar = watch('avatar')
  useEffect(() => {
    if (profile) {
      dispatch(changePercentLoading(30))
      setValue('name', profile.name)
      setValue('avatar', profile.avatar)
      dispatch(changePercentLoading(100))
    }
  }, [profile, setValue])

  const onSubmit = handleSubmit(async (data) => {
    try {
      dispatch(changePercentLoading(30))
      let avatarName = avatar
      if (file) {
        const form = new FormData()
        form.append('image', file)

        const uploadRes = uploadAvatarMutaion.mutateAsync(form)
        avatarName = (await uploadRes).data.data
        setValue('avatar', avatarName)

        const res = await updateProfileMutation.mutateAsync({
          ...data,
          avatar: avatarName
        })
        setProfile(res.data.data)
        setProfileToLS(res.data.data)
        refetch()
        dispatch(changePercentLoading(100))
        toast.success(res.data.message)
      }
      else{
        toast.error('Cần chọn ảnh 😋!!!')

      }
    } catch (error) {
      if (isAxiosUnprocessableEntityError<ErrorResponse<FormDataError>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormDataError, {
              message: formError[key as keyof FormDataError],
              type: 'Server'
            })
          })
        }
      }
    }
  })

  const handleChangeFile = (file?: File) => {
    setFile(file)
  }
  return (
    <div className='container mt-5 rounded-sm bg-bg_chart p-5 px-2 pb-10 shadow md:px-7 md:pb-20'>
       <Helmet>
        <title>Profile | Music Youtube By Võ Duy Tạo</title>
        <meta name='description' content='Trang profile cá nhân' />
      </Helmet>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Hồ Sơ Của Tôi</h1>
        <div className='mt-1 text-sm text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <FormProvider {...methods}>
        <form className='mt-8 flex flex-col-reverse md:flex-row md:items-start' onSubmit={onSubmit}>
          <div className='mt-6 flex-grow md:mt-0 md:pr-12'>
            <div className='flex flex-col flex-wrap sm:flex-row'>
              <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right'>Email</div>
              <div className='sm:w-[80%] sm:pl-5'>
                <div className='pt-3 text-gray-700'>{profile?.email}</div>
              </div>
            </div>
            <Info />
            <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
              <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right' />
              <div className='sm:w-[80%] sm:pl-5'>
                <Button
                  type='submit'
                  className='mb-2 mt-3 flex w-[100px] items-center justify-center rounded bg-[#75C2F6] py-3 px-3  text-sm uppercase text-white hover:opacity-80'
                  isLoading={updateProfileMutation.isLoading}
                  disabled={updateProfileMutation.isLoading}
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center md:w-72 md:border-l md:border-l-gray-200'>
            <div className='flex flex-col items-center'>
              <div className='my-5 h-24 w-24'>
                <img
                  src={previewImage || getAvatarUrl(avatar)}
                  alt=''
                  className='h-full w-full rounded-full object-cover'
                />
              </div>
              <InputFile onChange={handleChangeFile} />
              <div className='mt-3 text-gray-400'>
                <div>Dụng lượng file tối đa 1 MB</div>
                <div>Định dạng:.JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
