// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      {/* <Route path="/" page={HomePage} name="home" /> */}
      {/* 热门页，即首页 */}
      <Route path="/" page={PoolsPage} name="pools" />
      <Route path="/pools/new" page={NewPoolPage} name="newPool" />
      <Route path="/pools/{id:Int}/edit" page={EditPoolPage} name="editPool" />
      <Route path="/pools/{id:Int}" page={PoolPage} name="pool" />
      <Route path="/datasets/new" page={NewDatasetPage} name="newDataset" />
      <Route
        path="/datasets/{id:Int}/edit"
        page={EditDatasetPage}
        name="editDataset"
      />
      <Route path="/datasets/{id:Int}" page={DatasetPage} name="dataset" />
      <Route path="/datasets" page={DatasetsPage} name="datasets" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
