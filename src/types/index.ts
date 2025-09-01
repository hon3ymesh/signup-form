// types/index.ts
export interface SignupFormData {
  reasonForSignup: string;
  phoneCountry: string;
  phone: string;
  companyName: string;
  companyRole: string;
  jobTitle: string;
  country: string;
  region: string;
  agreedToTerms: boolean;
}

export interface DropdownOption {
  value: string;
  label: string;
}

export interface CountryPhoneOption {
  value: string;
  label: string;
  code: string;
  flag: string;
}

export interface MockData {
  reasonsForSignup: DropdownOption[];
  companyRoles: DropdownOption[];
  countries: DropdownOption[];
  regions: DropdownOption[];
  phoneCountries: CountryPhoneOption[];
}