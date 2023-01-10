import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import * as S from './styles'
import * as T from '../../register/styles'
import { ArrowRight } from 'phosphor-react'
import { signIn, useSession } from 'next-auth/react'

const Register = () => {
  // const session = useSession()

  return (
    <T.Container>
      <T.Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </T.Header>

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </S.ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </S.ConnectBox>
    </T.Container>
  )
}

export default Register
