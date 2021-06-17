import Layout from 'lib/components/Layout'
import { ProposalCreationUI } from 'lib/components/ProposalCreation/ProposalCreationUI'
import React from 'react'

export default function IndexPage(props) {
  return (
    <Layout>
      <ProposalCreationUI />
    </Layout>
  )
}
