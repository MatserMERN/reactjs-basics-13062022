import React from 'react'
import "./AppStyles.css"
import styles from "./AppStyles.module.css"

function AppStyles() {
  return (
    <div>
        <h1 className="success">Apply Styles using Reular CSS Style Sheet</h1>
        <h1 className={styles.success}>Apply Styles using Reular module CSS Style Sheet</h1>
        <h1 className={styles.success}>Apply Styles using Reular module CSS Style Sheet</h1>
    </div>
  )
}

export default AppStyles