import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import * as S from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hífen.',
    })
    .transform((username) => username.toLowerCase()),
})

type claimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export const ClaimUsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<claimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const handleClaimRegister = async (data: claimUsernameFormData) => {
    console.log(data)
  }

  return (
    <>
      <S.Form as="form" onSubmit={handleSubmit(handleClaimRegister)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </S.Form>
      <S.FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username?.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </S.FormAnnotation>
    </>
  )
}
