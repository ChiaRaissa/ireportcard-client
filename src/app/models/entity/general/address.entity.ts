export class AddressEntity {
  constructor(
    public addressLine: string,
    public addressLineAlt: string,
    public city: string,
    public country: string,
    public postalCode: string,
    public region: string
  ) {}
}
