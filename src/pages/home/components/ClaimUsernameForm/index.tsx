import { Button, TextInput } from '@ignite-ui/react'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type claimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export const ClaimUsernameForm = () => {
  const { register, handleSubmit } = useForm<claimUsernameFormData>()

  const handleClaimRegister = async (data: claimUsernameFormData) => {
    console.log(data)
  }

  return (
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
  )
}
