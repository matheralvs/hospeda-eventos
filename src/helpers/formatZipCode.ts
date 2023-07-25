function zipCodeMask(zipCode: string): string {
  zipCode = zipCode.replace(/\D/g, "");
  zipCode = zipCode.replace(/^(\d{5})(\d)/, "$1-$2");
  return zipCode;
}

function zipCodeUnmask(zipCode: string): string {
  return zipCode.replace(/\D/g, "");
}

export { zipCodeMask, zipCodeUnmask };
