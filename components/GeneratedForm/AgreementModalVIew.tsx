import React from "react";

interface AgreementModalProps {
  agreementContents: string | undefined;
}

export default function AgreementModalView({
  agreementContents,
}: AgreementModalProps) {
  return <div>{agreementContents}</div>;
}
