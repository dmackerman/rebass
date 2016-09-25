
import React from 'react'
import { Link } from 'react-router'
import find from 'lodash/find'
import { Container, Grid } from 'gridsys'
import {
  NavItem,
  Heading,
  Text,
  Pre,
  Input,
  Select,
  Checkbox
} from '../src'
import BigHeading from './BigHeading'
import Rule from './Rule'
import PropsTable from './PropsTable'
import data from './data'

const PropField = ({
  name,
}) => {
  return <div />
}

const ComponentDetail =({
  params
}) => {
  const { name } = params
  const comp = find(data.components, d => d.name === name)

  return (
    <Container>
      <Grid span={12}>
        <Link to='/'>
          {({ href }) => (
            <NavItem
              px={0}
              href={href}>
              Rebass
            </NavItem>
          )}
        </Link>
        <BigHeading children={name} />
        <Text children={comp.description} />
        <Rule />
      </Grid>
      <Grid span={6}>
        <Heading
          alt
          mb={3}
          level={3}>
          Preview:
        </Heading>
        {comp.example}
      </Grid>
      <Grid span={3}>
        <Pre children={comp.code} />
      </Grid>
      <Grid span={3}>
        <PropsTable props={comp.props} />
      </Grid>
      <Grid span={3} />
      <Grid span={6}>
      </Grid>
    </Container>
  )
}

export default ComponentDetail
