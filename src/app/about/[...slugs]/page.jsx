import React from 'react'

async function AboutSlugPage({params}) {
    const p = await params
    console.log(p);
  return (
    <div>AboutSlugPage</div>
  )
}

export default AboutSlugPage