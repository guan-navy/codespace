import React from 'react'

export default function ArchiveLayout({archive,latest}:{archive:React.ReactNode,latest:React.ReactNode}) {
  return (
    <>
      <h1>Archive</h1>
      <section id='archive-filter'>
        {archive}
      </section>
      <section id='archive-latest'>
        {latest}
      </section>
    </>
  )
}
