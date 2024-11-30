import React from "react";

export default function NewsDetailLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return <>
    {modal}
    {children}
  </>;
}
