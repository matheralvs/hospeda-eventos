function zipCodeMask(zipCode: string) {
  if (zipCode) {
    zipCode = zipCode.replace(/\D/g, "");
    zipCode = zipCode.replace(/^(\d{5})(\d)/, "$1-$2");
  }
  return zipCode;
}

function zipCodeUnmask(zipCode: string) {
  if (zipCode) {
    return zipCode.replace(/\D/g, "");
  }
}

export { zipCodeMask, zipCodeUnmask };
