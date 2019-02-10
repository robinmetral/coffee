import React from "react"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const AdminLayout = (props) => (
  <Flex>
    { props.children }
  </Flex>
)

export default AdminLayout
