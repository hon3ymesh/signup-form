// mockData/signupData.ts
import { MockData } from '../types';

export const signupData: MockData = {
  reasonsForSignup: [
    { value: '', label: 'Select' },
    { value: 'business', label: 'Business Growth' },
    { value: 'personal', label: 'Personal Use' },
    { value: 'enterprise', label: 'Enterprise Solution' },
    { value: 'trial', label: 'Trial/Testing' }
  ],

  companyRoles: [
    { value: '', label: 'Select' },
    { value: 'ceo', label: 'CEO/Founder' },
    { value: 'cto', label: 'CTO' },
    { value: 'manager', label: 'Manager' },
    { value: 'developer', label: 'Developer' },
    { value: 'analyst', label: 'Business Analyst' },
    { value: 'other', label: 'Other' }
  ],

  countries: [
    { value: '', label: 'Select' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'in', label: 'India' },
    { value: 'jp', label: 'Japan' }
  ],

  regions: [
    { value: '', label: 'Select' },
    { value: 'north-america', label: 'North America' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia-pacific', label: 'Asia Pacific' },
    { value: 'latin-america', label: 'Latin America' },
    { value: 'middle-east', label: 'Middle East' },
    { value: 'africa', label: 'Africa' }
  ],
  phoneCountries: []
};