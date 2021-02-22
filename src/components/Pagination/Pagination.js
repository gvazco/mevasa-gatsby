import React from "react"
import PropType from "prop-types"
import { Link } from "gatsby"
import { Icon } from "semantic-ui-react"
import "./Pagination.scss"

export default function Pagination(props) {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext
  console.log(pageContext)

  return (
    <div className="pagination">
      {previousPagePath && (
        <Link to={previousPagePath}>
          <Icon name="arrow left" />
          Atras
        </Link>
      )}
      {nextPagePath && (
        <Link to={nextPagePath}>
          Siguiente
          <Icon name="arrow right" />
        </Link>
      )}
    </div>
  )
}

Pagination.prototype = {
  pageContext: PropType.object.isRequired,
}
