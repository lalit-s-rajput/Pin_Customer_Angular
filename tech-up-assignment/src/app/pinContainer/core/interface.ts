export interface ResultsData {
  status: string;
  'status-code': number;
  version: string;
  access: string;
  total: number;
  offset: 0;
  limit: number;
  data: {
    [code: string]: CountryData;
  };
}
export interface CountryData {
  country: string;
  region: string;
}
export interface ResultData {
  data: { [code: string]: CountryData };
}
