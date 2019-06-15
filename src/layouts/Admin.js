import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import AdminNavbar from '../components/Navbars/AdminNavbar'
import Header from '../components/Header/Header'
import AdminFooter from '../components/Footer/AdminFooter'
import Sidebar from '../components/Sidebar/Sidebar'

import { routes } from '../routes'
import UserPage from '../containers/User/index'
import TrainingPage from '../containers/Training/index'
import TrainingCategoryPage from '../containers/TrainingCategory/index'
import ExerciseCategoryPage from '../containers/ExerciseCategory/index'

class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.mainContent.scrollTop = 0
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name
      }
    }
    return "Brand"
  }
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Header />
          <Switch>
            {this.getRoutes(routes)}
            <Route
              exact
              path="/admin/users/:id"
              component={UserPage}
            />
            <Route
              exact
              path="/admin/trainings/:id"
              component={TrainingPage}
            />
            <Route
              exact
              path="/admin/trainingCategories/:id"
              component={TrainingCategoryPage}
            />
            <Route
              exact
              path="/admin/exerciseCategories/:id"
              component={ExerciseCategoryPage}
            />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    )
  }
}

export default Admin
