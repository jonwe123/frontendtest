import React, { useEffect, useState } from "react";
import userService from '../services/users'
import Header from './BackEndC/Header'
import Actions from './BackEndC/Actions'

const Testbackend = () => {
  return (
    <div>
      <Header />
      <Actions />
    </div>
  )

}

export default Testbackend