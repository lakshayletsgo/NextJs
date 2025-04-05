import { Router, useRouter } from 'next/router'
import React from 'react'

export default function User() {
    const router = useRouter();

    // In this we just destructure the username from the link and we just prints
    const {userName} = router.query;

  return (<div>
      Your name is {userName}
    </div>)
}
