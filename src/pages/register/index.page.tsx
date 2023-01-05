import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import * as S from './styles'
import { ArrowRight } from 'phosphor-react'

const Register = () => {
  return (
    <S.Container>
      <S.Header>
        <Heading as="strong">Bem vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </S.Header>

      <S.Form as="form">
        <label>
          <Text size="sm">Nome do usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default Register
