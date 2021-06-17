import React, { useEffect, useState } from "react";
import userService from '../../services/users'

const Actions = () => {
  const [users, setUsers] = useState([])
  const [inUsername, setinUsername] = useState([])
  const [inUserId, setinUserId] = useState([])
  // const []
  const getData = () => {
    userService
      .getAllUsers()
      .then(initialUsers => {
        setUsers(initialUsers)
      })
      .catch(
        console.log("axios error"))
  }

  useEffect(() => {
    console.log('effect')
    getData()

  }, [])

  const row = () => users.map(user => {
    return (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.username}</td>
        <td>{user.date}</td>
        <td>
          <a href="detail.html" className="btn btn-secondary mx-3">
            <i className="fas fa-angle-double-right"></i> Details
          </a>
          {/* <button onClick={() => userService.deleteUser(id)} type="button" className="btn btn-danger">Delete</button> */}
          <button onClick={() => deleteUser(user._id)} type="button" className="btn btn-secondary">Delete</button>
        </td>
      </tr>
    )
  })

  const handleUsername = (event) => {
    setinUsername(event.target.value)
  }

  const handleUserId = (event) => {
    setinUserId(event.target.value)
  }

  const addUser = (event) => {
    event.preventDefault()
    if (!inUsername)
      return
    const newUser = {
      username: inUsername,
      // date: new Date()
      // move this to the server side instead. Let the server create the Date
      // "images": { "imgId": tal }
    }

    console.log('username', inUsername)
    userService.createUser(newUser)
      .then(response => {
        setUsers(users.concat(response))
        setinUsername('')
      })
      .catch((error =>
        console.log('error:', error.message)
      ))

  }

  const updateUser = (event) => {
    event.preventDefault()
    if (!inUsername || !inUserId)
      return
    //this does not really check if the input value is empty or includes space characters. Need to add validations
    const updateUser = {
      username: inUsername,
    }


    userService.updateUser(inUserId, updateUser)
      .then(response => {
        setUsers(users.map(user => user.id !== inUserId ? user : response))
        setinUsername('')
        setinUserId('')
      })
      .catch(error =>
        alert(`the user with user id ${inUserId} was already deleted from server`)
        // console.log('error', error.message)
      )

  }

  const deleteUser = (id) => {
    // console.log('deleteUser', id)
    userService.deleteUser(id)
      .then(response => {
        alert(`the user with user id ${inUserId} was deleted`)
        setUsers(users.filter(user => user.id !== id))
        setinUsername('')
        // console.log(`the User with id ${id} was removed`)
      })
      .catch(error =>
        alert(`the user with user id ${inUserId} couldn't be deleted`)

      )
  }

  return (
    <>
      <div id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">
                <i className="fas fa-plus"></i> Add Post
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="btn btn-success btn-block" data-toggle="modal" data-target="#addCategoryModal">
                <i className="fas fa-plus"></i> Add Category
              </a>
            </div>
            <div className="col-md-3">
              <a href="#" className="btn btn-warning btn-block" data-toggle="modal" data-target="#addUserModal">
                <i className="fas fa-plus"></i> Add Users
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*Table with user info  */}

      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Users</h4>
                </div>
                <table className="table table-striped table-condensed">
                  <thead className="thead-dark">
                    <tr>
                      <th>User Id</th>
                      {/* <th>User ID</th> */}
                      <th>Username</th>
                      {/* <th>Category (VIP/Trial)</th> */}
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {row()}

                    <tr className="bg-white" height="1px">
                      <td className="border-bottom-0 bg-white"></td>
                      <td className="border-bottom-0 bg-white"></td>
                      <td className="border-bottom-0 bg-white"></td>
                      <td className="border-bottom-0 bg-white"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center bg-primary text-white mb-3">
                <div className="card-body">
                  <h3>Posts</h3>
                  <h4 className="display-4">
                    <i className="fas fa-pencil-alt"></i> 6
                  </h4>
                  <a href="posts.html" className="btn btn-outline-light btn-sm">Views</a>
                </div>
              </div>
              <div className="card text-center bg-success text-white mb-3">
                <div className="card-body">
                  <h3>Categories</h3>
                  <h4 className="display-4">
                    <i className="fas fa-pencil-alt"></i> 12
                  </h4>
                  <a href="category.html" className="btn btn-outline-light btn-sm">Views</a>
                </div>
              </div>
              <div className="card text-center bg-warning text-white mb-3">
                <div className="card-body">
                  <h3>Users</h3>
                  <h4 className="display-4">
                    <i className="fas fa-pencil-alt"></i> 99
                  </h4>
                  <a href="users.html" className="btn btn-outline-light btn-sm">Views</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/*Table with user info  */}

      {/* Form input User */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-9">
            <div className="col px-0">
              <div className="card">
                <div className="card-header">
                  <h4>Add User</h4>
                  <div className="card-body"></div>
                  {/* <form onSubmit={addUser}> */}
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        {/* <label htmlFor="inputEmail4">Username</label> */}
                        <input type="Username" className="form-control" id="username" placeholder="Username" value={inUsername} onChange={handleUsername} />
                      </div>
                      <div className="form-group col-md-3">
                        {/* <label htmlFor="inputPassword4">Password</label> */}
                        <input type="password" className="form-control" id="inputpassword" placeholder="Password" />
                      </div>
                      <div className="form-group col-md-3">
                        {/* <label htmlFor="inputEmail4">Username</label> */}
                        <input type="text" className="form-control" id="userId" placeholder="User Id" value={inUserId} onChange={handleUserId} />
                      </div>
                    </div>
                    <button type="submit" onClick={addUser} className="btn btn-primary">Save </button>
                    <button type="submit" onClick={updateUser} className="btn btn-success mx-2">Update User</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form  */}


      {/* Form Update */}
      {/* <div className="container my-3">
        <div className="row">
          <div className="col-md-9">
            <div className="col px-0">
              <div className="card">
                <div className="card-header">
                  <h4>Update User</h4>
                  <div className="card-body"></div>
                  <form onSubmit={updateUser}>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        <input type="text" className="form-control" id="userId" placeholder="User Id" value={inUserId} onChange={handleUserId} />
                      </div>
                      <div className="form-group col-md-3">
                        <input type="Username" className="form-control" id="username" placeholder="New user name" value={inUsername} onChange={handleUsername} />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Save </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Form  */}

      <div className="modal fade" id="addUserModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title"> Add User</h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Name</label>
                  <input type="text" id="name" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="title">Username</label>
                  <input type="text" id="username" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input type="password" className="form-control"></input>
                </div>
                <button type="submit" className="btn btn-warning mx-1">Save Changes</button>
                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
              </form>
              {/* <div className="modal-footer">
                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-warning">Save Changes</button>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </>
  )

}

export default Actions;